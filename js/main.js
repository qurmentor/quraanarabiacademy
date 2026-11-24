/* ── SCROLL REVEAL ── */
const revEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
revEls.forEach(el => revObs.observe(el));

/* ── NAV SHADOW ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').style.boxShadow =
    window.scrollY > 20 ? '0 4px 32px rgba(4,57,39,0.08)' : 'none';
});

/* ── MOBILE DRAWER ── */
function toggleDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const burger = document.getElementById('hamburger');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}
// Close drawer on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('mobileDrawer').classList.contains('open')) {
    toggleDrawer();
  }
});

/* ── LANGUAGE SWITCHER ── */
function setLang(lang, btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

/* ── PRICING TOGGLE & AUTO-SELECT INTO PLACEMENT ── */
let activePricingSession = '60';
function setPricing(session, btn) {
  activePricingSession = session;
  document.querySelectorAll('.tog-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.path-select').forEach(sel => {
    sel.style.display = sel.dataset.session === session ? 'block' : 'none';
  });
}

function selectPathwayAndScroll(pathNum) {
  const activeSelect = document.querySelector(`.path-select[data-path="${pathNum}"][data-session="${activePricingSession}"]`);
  const chosenPlan = activeSelect ? activeSelect.value : '';
  const durSel = document.getElementById('f_session_duration');
  const planSel = document.getElementById('f_plan');
  if (durSel) {
    durSel.value = activePricingSession;
    syncSessionToPlans(activePricingSession);
    markField(durSel, true);
  }
  if (planSel && chosenPlan) {
    planSel.value = chosenPlan;
    markField(planSel, true);
  }
  const el = document.getElementById('placement');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── JUZ GRID ── */
const juzGrid = document.getElementById('juzGrid');
const juzNote = document.getElementById('juzNote');
let selectedJuz = -1; // -1 = nothing selected yet (required)
for (let i = 0; i <= 30; i++) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'juz-btn';
  btn.textContent = i === 0 ? '0' : i;
  btn.setAttribute('data-juz', i);
  btn.onclick = () => {
    selectedJuz = i;
    document.querySelectorAll('.juz-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.juz-btn').forEach(b => {
      if (parseInt(b.dataset.juz) <= i && i > 0) b.classList.add('selected');
    });
    btn.classList.add('selected');
    juzNote.textContent = i === 0 ? '0 Juz — Beginning from Qa\'ida' : `${i} Juz memorised`;
    juzNote.style.color = 'var(--emerald)';
    document.getElementById('err3').style.display = 'none';
  };
  juzGrid.appendChild(btn);
}

/* ══════════════════════════════════════
   VALIDATION HELPERS
══════════════════════════════════════ */
function showErr(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.display = 'flex';
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function clearErr(id) { document.getElementById(id).style.display = 'none'; }

function markField(el, valid) {
  el.classList.toggle('field-valid', valid);
  el.classList.toggle('field-invalid', !valid);
}

function checkInput(el) { return el && el.value.trim() !== ''; }
function checkSelect(el) { return el && el.value !== ''; }
function checkEmail(el) { return el && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()); }
function checkAge(el) { const v = parseInt(el.value); return !isNaN(v) && v >= 5 && v <= 100; }
function checkPhone(el) { return el && el.value.trim().length >= 7; }

/* ══════════════════════════════════════════════════
   SESSION DURATION → PLAN SYNC
══════════════════════════════════════════════════ */
const PLANS = {
  '60': [
    { value: 'foundation-60-1', label: 'Foundation Path — 1 session/week · $52/mo ($13.00/session)' },
    { value: 'foundation-60-2', label: 'Foundation Path — 2 sessions/week · $96/mo ($12.00/session)' },
    { value: 'fluency-60-3',    label: 'Fluency Path — 3 sessions/week · $126/mo ($10.50/session)' },
    { value: 'fluency-60-4',    label: 'Fluency Path — 4 sessions/week · $152/mo ($9.50/session)' },
    { value: 'fluency-60-5',    label: 'Fluency Path — 5 sessions/week · $170/mo ($8.50/session)' },
  ],
  '30': [
    { value: 'foundation-30-1', label: 'Foundation Path — 1 session/week · $36/mo ($9.00/session)' },
    { value: 'foundation-30-2', label: 'Foundation Path — 2 sessions/week · $64/mo ($8.00/session)' },
    { value: 'fluency-30-3',    label: 'Fluency Path — 3 sessions/week · $87/mo ($7.25/session)' },
    { value: 'fluency-30-4',    label: 'Fluency Path — 4 sessions/week · $104/mo ($6.50/session)' },
    { value: 'fluency-30-5',    label: 'Fluency Path — 5 sessions/week · $120/mo ($6.00/session)' },
  ]
};
function syncSessionToPlans(duration) {
  const sel = document.getElementById('f_plan');
  sel.innerHTML = '<option value="">— Select your plan —</option>';
  if (!duration || !PLANS[duration]) return;
  PLANS[duration].forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.value;
    opt.textContent = p.label;
    sel.appendChild(opt);
  });
  markField(sel, false);
}

/* ══════════════════════════════════════════════════
   COUNTRY → CITY DYNAMIC POPULATION
══════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════
   STEP VALIDATION FUNCTIONS
══════════════════════════════════════════════════ */

/* ── STEP 1: PROFILE ── */
function validateStep1() {
  clearErr('err1');
  const name     = document.getElementById('f_name');
  const age      = document.getElementById('f_age');
  const goals    = document.getElementById('f_goals');
  const dur      = document.getElementById('f_session_duration');
  const plan     = document.getElementById('f_plan');
  const prof     = document.getElementById('f_profession');
  let errors = [];

  if (!checkInput(name))   { markField(name, false);  errors.push('Full Name'); }       else markField(name, true);
  if (!checkAge(age))      { markField(age, false);   errors.push('Age (5–100)'); }     else markField(age, true);
  if (!checkInput(goals))  { markField(goals, false); errors.push('Study Goals'); }     else markField(goals, true);
  if (!checkSelect(dur))   { markField(dur, false);   errors.push('Session Duration'); }else markField(dur, true);
  if (!checkSelect(plan))  { markField(plan, false);  errors.push('Preferred Plan'); }  else markField(plan, true);
  if (!checkInput(prof))   { markField(prof, false);   errors.push('Profession'); }        else markField(prof, true);

  if (errors.length) {
    showErr('err1', 'Please complete: ' + errors.join(', ') + '.');
    return;
  }
  nextStep(2);
}

/* ── SUPABASE CLIENT HELPER ── */
function _waitForSupabase(timeoutMs = 5000) {
  if (window._QAA_SUPABASE) return Promise.resolve(window._QAA_SUPABASE);
  return new Promise(resolve => {
    let settled = false;
    const finish = client => {
      if (settled) return;
      settled = true;
      resolve(client || null);
    };
    const onReady = () => finish(window._QAA_SUPABASE);
    window.addEventListener('qaa-supabase-ready', onReady, { once: true });
    setTimeout(() => {
      window.removeEventListener('qaa-supabase-ready', onReady);
      finish(window._QAA_SUPABASE || null);
    }, timeoutMs);
  });
}

function _generateUuid() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function _sanitizeFileName(name, fallback) {
  const cleaned = String(name || fallback || 'file')
    .replace(/[^a-zA-Z0-9._-]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80);
  return cleaned || fallback || 'file';
}

/* ── STEP 2: CONTACT ── */
// ── Referral code lookup state ──
window._referralState = {
  code:        '',   // uppercased code entered
  partnerId:   '',   // resolved server-side in Supabase
  partnerName: '',   // first name only (privacy-safe)
  valid:       false,
  checked:     false,
};
let _referralDebounce = null;

// Called on every keystroke in the referral input
function onReferralInput(input) {
  const raw  = input.value.trim().toUpperCase();

  // Reset state
  window._referralState = { code:'', partnerId:'', partnerName:'', valid:false, checked:false };
  _setRefUI('idle');

  if (!raw) return; // empty = skip
  if (raw.length < 3) return; // too short, wait

  // Debounce 600ms
  clearTimeout(_referralDebounce);
  _referralDebounce = setTimeout(() => _lookupReferral(raw), 600);
}

async function _lookupReferral(code) {
  const sb = await _waitForSupabase(3000);
  if (!sb) {
    console.warn('Supabase client not ready yet');
    _setRefUI('idle');
    return;
  }
  _setRefUI('checking');

  try {
    const cleanCode = String(code || '').trim().toUpperCase();
    const { data, error } = await sb.rpc('check_referral_code_public', { p_code: cleanCode });
    if (error) throw error;

    if (data && data.valid) {
      window._referralState = {
        code:        cleanCode,
        partnerId:   '',
        partnerName: data.first_name || '',
        valid:       true,
        checked:     true,
      };
      _setRefUI('valid');
    } else {
      window._referralState = { code: cleanCode, partnerId:'', partnerName:'', valid:false, checked:true };
      _setRefUI('invalid');
    }
  } catch (e) {
    console.error('Referral lookup failed:', e?.message || e);
    window._referralState = { code, partnerId:'', partnerName:'', valid:false, checked:false };
    _setRefUI('idle');
  }
}

function _setRefUI(state) {
  const elCheck   = document.getElementById('ref_checking');
  const elValid   = document.getElementById('ref_valid');
  const elInvalid = document.getElementById('ref_invalid');
  const elBadge   = document.getElementById('ref_badge');
  const elInput   = document.getElementById('f_referral_code');

  // Hide all first
  [elCheck, elValid, elInvalid].forEach(el => { if (el) el.style.display = 'none'; });
  if (elBadge) { elBadge.className = 'referral-badge'; elBadge.textContent = ''; }
  if (elInput) elInput.classList.remove('field-valid', 'field-invalid');

  if (state === 'checking') {
    if (elCheck) elCheck.style.display = 'flex';
  } else if (state === 'valid') {
    if (elValid) elValid.style.display = 'flex';
    if (elInput) elInput.classList.add('field-valid');
    if (elBadge) {
      elBadge.className = 'referral-badge valid';
      const name = window._referralState.partnerName;
      elBadge.textContent = '';
      elBadge.appendChild(document.createTextNode('✓ Valid referral code'));
      if (name) {
        elBadge.appendChild(document.createTextNode(' — referred by '));
        const strong = document.createElement('strong');
        strong.textContent = name;
        elBadge.appendChild(strong);
      }
    }
  } else if (state === 'invalid') {
    if (elInvalid) elInvalid.style.display = 'flex';
    if (elInput) elInput.classList.add('field-invalid');
    if (elBadge) {
      elBadge.className = 'referral-badge invalid';
      elBadge.textContent = '✗ Code not recognised — you can leave it blank to continue';
    }
  }
}

async function validateStep2() {
  clearErr('err2');
  const phone    = document.getElementById('f_phone');
  const whatsapp = document.getElementById('f_whatsapp');
  const email    = document.getElementById('f_email');
  const country  = document.getElementById('f_country');
  const city     = document.getElementById('f_city');
  let errors = [];

  if (!checkPhone(phone))    { markField(phone, false);    errors.push('Phone Number'); }       else markField(phone, true);
  if (!checkPhone(whatsapp)) { markField(whatsapp, false); errors.push('WhatsApp Number'); }    else markField(whatsapp, true);
  if (!checkEmail(email))    { markField(email, false);    errors.push('valid Email Address'); } else markField(email, true);
  if (!checkSelect(country)) { markField(country, false);  errors.push('Country'); }            else markField(country, true);
  if (!checkInput(city))     { markField(city, false);     errors.push('City'); }               else markField(city, true);
  const tz = document.getElementById('f_timezone');
  if (!checkSelect(tz))      { markField(tz, false);       errors.push('Time Zone'); }          else markField(tz, true);

  if (errors.length) {
    showErr('err2', 'Please complete: ' + errors.join(', ') + '.');
    return;
  }

  // ── If referral code was typed but not yet checked (fast typer), wait for it ──
  const refInput = document.getElementById('f_referral_code');
  const refCode  = refInput ? refInput.value.trim().toUpperCase() : '';
  if (refCode && !window._referralState.checked) {
    clearTimeout(_referralDebounce);
    _setRefUI('checking');
    await _lookupReferral(refCode);
  }

  // Invalid code entered? Warn but don't block — student can still continue
  if (refCode && !window._referralState.valid) {
    const confirmed = confirm(
      '⚠️ The referral code "' + refCode + '" was not recognised.\n\nDo you want to continue without a referral code?'
    );
    if (!confirmed) return; // let them fix it
    // Clear the invalid code so it isn't saved
    if (refInput) refInput.value = '';
    window._referralState = { code:'', partnerId:'', partnerName:'', valid:false, checked:false };
    _setRefUI('idle');
  }

  nextStep(3);
}

/* ── STEP 3: HIFZ ── */
function validateStep3() {
  clearErr('err3');
  const level = document.getElementById('f_level');

  if (selectedJuz === -1) {
    showErr('err3', 'Please select your Juz count (select 0 if you are a complete beginner).');
    juzNote.style.color = '#c0392b';
    return;
  }
  if (!checkSelect(level)) {
    markField(level, false);
    showErr('err3', 'Please select your Current Recitation Level.');
    return;
  }
  markField(level, true);
  nextStep(4);
}

/* ── STEP 4: MEDIA ── */
let audioUploaded = false;
function markUpload(zoneId, statusId, input) {
  const zone   = document.getElementById(zoneId);
  const status = document.getElementById(statusId);
  if (input.files && input.files.length > 0) {
    const name = input.files[0].name;
    status.textContent = ' ✓ ' + name;
    status.style.color = '#0f7a52';
    zone.classList.add('zone-valid');
    zone.classList.remove('zone-invalid');
    if (zoneId === 'audioZone') audioUploaded = true;
    clearErr('err4');
  }
}
function validateStep4() {
  clearErr('err4');
  // Audio and photo are both optional (recommended) so families are never blocked from completing enrollment.
  nextStep(5);
}

/* ── STEP 5: TRACK ── */
function validateStep5() {
  clearErr('err5');
  const trackSel = document.getElementById('ijazahSelect');
  const terms    = document.getElementById('f_terms');
  let errors = [];

  if (!checkSelect(trackSel)) { markField(trackSel, false); errors.push('Track Selection'); } else markField(trackSel, true);

  if (trackSel.value === 'yes') {
    const bg  = document.getElementById('f_islamic_bg');
    const hl  = document.getElementById('f_hifz_level');
    const mot = document.getElementById('f_motivation');
    if (!checkInput(bg))  { markField(bg, false);  errors.push('Islamic Studies Background'); } else markField(bg, true);
    if (!checkSelect(hl)) { markField(hl, false);  errors.push('Full Memorisation Level'); }    else markField(hl, true);
    if (!checkInput(mot)) { markField(mot, false); errors.push('Primary Motivation'); }         else markField(mot, true);
  }

  if (!terms.checked) {
    terms.style.outline = '2px solid #e74c3c';
    errors.push('agreement to Terms, Privacy & Refund Policy');
  } else {
    terms.style.outline = 'none';
  }

  if (errors.length) {
    showErr('err5', 'Please complete: ' + errors.join(', ') + '.');
    return;
  }
  nextStep(6);
}

/* ── STEP NAVIGATION ── */
let currentStep = 1;
function nextStep(n) {
  document.getElementById('step' + currentStep).classList.remove('active');
  document.getElementById('step' + n).classList.add('active');
  document.querySelectorAll('.prog-step').forEach(s => {
    const sn = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (sn === n) s.classList.add('active');
    if (sn < n)  s.classList.add('done');
  });
  currentStep = n;
  document.querySelector('.placement-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleIjazah(sel) {
  const extra = document.getElementById('ijazahExtra');
  extra.classList.toggle('visible', sel.value === 'yes');
}

async function submitForm() {

  /* ── helpers ── */
  const $ = id => document.getElementById(id);
  const btn = document.querySelector('#step6 .btn-next');
  const setStatus = msg => { btn.innerHTML = msg; };

  const ALLOWED_AUDIO = ['mp3','wav','m4a','webm','ogg','aac'];
  const ALLOWED_IMAGE = ['jpg','jpeg','png','webp'];
  const MAX_AUDIO_MB  = 15;
  const MAX_PHOTO_MB  = 5;

  // ── Wait briefly for Supabase client if ESM module is still initializing ──
  const sb = await _waitForSupabase(5000);
  if (!sb) {
    alert('Connection not ready. Please check your internet connection, refresh the page, and try again.');
    return;
  }

  // ── Validate optional files when provided ──
  const audioFile = $('f_audio')?.files[0] || null;
  const photoFile = $('f_photo')?.files[0] || null;

  if (audioFile) {
    const audioExt = audioFile.name.split('.').pop().toLowerCase();
    if (!ALLOWED_AUDIO.includes(audioExt)) {
      alert('Audio format not supported. Please upload an MP3, WAV, M4A, WEBM, OGG, or AAC file.');
      return;
    }
    if (audioFile.size > MAX_AUDIO_MB * 1024 * 1024) {
      alert('Audio file is too large. Maximum size is 15MB.');
      return;
    }
  }

  if (photoFile) {
    const imgExt = photoFile.name.split('.').pop().toLowerCase();
    if (!ALLOWED_IMAGE.includes(imgExt)) {
      alert('Photo format not supported. Please upload a JPG, JPEG, PNG, or WEBP file.');
      return;
    }
    if (photoFile.size > MAX_PHOTO_MB * 1024 * 1024) {
      alert('Photo file is too large. Maximum size is 5MB.');
      return;
    }
  }

  // ── Disable button ──
  btn.disabled = true;
  const originalHTML = btn.innerHTML;

  // ── Remove any old error ──
  const oldErr = $('submitError');
  if (oldErr) oldErr.style.display = 'none';

  try {
    setStatus('<span style="opacity:0.75">⏳ Preparing application…</span>');
    const applicationId = _generateUuid();

    // 1. Upload audio to private Supabase Storage dropbox (optional)
    let audioPath = null;
    let audioName = null;
    if (audioFile) {
      setStatus('<span style="opacity:0.75">⏳ Uploading recitation audio…</span>');
      const safeAudio = _sanitizeFileName(audioFile.name, 'recitation.mp3');
      audioPath = `submissions/${applicationId}/audio-${Date.now()}-${safeAudio}`;
      audioName = audioFile.name;
      const { error: audioErr } = await sb.storage
        .from('placement-media')
        .upload(audioPath, audioFile, {
          upsert: false,
          contentType: audioFile.type || 'audio/mpeg',
        });
      if (audioErr) throw new Error('Audio upload failed: ' + audioErr.message);
    }

    // 2. Upload photo to private Supabase Storage dropbox (optional)
    let photoPath = null;
    let photoName = null;
    if (photoFile) {
      setStatus('<span style="opacity:0.75">⏳ Uploading profile photo…</span>');
      const safePhoto = _sanitizeFileName(photoFile.name, 'photo.jpg');
      photoPath = `submissions/${applicationId}/photo-${Date.now()}-${safePhoto}`;
      photoName = photoFile.name;
      const { error: photoErr } = await sb.storage
        .from('placement-media')
        .upload(photoPath, photoFile, {
          upsert: false,
          contentType: photoFile.type || 'image/jpeg',
        });
      if (photoErr) throw new Error('Photo upload failed: ' + photoErr.message);
    }

    // 3. Submit structured application via validated Supabase RPC
    setStatus('<span style="opacity:0.75">⏳ Saving application securely…</span>');

    const ageParsed      = parseInt($('f_age')?.value || '', 10);
    const durEl          = $('f_session_duration');
    const durLabel       = durEl ? (durEl.value === '60' ? '60-Minute Sessions' : durEl.value === '30' ? '30-Minute Sessions' : '') : '';
    const planEl         = $('f_plan');
    const planCode       = planEl?.value || '';
    const planLabel      = planEl && planEl.selectedIndex > 0 ? (planEl.options[planEl.selectedIndex]?.textContent || planCode) : planCode;
    const isIjazah       = $('ijazahSelect')?.value === 'yes';
    const childrenParsed = window._familyMode === 'siblings' ? parseInt($('f_children_count')?.value || '', 10) : NaN;
    const fullName       = $('f_name')?.value.trim() || '';

    const { data, error } = await sb.rpc('submit_placement_application', {
      p_application_id:   applicationId,
      p_full_name:        fullName,
      p_age:              Number.isFinite(ageParsed) ? ageParsed : null,
      p_goals:            $('f_goals')?.value.trim() || null,
      p_profession:       $('f_profession')?.value.trim() || null,
      p_session_duration: durLabel || null,
      p_plan_code:        planCode || null,
      p_plan_label:       planLabel || null,
      p_phone:            $('f_phone')?.value.trim() || '',
      p_whatsapp:         $('f_whatsapp')?.value.trim() || '',
      p_email:            $('f_email')?.value.trim() || '',
      p_country:          $('f_country')?.value || null,
      p_city:             $('f_city')?.value.trim() || null,
      p_timezone:         $('f_timezone')?.value || Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      p_juz_memorised:    selectedJuz >= 0 ? selectedJuz : null,
      p_recitation_level: $('f_level')?.value || null,
      p_audio_path:       audioPath,
      p_audio_name:       audioName,
      p_photo_path:       photoPath,
      p_photo_name:       photoName,
      p_ijazah_track:     isIjazah,
      p_islamic_bg:       isIjazah ? ($('f_islamic_bg')?.value.trim() || null) : null,
      p_hifz_level:       isIjazah ? ($('f_hifz_level')?.value || null) : null,
      p_motivation:       isIjazah ? ($('f_motivation')?.value.trim() || null) : null,
      p_family_mode:      window._familyMode || null,
      p_children_count:   Number.isFinite(childrenParsed) ? childrenParsed : null,
      p_referral_code:    window._referralState?.valid ? window._referralState.code : null,
      p_source:           'landing_page',
    });

    if (error) throw error;

    const refCode = data?.reference_code || '';
    const refEl = $('formSuccessRef');
    if (refEl && refCode) {
      refEl.textContent = 'Reference Code: ' + refCode;
      refEl.style.display = 'inline-block';
    }

    const waBtn = $('formSuccessWa');
    if (waBtn) {
      const waMsg = [
        'Assalamu Alaikum Quraan Arabi Academy,',
        `I have just submitted my Placement Evaluation application.`,
        fullName ? `Name: ${fullName}` : '',
        refCode ? `Reference Code: ${refCode}` : '',
        planLabel ? `Selected Plan: ${planLabel}` : '',
      ].filter(Boolean).join('\n');
      waBtn.href = 'https://wa.me/201557864122?text=' + encodeURIComponent(waMsg);
    }

    // ── Success ──
    $('step6').classList.remove('active');
    $('step6').style.display       = 'none';
    $('formSuccess').style.display = 'block';
    document.querySelector('.form-head').style.display = 'none';

  } catch (err) {
    console.error('Supabase submission error:', err);
    btn.disabled  = false;
    btn.innerHTML = originalHTML;

    let errBox = $('submitError');
    if (!errBox) {
      errBox = document.createElement('div');
      errBox.id = 'submitError';
      btn.parentElement.parentElement.insertBefore(errBox, btn.parentElement);
    }
    errBox.style.cssText = 'background:#fff0f0;border:1.5px solid #e74c3c;border-radius:10px;padding:14px 18px;margin-bottom:16px;font-size:13px;color:#c0392b;font-weight:600;';
    errBox.innerHTML = '⚠️ Submission failed. Please try again or <a href="https://wa.me/201557864122" target="_blank" style="color:#c0392b;text-decoration:underline;">contact us on WhatsApp</a>.';
    errBox.style.display = 'block';
    errBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ── WHATSAPP TOOLTIP AUTO-DISMISS ── */
setTimeout(() => {
  const t = document.getElementById('waTooltip');
  if (t) { t.style.transition = 'opacity 0.5s'; t.style.opacity = '0'; setTimeout(() => t.remove(), 500); }
}, 6000);

/* ══════════════════════════════════════════════════
   FAMILY MODE — discount section CTAs
══════════════════════════════════════════════════ */
window._familyMode = null;
let _childrenCount = 2;

function activateFamilyMode(mode) {
  window._familyMode = mode;
  const banner    = document.getElementById('familyBanner');
  const label     = document.getElementById('familyBannerLabel');
  const desc      = document.getElementById('familyBannerDesc');
  const icon      = document.getElementById('familyBannerIcon');
  const countWrap = document.getElementById('childrenCountWrap');
  if (!banner) return;

  banner.style.display = 'block';

  if (mode === 'siblings') {
    icon.textContent  = '👧👦';
    label.textContent = 'Sibling Enrolment — Family Discount';
    desc.textContent  = 'Select how many children you are enrolling (2nd child: 10% off · 3rd child+: 15% off/mo).';
    countWrap.style.display = 'block';
    document.getElementById('f_children_count').value = _childrenCount;
    updateChildrenDisplay();
  } else if (mode === 'loyalty') {
    icon.textContent  = '🏅';
    label.textContent = 'Loyalty Reward Track';
    desc.textContent  = 'Complete 12 consecutive months and receive a permanent 10% loyalty discount automatically.';
    countWrap.style.display = 'none';
  } else {
    icon.textContent  = '🤲';
    label.textContent = 'Parent & Child Enrolment';
    desc.textContent  = 'Parent plan receives 20% off/month and Child plan receives 15% off/month.';
    countWrap.style.display = 'none';
  }

  const goals = document.getElementById('f_goals');
  if (goals && !goals.value) {
    goals.placeholder = mode === 'siblings'
      ? 'e.g. Enrolling my children for structured Qur\'an education with family discount...'
      : mode === 'loyalty'
        ? 'e.g. Committed to a structured 12-month Qur\'an & Arabic programme...'
        : 'e.g. Enrolling together with my child for Qur\'an study...';
  }
}

function adjustChildren(delta) {
  _childrenCount = Math.max(2, Math.min(10, _childrenCount + delta));
  document.getElementById('f_children_count').value = _childrenCount;
  updateChildrenDisplay();
}

function updateChildrenDisplay() {
  const el = document.getElementById('childrenCount');
  if (el) el.textContent = _childrenCount;
  const note = document.querySelector('#childrenCountWrap > div:last-child');
  if (note) {
    note.textContent = _childrenCount >= 3
      ? '2nd child: 10% off · 3rd child+: 15% off per month'
      : '2nd child: 10% off per month';
  }
}

/* ══════════════════════════════════════════════════
   PORTAL SHOWCASE — Switch Real Student Portal Views
══════════════════════════════════════════════════ */
function switchPortalShot(view, btn) {
  document.querySelectorAll('.portal-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const calImg = document.getElementById('portalShotCalendar');
  const tchImg = document.getElementById('portalShotTeacher');
  const urlEl  = document.getElementById('portalShotUrl');
  const capEl  = document.getElementById('portalShotCaption');
  if (view === 'teacher') {
    if (calImg) calImg.classList.remove('active');
    if (tchImg) tchImg.classList.add('active');
    if (urlEl) urlEl.textContent = 'Quraan Arabi Academy · Student Portal — My Assigned Teacher';
    if (capEl) capEl.innerHTML = '<strong>Certified Teacher Profile &amp; Safe Privacy:</strong> Students and parents view their assigned teacher\'s academic qualifications, specialties, and completed lessons, with direct Administration messaging built right in.';
  } else {
    if (tchImg) tchImg.classList.remove('active');
    if (calImg) calImg.classList.add('active');
    if (urlEl) urlEl.textContent = 'Quraan Arabi Academy · Student Portal — Calendar & Schedule';
    if (capEl) capEl.innerHTML = '<strong>Monthly Interactive Calendar:</strong> View all scheduled, in-progress, and completed sessions in one glance, with one-click classroom entry and post-lesson reports.';
  }
}

/* ══════════════════════════════════════════════════
   JOURNAL — Live Search Filter & In-Page Article Reader
══════════════════════════════════════════════════ */
function filterBlog(rawQuery) {
  const q = (rawQuery || '').trim().toLowerCase();
  const grid = document.getElementById('blogGrid');
  const empty = document.getElementById('blogEmpty');
  if (!grid) return;
  const cards = grid.querySelectorAll('.blog-feat, .blog-card');
  let visible = 0;
  cards.forEach(card => {
    const hay = ((card.dataset.search || '') + ' ' + card.textContent).toLowerCase();
    const match = !q || hay.includes(q);
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

const _journalArticles = {
  'tajweed-5-rules': {
    tag: 'Tajweed',
    meta: 'March 2025 · 8 min read · Quraan Arabi Academy',
    title: 'Why Your Tajweed Stops Here: The 5 Rules Every Student Gets Wrong',
    body: `
      <p>Many dedicated students complete introductory Qa'ida and Tajweed courses, yet find their recitation still sounds hesitant or imprecise. In our evaluation sessions across hundreds of learners, five subtle technical errors account for almost every plateau:</p>
      <h4>1. Mixing Heavy (Tafkheem) and Light (Tarqeeq) Adjacent Letters</h4>
      <p>When a light letter precedes a heavy letter—such as the <em>Lam</em> in <strong>وَلَا الضَّالِّينَ</strong> or the <em>Alif</em> after <em>Mīm</em>—students unconsciously thicken the light letter in anticipation. Mastering the independent root of the tongue resolves this immediately.</p>
      <h4>2. Inconsistent Madd (Elongation) Counts</h4>
      <p>Measuring 2, 4, or 6 counts requires a steady internal rhythm matched to your recitation pace (<em>Tahqeeq</em>, <em>Tadweer</em>, or <em>Hadr</em>), rather than guessing lengths differently in each verse.</p>
      <h4>3. Over-Nasalising Non-Ghunnah Letters</h4>
      <p>Allowing air into the nasal cavity (<em>Khayshoom</em>) during regular vowels or <em>Madd</em> letters dulls the clarity of recitation. A simple 30-second daily pinch test with a certified tutor eliminates this habit within weeks.</p>
      <h4>4. Incomplete Qalqalah on Stopping</h4>
      <p>Students either swallow the echo on <em>Qaf, Ta, Ba, Jeem, Dal</em> at the end of an ayah, or add an unwanted vowel sound after it. True <em>Qalqalah Kubra</em> releases cleanly without shifting toward a <em>Fathah</em>.</p>
      <h4>5. Stopping Without Preserving Meaning (Waqf &amp; Ibtida')</h4>
      <p>Recitation precision is inseparable from Qur'anic meaning. Knowing where to pause and where to resume transforms your reading from mechanical pronunciation into living reflection.</p>
      <p><strong>Next step:</strong> Book your complimentary Placement Evaluation and let an Ijazah-certified tutor diagnose your exact recitation profile.</p>
    `
  },
  'quranic-arabic-vs-msa': {
    tag: 'Grammar',
    meta: 'February 2026 · 5 min read · Quraan Arabi Academy',
    title: "Qur'anic Arabic vs. Modern Standard: The Difference That Changes Everything",
    body: `
      <p>Students often spend years studying airport dialogues and newspaper headlines in Modern Standard Arabic (MSA), only to open Surah Al-Baqarah and feel completely lost. Understanding the structural difference between MSA and Classical Qur'anic Arabic saves years of misdirected effort.</p>
      <h4>1. Vocabulary &amp; Root Depth</h4>
      <p>Roughly 300 high-frequency Qur'anic roots account for over 70% of the vocabulary in the Mushaf. Focusing directly on Qur'anic root morphology (<em>Sarf</em>) unlocks comprehension dramatically faster than general conversational word lists.</p>
      <h4>2. Rhetorical Word Order (Balaghah)</h4>
      <p>While MSA relies heavily on predictable subject-verb-object patterns, the Qur'an shifts word order intentionally for emphasis, exclusivity, and spiritual resonance—such as <em>"Iyyaka na'budu"</em> ("You alone we worship").</p>
      <h4>3. Case Endings (I'rab) Carry Essential Meaning</h4>
      <p>In everyday MSA media, final vowel endings are frequently dropped. In the Qur'an, a single <em>Dammah</em> versus a <em>Fathah</em> distinguishes the doer from the object and anchors accurate Tafsir.</p>
      <p><strong>Our Academy approach:</strong> Every grammar rule is taught directly through real Qur'anic verses—so every single lesson deepens your prayer and recitation from Week 1.</p>
    `
  },
  'tafsir-approach': {
    tag: 'Tafsir',
    meta: 'November 2025 · 6 min read · Quraan Arabi Academy',
    title: 'How to Approach Tafsir as a Non-Arabic Speaker',
    body: `
      <p>You do not need ten years of classical Arabic before beginning authentic, scholarly engagement with the meanings of the Qur'an. What you need is a disciplined methodology that protects you from superficial reading.</p>
      <h4>1. Start with Short Surahs You Recite Daily</h4>
      <p>Beginning with Juz 'Amma immediately transforms your five daily prayers. Studying the linguistic nuance of a 5-verse Surah builds deeper transformation than skimming 50 pages of translation.</p>
      <h4>2. Anchor Every Ayah in Context (Asbab al-Nuzul &amp; Surah Theme)</h4>
      <p>Every Surah carries a unified spiritual axis. Reading verses through authentic classical works such as <em>Tafsir al-Sa'di</em> and <em>Tafsir Ibn Kathir</em> under a guided instructor prevents isolated misinterpretations.</p>
      <h4>3. Pair Key Arabic Terms with Reflection</h4>
      <p>Even as an English-speaking learner, learning 3–5 core Arabic keywords per passage reveals shades of meaning that no English translation can capture in a single word.</p>
      <p><strong>Structured guidance matters:</strong> Inside our Foundation &amp; Fluency tracks, students learn recitation alongside foundational Qur'anic understanding so heart, tongue, and intellect grow together.</p>
    `
  },
  'tajweed-simplified-3-steps': {
    tag: 'Tajweed Simplified',
    meta: '2026 · 5 min read · Quraan Arabi Academy',
    title: 'Reciting with Ease: A Simple 3-Step Method to Master Any New Surah',
    body: `
      <p>Many beginners think good Tajweed means memorising a thick textbook before opening the Mushaf. In reality, Tajweed was transmitted orally for centuries to make reciting the Qur'an <strong>easier, clearer, and more natural</strong>—never stressful.</p>
      <h4>Step 1: Listen &amp; Trace with Your Finger (2 Minutes)</h4>
      <p>Before attempting to pronounce a new passage on your own, listen twice to a clear, measured reciter (such as Shaykh Al-Husary) while visually following every vowel and stopping mark in the Mushaf. Your ear absorbs 70% of correct elongation and melody before your tongue even moves.</p>
      <h4>Step 2: Slow-Motion Articulation (Focus on ONE Rule Only)</h4>
      <p>Do not try to police twenty rules simultaneously. On your first slow read, focus solely on clean letter exits (<em>Makharij</em>) and full vowel clarity—making sure every <em>Fathah</em>, <em>Kasrah</em>, and <em>Dammah</em> is distinct without rushing.</p>
      <h4>Step 3: Connect the Flow &amp; Lock the Rhythm</h4>
      <p>Once individual words feel comfortable, read the verse smoothly from start to stop at a calm, unhurried pace. Repeat the verse three times cleanly before moving to the next. Three clean repetitions build stronger muscle memory than twenty rushed ones.</p>
      <p><strong>Remember the Prophetic encouragement:</strong> The Prophet ﷺ promised a <em>double reward</em> for the believer who strives patiently to recite the Qur'an even when it feels challenging at first.</p>
    `
  },
  'noon-saakinah-easy-map': {
    tag: 'Tajweed Simplified',
    meta: '2026 · 6 min read · Quraan Arabi Academy',
    title: 'Noon Saakinah & Tanween Made Simple: The 4-Rule Mental Map',
    body: `
      <p>Almost every Tajweed syllabus starts with the rules of <strong>Noon Saakinah (نْ)</strong> and <strong>Tanween (ـً ـٍ ـٌ)</strong>—because they appear in nearly every single line of the Qur'an! Instead of getting lost in technical jargon, think of them as <strong>four simple natural sounds</strong> based on the very next letter:</p>
      <h4>1. Say It Clearly — Izhar (الإظهار)</h4>
      <p>When the next letter comes from the <strong>throat</strong> (ء هـ ع ح غ خ), your tongue naturally pronounces a crisp, clear <em>"N"</em> without holding any extra nasal hum. Example: <em>Min khawf</em> (مِنْ خَوْفٍ).</p>
      <h4>2. Merge Smoothly — Idgham (الإدغام)</h4>
      <p>When the next letter is in the word <strong>يَرْمَلُون (Y-R-M-L-W-N)</strong>, the <em>N</em> melts seamlessly into the next letter so your mouth doesn't stumble. Hold a soft 2-count hum for <em>ي ن م و</em>, and merge cleanly without a hum for <em>ل ر</em>.</p>
      <h4>3. Flip to a Soft "M" — Iqlab (الإقلاب)</h4>
      <p>One letter only: <strong>Baa (ب)</strong>. Try saying <em>"Min Ba'd"</em> quickly—your lips naturally want to close for <em>B</em>, so the <em>N</em> gently turns into a soft <em>M</em> with a 2-count nasal hum (<em>Mim-ba'd</em>). Even the Mushaf marks it for you with a tiny <strong>م</strong> above the letter!</p>
      <h4>4. Hide Gently — Ikhfa (الإخفاء)</h4>
      <p>For all remaining 15 letters, do not touch the roof of your mouth for a full <em>N</em>; instead, hover lightly in position for the upcoming letter with a gentle 2-count nasal hum.</p>
      <p><strong>Golden Tip:</strong> Look at how logical the Arabic mouth is—every Tajweed rule exists simply to make transitions between letters smoother and more melodious!</p>
    `
  },
  'smooth-madd-breath': {
    tag: 'Tajweed Simplified',
    meta: '2026 · 5 min read · Quraan Arabi Academy',
    title: 'How to Stop Running Out of Breath While Reciting the Qur\'an',
    body: `
      <p>Running out of breath mid-ayah is one of the most common frustrations for students—and it often causes rushed vowels, shortened elongations (<em>Madd</em>), and awkward mid-word stops. Here are four effortless adjustments that change your recitation immediately:</p>
      <h4>1. Sit Upright and Breathe from the Diaphragm</h4>
      <p>Hunching over a phone or desk compresses your lungs by nearly a third. Raise your Mushaf or screen closer to eye level, relax your shoulders, and take a calm, silent breath through the nose before beginning each verse.</p>
      <h4>2. Let the Mushaf's Stopping Signs Guide You (Waqf)</h4>
      <p>You never have to finish a long verse in one heroic breath! Watch for the helpful small symbols above the line: <strong>مـ</strong> (mandatory stop), <strong>قلى</strong> (better to stop), and <strong>ج</strong> (permissible to stop). Stopping gracefully preserves both your breath and the verse's meaning.</p>
      <h4>3. Keep Your Madd Counts Proportional to Your Pace</h4>
      <p>A 2-count natural elongation (<em>Madd Tabee'i</em>) takes roughly the time of opening or closing one finger calmly. Don't stretch 2-count vowels into 4 counts—that silently drains half your breath before you reach the real 4- or 5-count elongations!</p>
      <h4>4. If Breath Ends Early, Back Up 1–2 Words Cleanly</h4>
      <p>If you must stop unexpectedly on a long ayah, simply pause cleanly with a <em>Sukoon</em> on the last word, take a calm breath, and resume from the last natural phrase—never gasp and push forward.</p>
      <p><strong>Practice with a live guide:</strong> In our 1-on-1 sessions, your tutor coaches your exact breathing points and Waqf pauses in real time until calm, flowing recitation feels effortless.</p>
    `
  }
};

function openArticle(slug) {
  const art = _journalArticles[slug];
  const modal = document.getElementById('articleModal');
  if (!art || !modal) return;
  document.getElementById('amTag').textContent = art.tag;
  document.getElementById('amMeta').textContent = art.meta;
  document.getElementById('amTitle').textContent = art.title;
  document.getElementById('amBody').innerHTML = art.body;
  const waLink = document.getElementById('amWaLink');
  if (waLink) {
    waLink.href = 'https://wa.me/201557864122?text=' + encodeURIComponent(
      'Assalamu Alaikum! I just read "' + art.title + '" on Quraan Arabi Academy and would like to learn more about your programs.'
    );
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  const modal = document.getElementById('articleModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('articleModal');
    if (modal && modal.classList.contains('open')) closeArticleModal();
  }
});
