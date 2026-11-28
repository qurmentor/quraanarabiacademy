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

/* ── REAL BILINGUAL LANGUAGE SWITCHER (EN / AR) ── */
let _activePortalView = 'calendar';
let _activeBlogCategory = 'all';
let _currentArticleSlug = null;

function setLang(lang) {
  const safeLang = lang === 'ar' ? 'ar' : 'en';
  window._QAA_LANG = safeLang;
  try { localStorage.setItem('qaa_landing_lang', safeLang); } catch (_) {}

  document.documentElement.lang = safeLang;
  document.documentElement.dir  = safeLang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang-btn').forEach(b => {
    const bLang = b.dataset.lang || (b.textContent.trim().toLowerCase().startsWith('en') ? 'en' : 'ar');
    b.classList.toggle('active', bLang === safeLang);
  });

  const dict = (window._QAA_I18N && window._QAA_I18N[safeLang]) || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (k && dict[k] !== undefined) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (k && dict[k] !== undefined) el.innerHTML = dict[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (k && dict[k] !== undefined) el.setAttribute('placeholder', dict[k]);
  });

  // Update all 9 Journal cards in the active language
  const articles = window._QAA_ARTICLES || {};
  const readMoreTxt = dict['blog.read_more'] || (safeLang === 'ar' ? 'اقرأ المقال كاملًا' : 'Read full article');
  document.querySelectorAll('[data-article-id]').forEach(card => {
    const id = card.getAttribute('data-article-id');
    const pack = articles[id] && articles[id][safeLang];
    if (!pack) return;
    const tagEl = card.querySelector('.blog-tag');
    const metaEl = card.querySelector('.blog-meta');
    const titleEl = card.querySelector('h3');
    const pEl = card.querySelector('p');
    const rmEl = card.querySelector('.brm-label');
    if (tagEl) tagEl.textContent = pack.tag;
    if (metaEl) metaEl.textContent = pack.shortMeta || pack.meta;
    if (titleEl) titleEl.textContent = pack.title;
    if (pEl) pEl.textContent = pack.excerpt;
    if (rmEl) rmEl.textContent = readMoreTxt;
  });

  // Refresh Student Portal Showcase caption in active language
  _renderPortalCaption(_activePortalView);

  // Refresh Interactive Architectural Widgets in active language
  if (typeof renderHeroTrack === 'function') renderHeroTrack(_activeHeroTrack);
  if (typeof selectRoadmapStage === 'function') selectRoadmapStage(_activeRoadmapStage);
  if (typeof selectReachHub === 'function') selectReachHub(_activeReachHub);
  if (typeof updateFamilyCalculator === 'function') updateFamilyCalculator();

  // If an article modal is open right now, re-render it live in the new language!
  const modal = document.getElementById('articleModal');
  if (modal && modal.classList.contains('open') && _currentArticleSlug) {
    openArticle(_currentArticleSlug);
  }
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
function checkAge(el) { const v = parseInt(el.value); return !isNaN(v) && v >= 2 && v <= 100; }
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
  if (!checkAge(age))      { markField(age, false);   errors.push('Age (2–100)'); }     else markField(age, true);
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

// Auto-fill & live-verify ?ref=QAA-XXXXXX from a parent's invitation link
(function initReferralFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const refParam = (params.get('ref') || params.get('referral') || '').trim().toUpperCase();
    if (!refParam || refParam.length < 3) return;
    const input = document.getElementById('f_referral_code');
    if (input) {
      input.value = refParam;
      _lookupReferral(refParam);
    }
  } catch (_) {}
})();

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
function _renderPortalCaption(view) {
  const urlEl  = document.getElementById('portalShotUrl');
  const capEl  = document.getElementById('portalShotCaption');
  const isAr   = window._QAA_LANG === 'ar';
  if (view === 'teacher') {
    if (urlEl) urlEl.textContent = isAr
      ? 'أكاديمية قرآن عربي · بوابة الطالب — بطاقة معلمي'
      : 'Quraan Arabi Academy · Student Portal — My Assigned Teacher';
    if (capEl) capEl.innerHTML = isAr
      ? '<strong>بطاقة المعلم المعتمد وخصوصية آمنة:</strong> يطّلع الطالب وولي الأمر على مؤهلات المعلم وتخصصاته وعدد الحصص المكتملة مع تواصل مباشر وآمن مع الإدارة.'
      : '<strong>Certified Teacher Profile &amp; Safe Privacy:</strong> Students and parents view their assigned teacher\'s academic qualifications, specialties, and completed lessons, with direct Administration messaging built right in.';
  } else {
    if (urlEl) urlEl.textContent = isAr
      ? 'أكاديمية قرآن عربي · بوابة الطالب — التقويم والجدول'
      : 'Quraan Arabi Academy · Student Portal — Calendar & Schedule';
    if (capEl) capEl.innerHTML = isAr
      ? '<strong>تقويم شهري تفاعلي:</strong> تابع جميع الحصص المجدولة والمباشرة والمكتملة بنظرة واحدة، مع دخول سريع للفصل وتقارير تفصيلية بعد كل حصة.'
      : '<strong>Monthly Interactive Calendar:</strong> View all scheduled, in-progress, and completed sessions in one glance, with one-click classroom entry and post-lesson reports.';
  }
}

function switchPortalShot(view, btn) {
  _activePortalView = view === 'teacher' ? 'teacher' : 'calendar';
  document.querySelectorAll('.portal-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const calImg = document.getElementById('portalShotCalendar');
  const tchImg = document.getElementById('portalShotTeacher');
  if (_activePortalView === 'teacher') {
    if (calImg) calImg.classList.remove('active');
    if (tchImg) tchImg.classList.add('active');
  } else {
    if (tchImg) tchImg.classList.remove('active');
    if (calImg) calImg.classList.add('active');
  }
  _renderPortalCaption(_activePortalView);
}

/* ══════════════════════════════════════════════════
   JOURNAL — Category Filter, Bilingual Search & Modal Reader
══════════════════════════════════════════════════ */
function filterBlogCategory(cat, btn) {
  _activeBlogCategory = cat || 'all';
  document.querySelectorAll('.jf-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterBlog();
}

function filterBlog(rawQuery) {
  const searchEl = document.getElementById('blogSearch');
  const q = ((rawQuery !== undefined ? rawQuery : (searchEl ? searchEl.value : '')) || '').trim().toLowerCase();
  const grid = document.getElementById('blogGrid');
  const empty = document.getElementById('blogEmpty');
  if (!grid) return;
  const cards = grid.querySelectorAll('.blog-feat, .blog-card');
  let visible = 0;
  cards.forEach(card => {
    const cat = card.dataset.category || 'all';
    const catMatch = _activeBlogCategory === 'all' || cat === _activeBlogCategory;
    const hay = ((card.dataset.search || '') + ' ' + card.textContent).toLowerCase();
    const qMatch = !q || hay.includes(q);
    const match = catMatch && qMatch;
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

function openArticle(slug) {
  const articles = window._QAA_ARTICLES || {};
  const entry = articles[slug];
  const lang  = window._QAA_LANG === 'ar' ? 'ar' : 'en';
  const art   = entry && (entry[lang] || entry.en);
  const modal = document.getElementById('articleModal');
  if (!art || !modal) return;

  _currentArticleSlug = slug;
  const card = document.getElementById('amCard');
  if (card) {
    card.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    card.setAttribute('lang', lang);
  }
  document.getElementById('amTag').textContent = art.tag;
  document.getElementById('amMeta').textContent = art.meta;
  document.getElementById('amTitle').textContent = art.title;
  document.getElementById('amBody').innerHTML = art.body;
  const waLink = document.getElementById('amWaLink');
  if (waLink) {
    const waText = lang === 'ar'
      ? 'السلام عليكم! قرأت للتو مقال «' + art.title + '» في مجلة أكاديمية قرآن عربي وأرغب في معرفة المزيد عن برامجكم.'
      : 'Assalamu Alaikum! I just read "' + art.title + '" on Quraan Arabi Academy and would like to learn more about your programs.';
    waLink.href = 'https://wa.me/201557864122?text=' + encodeURIComponent(waText);
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

// Language initialization runs at the very bottom after all interactive modules are defined.

/* ── 1-CLICK COPY HELPER FOR OFFICIAL EMAILS & PHONE ── */
function copyContactText(text, btn) {
  const isAr = window._QAA_LANG === 'ar';
  const prev = btn ? btn.textContent : '';
  const showDone = () => {
    if (!btn) return;
    btn.textContent = isAr ? '✓ تم النسخ' : '✓ Copied';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = prev;
      btn.classList.remove('copied');
    }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showDone).catch(() => {
      window.prompt(isAr ? 'انسخ النص:' : 'Copy:', text);
    });
  } else {
    window.prompt(isAr ? 'انسخ النص:' : 'Copy:', text);
  }
}


/* ═══════════════════════════════════════════════════════════════════════════
   ARCHITECTURAL INTERACTIVE ENGINES
   (Scroll Bar · Hero Constellation · Hero Telemetry · 4-Stage Roadmap ·
    Global Reach Map · Animated Counters · Family Savings Calculator)
═══════════════════════════════════════════════════════════════════════════ */

/* 1. TOP SCROLL PROGRESS BAR */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = (h.scrollHeight - h.clientHeight) || 1;
    bar.style.width = Math.min(100, Math.max(0, (window.scrollY / max) * 100)).toFixed(1) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* 2. LIGHTWEIGHT HERO GEOMETRIC CONSTELLATION CANVAS */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroGeoCanvas');
  if (!canvas) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0, height = 0, nodes = [], running = true;
  const mouse = { x: -999, y: -999 };

  const resize = () => {
    const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: 700 };
    width = canvas.width = Math.max(320, Math.floor(rect.width));
    height = canvas.height = Math.max(420, Math.floor(rect.height));
    const count = Math.min(34, Math.max(16, Math.floor(width / 46)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.8 + 1.1
    }));
  };

  const heroEl = canvas.parentElement;
  if (heroEl) {
    heroEl.addEventListener('mousemove', e => {
      const r = heroEl.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }, { passive: true });
    heroEl.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        running = entries[0] && entries[0].isIntersecting;
      }, { threshold: 0.05 }).observe(heroEl);
    }
  }

  window.addEventListener('resize', resize);
  resize();

  const tick = () => {
    if (running) {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 145) {
            ctx.strokeStyle = 'rgba(212,175,55,' + ((1 - dist / 145) * 0.22).toFixed(3) + ')';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 160) {
          ctx.strokeStyle = 'rgba(246,225,164,' + ((1 - md / 160) * 0.4).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = 'rgba(246,225,164,0.68)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
})();

/* 3. CURSOR SPOTLIGHT EFFECT ON CARDS */
document.querySelectorAll('.spotlight-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
});

/* 4. INTERACTIVE HERO TELEMETRY TRACK SWITCHER */
let _activeHeroTrack = 'tajweed';
const HERO_TRACK_DATA = {
  tajweed: {
    pct: 72,
    en: {
      tag: 'Makharij & Sifaat Precision',
      meta: 'Verified post-lesson report after every class',
      lessons: [
        { ico: '📖', nm: 'Makharij al-Huroof', mt: 'Tajweed · Lesson 3 of 8 · Completed', done: true },
        { ico: '✍️', nm: 'Sifaat al-Huroof', mt: 'Tajweed · Lesson 4 of 8 · Completed', done: true },
        { ico: '🎯', nm: 'Ahkam al-Noon al-Sakinah', mt: 'Tajweed · Module 5 · Up Next', done: false }
      ]
    },
    ar: {
      tag: 'دقّة المخارج والصفات',
      meta: 'تقرير متابعة موثّق يصلك فور نهاية كل حصة',
      lessons: [
        { ico: '📖', nm: 'مخارج الحروف الأساسية', mt: 'التجويد · الدرس 3 من 8 · مكتمل', done: true },
        { ico: '✍️', nm: 'صفات الحروف والتفخيم', mt: 'التجويد · الدرس 4 من 8 · مكتمل', done: true },
        { ico: '🎯', nm: 'أحكام النون الساكنة والتنوين', mt: 'التجويد · الوحدة 5 · التالي', done: false }
      ]
    }
  },
  hifz: {
    pct: 86,
    en: {
      tag: 'Structured Hifz & Muraja\'ah',
      meta: 'New memorisation balanced with daily retention cycles',
      lessons: [
        { ico: '🌙', nm: 'Surah Al-Mulk (1–30)', mt: 'Hifz · Verified Mastery · Completed', done: true },
        { ico: '🔄', nm: 'Juz\' Amma Cumulative Review', mt: 'Muraja\'ah · 98% Accuracy · Completed', done: true },
        { ico: '🌟', nm: 'Surah Al-Qalam (1–20)', mt: 'Hifz · Assigned Target · Up Next', done: false }
      ]
    },
    ar: {
      tag: 'حفظ متقن ومراجعة تراكمية',
      meta: 'توازن دقيق بين الحفظ الجديد والمراجعة القريبة والبعيدة',
      lessons: [
        { ico: '🌙', nm: 'سورة الملك (1–30)', mt: 'حفظ جديد · إتقان موثّق · مكتمل', done: true },
        { ico: '🔄', nm: 'مراجعة شاملة لجزء عمّ', mt: 'مراجعة · دقة 98% · مكتمل', done: true },
        { ico: '🌟', nm: 'سورة القلم (1–20)', mt: 'الحفظ القادم · الهدف التالي', done: false }
      ]
    }
  },
  arabic: {
    pct: 64,
    en: {
      tag: 'Noor Al-Bayan & Qur\'anic Arabic',
      meta: 'From Arabic script to understanding Qur\'anic roots',
      lessons: [
        { ico: '🔤', nm: 'Noor Al-Bayan Vowel Fluency', mt: 'Reading · Stage 2 · Completed', done: true },
        { ico: '🌿', nm: '300 High-Frequency Qur\'anic Roots', mt: 'Vocabulary · Unit 4 · Completed', done: true },
        { ico: '📜', nm: 'Qur\'anic Sentence Structure', mt: 'Grammar · Module 2 · Up Next', done: false }
      ]
    },
    ar: {
      tag: 'نور البيان والعربية القرآنية',
      meta: 'من إتقان الحروف والقرائية إلى فهم جذور ألفاظ القرآن',
      lessons: [
        { ico: '🔤', nm: 'إتقان القراءة بمنهج نور البيان', mt: 'القرائية · المرحلة 2 · مكتمل', done: true },
        { ico: '🌿', nm: 'أكثر 300 جذر قرآني تكرارًا', mt: 'المفردات · الوحدة 4 · مكتمل', done: true },
        { ico: '📜', nm: 'تراكيب الجملة في القرآن الكريم', mt: 'النحو القرآني · الوحدة 2 · التالي', done: false }
      ]
    }
  }
};

function renderHeroTrack(key) {
  const safeKey = HERO_TRACK_DATA[key] ? key : 'tajweed';
  _activeHeroTrack = safeKey;
  const lang = window._QAA_LANG === 'ar' ? 'ar' : 'en';
  const entry = HERO_TRACK_DATA[safeKey];
  const copy = entry[lang] || entry.en;

  document.querySelectorAll('.hcard-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.htrack === safeKey);
  });

  const circumference = 238.76;
  const offset = circumference - (circumference * entry.pct) / 100;
  const arc = document.getElementById('heroRingArc');
  if (arc) arc.style.strokeDashoffset = offset.toFixed(2);
  const ringPct = document.getElementById('heroRingPct');
  if (ringPct) ringPct.textContent = entry.pct + '%';
  const barPct = document.getElementById('heroBarPct');
  if (barPct) barPct.textContent = entry.pct + '%';
  const barFill = document.getElementById('heroBarFill');
  if (barFill) barFill.style.width = entry.pct + '%';
  const tagEl = document.getElementById('heroTrackTag');
  if (tagEl) tagEl.textContent = copy.tag;
  const metaEl = document.getElementById('heroTrackMeta');
  if (metaEl) metaEl.textContent = copy.meta;

  const list = document.getElementById('heroLessonList');
  if (list) {
    list.innerHTML = copy.lessons.map(l => (
      '<div class="lesson-row' + (l.done ? ' done' : '') + '">' +
        '<div class="lesson-ico">' + l.ico + '</div>' +
        '<div class="lesson-info">' +
          '<div class="lesson-nm">' + l.nm + '</div>' +
          '<div class="lesson-mt">' + l.mt + '</div>' +
        '</div>' +
        '<div class="check-circle">' + (l.done ? '✓' : '') + '</div>' +
      '</div>'
    )).join('');
  }
}

function switchHeroTrack(key, btn) {
  renderHeroTrack(key);
  if (btn) btn.blur();
}

/* 5. INTERACTIVE 4-STAGE MASTERY ROADMAP INFOGRAPHIC */
let _activeRoadmapStage = 0;
const ROADMAP_STAGES = [
  {
    en: {
      badge: 'Stage 01 · Diagnostic Architecture',
      title: '20–30 Min Live Diagnostic & Perfect Tutor Match',
      desc: 'We evaluate reading clarity, Makharij articulation, memorisation history, and family schedule — then pair each learner (from age 2+ to adults) with an Ijazah-certified male or female instructor.',
      metrics: [
        { k: 'Ages 2+ to Adults', v: 'Tailored pedagogy' },
        { k: 'Male & Female Tutors', v: '100% Ijazah-certified' },
        { k: '48-Hour Roadmap', v: 'Written study plan' }
      ],
      cta: 'Book Stage 01 Diagnostic ↗',
      next: 'Explore Stage 02 →'
    },
    ar: {
      badge: 'المرحلة 01 · التشخيص الدقيق',
      title: 'جلسة تقييم حيّة (20–30 دقيقة) واختيار المعلم الأنسب',
      desc: 'نُشخّص مستوى القراءة ومخارج الحروف والهدف الدراسي ووقت الأسرة، ثم نُرشّح لكل طالب (من عمر سنتين حتى الكبار) معلمًا أو معلمة مجازة تناسب شخصيته ومستواه.',
      metrics: [
        { k: 'من عمر سنتين للكبار', v: 'منهجية مناسبة للعمر' },
        { k: 'معلمون ومعلمات مجازون', v: 'كفاءة علمية معتمدة' },
        { k: 'خطة مكتوبة خلال 48 ساعة', v: 'مسار واضح منذ اليوم الأول' }
      ],
      cta: 'احجز تقييم المرحلة الأولى ↗',
      next: 'استعرض المرحلة 02 ←'
    },
    svg: '<svg viewBox="0 0 320 220" fill="none">' +
      '<rect x="20" y="24" width="280" height="172" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(212,175,55,0.4)" stroke-width="1.4"/>' +
      '<circle cx="90" cy="110" r="44" stroke="#D4AF37" stroke-width="2" stroke-dasharray="5 4"/>' +
      '<circle cx="90" cy="110" r="28" fill="rgba(212,175,55,0.16)" stroke="#f6e1a4" stroke-width="1.5"/>' +
      '<text x="90" y="115" text-anchor="middle" fill="#f6e1a4" font-size="14" font-weight="800">20-30m</text>' +
      '<rect x="154" y="56" width="122" height="20" rx="10" fill="rgba(255,255,255,0.1)"/>' +
      '<rect x="154" y="56" width="96" height="20" rx="10" fill="#D4AF37"/>' +
      '<rect x="154" y="92" width="122" height="20" rx="10" fill="rgba(255,255,255,0.1)"/>' +
      '<rect x="154" y="92" width="112" height="20" rx="10" fill="#34d399"/>' +
      '<rect x="154" y="128" width="122" height="20" rx="10" fill="rgba(255,255,255,0.1)"/>' +
      '<rect x="154" y="128" width="84" height="20" rx="10" fill="#f6e1a4"/>' +
      '<text x="160" y="172" fill="rgba(255,255,255,0.75)" font-size="10.5" font-weight="600">Makharij · Pace · Tutor Match</text>' +
    '</svg>'
  },
  {
    en: {
      badge: 'Stage 02 · Foundation Precision',
      title: 'Noor Al-Bayan, Al-Qaida & Crystal-Clear Articulation',
      desc: 'Build unshakeable Arabic reading fluency from scratch using proven Noor Al-Bayan and Al-Qaida Al-Nooraniyyah methodology alongside our forthcoming proprietary Quraan Arabi curriculum.',
      metrics: [
        { k: 'Noor Al-Bayan & Qaida', v: 'Proven reading system' },
        { k: '30 or 60 Min', v: 'Age-optimized sessions' },
        { k: 'Parent Portal Reports', v: 'After every single class' }
      ],
      cta: 'Explore Foundation Path ↗',
      next: 'Explore Stage 03 →'
    },
    ar: {
      badge: 'المرحلة 02 · التأسيس المتين',
      title: 'نور البيان والقاعدة النورانية وإتقان مخارج الحروف',
      desc: 'تأسيس راسخ للقراءة العربية السليمة من الصفر باستخدام منهجَي نور البيان والقاعدة النورانية بجانب منهج أكاديمية قرآن عربي الخاص في القرائية والتجويد والثقافة الإسلامية.',
      metrics: [
        { k: 'نور البيان والنورانية', v: 'تأسيس علمي مجرّب' },
        { k: 'حصص 30 أو 60 دقيقة', v: 'مرونة تناسب كل عمر' },
        { k: 'تقرير فوري بعد كل حصة', v: 'متابعة كاملة لولي الأمر' }
      ],
      cta: 'ابدأ مسار التأسيس ↗',
      next: 'استعرض المرحلة 03 ←'
    },
    svg: '<svg viewBox="0 0 320 220" fill="none">' +
      '<rect x="26" y="34" width="82" height="152" rx="14" fill="rgba(255,255,255,0.08)" stroke="rgba(212,175,55,0.45)"/>' +
      '<rect x="119" y="24" width="82" height="162" rx="14" fill="rgba(212,175,55,0.16)" stroke="#D4AF37" stroke-width="1.8"/>' +
      '<rect x="212" y="34" width="82" height="152" rx="14" fill="rgba(255,255,255,0.08)" stroke="rgba(212,175,55,0.45)"/>' +
      '<text x="67" y="96" text-anchor="middle" fill="#f6e1a4" font-size="26" font-family="Amiri, serif">أ ب ت</text>' +
      '<text x="67" y="132" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">LETTERS</text>' +
      '<text x="160" y="94" text-anchor="middle" fill="#f6e1a4" font-size="28" font-family="Amiri, serif">بِسْمِ</text>' +
      '<text x="160" y="132" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">FLUENCY</text>' +
      '<text x="253" y="96" text-anchor="middle" fill="#34d399" font-size="26" font-family="Amiri, serif">تجويد</text>' +
      '<text x="253" y="132" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">TAJWEED</text>' +
      '<path d="M98 158 H222" stroke="#D4AF37" stroke-width="2" stroke-dasharray="4 4"/>' +
    '</svg>'
  },
  {
    en: {
      badge: 'Stage 03 · Accelerated Fluency & Hifz',
      title: 'Structured Memorisation, Revision & Portal Telemetry',
      desc: 'Commit to 3–5 weekly sessions with balanced Hifz + Muraja\'ah ratios, live 1-on-1 correction, transparent Parent Portal tracking, and serial-numbered milestone certificates.',
      metrics: [
        { k: '3–5× Weekly Pace', v: 'Momentum without burnout' },
        { k: 'Smart Revision Cycles', v: 'Strong long-term retention' },
        { k: 'Verified Certificates', v: 'Unique serial IDs' }
      ],
      cta: 'Explore Fluency Path ↗',
      next: 'Explore Stage 04 →'
    },
    ar: {
      badge: 'المرحلة 03 · الطلاقة والحفظ المتقن',
      title: 'حفظ منظّم ومراجعة ثابتة ومتابعة رقمية بعد كل درس',
      desc: 'التزام بـ 3 إلى 5 حصص أسبوعيًا بتوازن ذكي بين الحفظ الجديد والمراجعة القريبة والبعيدة، مع متابعة فورية من بوابة ولي الأمر وشهادات إنجاز معتمدة برقم تسلسلي.',
      metrics: [
        { k: '3 إلى 5 حصص أسبوعيًا', v: 'تقدّم سريع بلا إرهاق' },
        { k: 'دورة مراجعة منتظمة', v: 'تثبيت طويل الأمد للسور' },
        { k: 'شهادات برقم تسلسلي', v: 'موثّقة وقابلة للطباعة' }
      ],
      cta: 'اكتشف مسار الإتقان ↗',
      next: 'استعرض المرحلة 04 ←'
    },
    svg: '<svg viewBox="0 0 320 220" fill="none">' +
      '<circle cx="160" cy="110" r="76" stroke="rgba(255,255,255,0.12)" stroke-width="14"/>' +
      '<circle cx="160" cy="110" r="76" stroke="#D4AF37" stroke-width="14" stroke-linecap="round" stroke-dasharray="477" stroke-dashoffset="110" transform="rotate(-90 160 110)"/>' +
      '<circle cx="160" cy="110" r="54" stroke="#34d399" stroke-width="6" stroke-dasharray="339" stroke-dashoffset="70" transform="rotate(-90 160 110)"/>' +
      '<text x="160" y="106" text-anchor="middle" fill="#f6e1a4" font-size="24" font-weight="800">30 JUZ</text>' +
      '<text x="160" y="128" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="11" font-weight="600">Hifz · Muraja\'ah · Itqan</text>' +
    '</svg>'
  },
  {
    en: {
      badge: 'Stage 04 · Scholarly Transmission',
      title: 'Founder\'s Ijazah Track & Unbroken Sanad Certification',
      desc: 'Direct selective mentorship under Mentor Mohamed Abdul-Maqsoud in Riwayat Hafs \'an \'Asim (expanding to the Seven Qira\'at) — culminating in a formal Ijazah with an unbroken chain to the Prophet ﷺ.',
      metrics: [
        { k: 'Hafs \'an \'Asim', v: '7 Qira\'at expanding' },
        { k: 'Unbroken Sanad', v: 'Direct Founder oversight' },
        { k: 'By Application Only', v: 'Mastery over speed' }
      ],
      cta: 'Apply for Ijazah Track ↗',
      next: 'Back to Stage 01 ↺'
    },
    ar: {
      badge: 'المرحلة 04 · السند المتصل والإجازة',
      title: 'مسار الإجازة بالسند تحت إشراف Mentor Mohamed Abdul-Maqsoud',
      desc: 'إرشاد علمي نخبوي مباشر في رواية حفص عن عاصم (ومستقبلًا القراءات السبع خلال عامين)، يُتوَّج بإجازة قرآنية رسمية بسندٍ متصل إلى النبي ﷺ عند بلوغ الإتقان الكامل.',
      metrics: [
        { k: 'رواية حفص عن عاصم', v: 'والتوسع للقراءات السبع' },
        { k: 'سند متصل معتمد', v: 'إشراف مباشر من المؤسس' },
        { k: 'بالقبول والتقديم فقط', v: 'المعيار هو الإتقان التام' }
      ],
      cta: 'التقديم لمسار الإجازة ↗',
      next: 'العودة للمرحلة 01 ↺'
    },
    svg: '<svg viewBox="0 0 320 220" fill="none">' +
      '<line x1="50" y1="110" x2="270" y2="110" stroke="#D4AF37" stroke-width="2.2" stroke-dasharray="5 4"/>' +
      '<circle cx="64" cy="110" r="18" fill="rgba(212,175,55,0.18)" stroke="#D4AF37" stroke-width="2"/>' +
      '<circle cx="128" cy="110" r="18" fill="rgba(212,175,55,0.22)" stroke="#D4AF37" stroke-width="2"/>' +
      '<circle cx="192" cy="110" r="18" fill="rgba(212,175,55,0.28)" stroke="#D4AF37" stroke-width="2"/>' +
      '<circle cx="256" cy="110" r="26" fill="rgba(212,175,55,0.28)" stroke="#f6e1a4" stroke-width="2.6"/>' +
      '<text x="256" y="116" text-anchor="middle" fill="#f6e1a4" font-size="14" font-weight="800">سند</text>' +
      '<text x="160" y="54" text-anchor="middle" fill="#f6e1a4" font-size="12" font-weight="700">UNBROKEN CHAIN · SANAD</text>' +
      '<text x="160" y="172" text-anchor="middle" fill="rgba(255,255,255,0.78)" font-size="11">Scholarly Trust · Formal Ijazah Seal</text>' +
    '</svg>'
  }
];

function selectRoadmapStage(idx) {
  const safeIdx = Math.max(0, Math.min(ROADMAP_STAGES.length - 1, Number(idx) || 0));
  _activeRoadmapStage = safeIdx;
  const lang = window._QAA_LANG === 'ar' ? 'ar' : 'en';
  const stage = ROADMAP_STAGES[safeIdx];
  const copy = stage[lang] || stage.en;

  const fill = document.getElementById('roadmapRailFill');
  if (fill) fill.style.width = ((safeIdx / (ROADMAP_STAGES.length - 1)) * 100) + '%';

  document.querySelectorAll('.rm-node').forEach(node => {
    const n = Number(node.dataset.stage);
    node.classList.toggle('active', n === safeIdx);
    node.classList.toggle('done', n < safeIdx);
  });

  const vp = document.getElementById('roadmapVisualPane');
  if (vp) vp.innerHTML = stage.svg;
  const badge = document.getElementById('roadmapStageBadge');
  if (badge) badge.textContent = copy.badge;
  const title = document.getElementById('roadmapStageTitle');
  if (title) title.textContent = copy.title;
  const desc = document.getElementById('roadmapStageDesc');
  if (desc) desc.textContent = copy.desc;
  const cta = document.getElementById('roadmapStageCta');
  if (cta) {
    cta.textContent = copy.cta;
    cta.href = safeIdx === 3 ? 'quraanic-transformation.html' : '#placement';
  }
  const nxt = document.getElementById('roadmapNextBtn');
  if (nxt) nxt.textContent = copy.next;

  const metricsEl = document.getElementById('roadmapStageMetrics');
  if (metricsEl) {
    metricsEl.innerHTML = copy.metrics.map(m => (
      '<div class="rm-metric-chip"><strong>' + m.k + '</strong><span>' + m.v + '</span></div>'
    )).join('');
  }
}

function nextRoadmapStage() {
  selectRoadmapStage((_activeRoadmapStage + 1) % ROADMAP_STAGES.length);
}

/* 6. INTERACTIVE GLOBAL REACH TELEMETRY MAP + ANIMATED COUNTERS */
let _activeReachHub = 'cairo';
const REACH_HUBS = {
  cairo: {
    tz: 'Africa/Cairo',
    en: { title: '🇪🇬 Cairo, Egypt — Academy HQ', desc: 'Al-Azhar scholarly roots · Certified male & female Ijazah tutors teaching live 24/7 (excluding Cairo Friday Prayer).' },
    ar: { title: '🇪🇬 القاهرة، مصر — مقر الأكاديمية', desc: 'جذور علمية أزهرية · معلمون ومعلمات مجازون يدرّسون مباشرة 24/7 (ما عدا وقت صلاة الجمعة في مصر).' }
  },
  usa: {
    tz: 'America/New_York',
    en: { title: '🇺🇸 United States (EST · CST · MST · PST)', desc: 'All 4 US time zones auto-synchronized with Cairo across DST shifts — ideal after-school & weekend slots.' },
    ar: { title: '🇺🇸 الولايات المتحدة (4 مناطق زمنية)', desc: 'تغطية شاملة لشرق ووسط وغرب أمريكا بمزامنة تلقائية عند تغيير الساعة الصيفي والشتوي.' }
  },
  uk: {
    tz: 'Europe/London',
    en: { title: '🇬🇧 United Kingdom (London · Manchester · Birmingham)', desc: 'Seamless 1–2 hour difference with Cairo — favourite after-school slots for British Muslim families.' },
    ar: { title: '🇬🇧 المملكة المتحدة (لندن · مانشستر · برمنغهام)', desc: 'فارق توقيت مثالي مع القاهرة (ساعة إلى ساعتين) ومواعيد مسائية مريحة جدًا لأسر بريطانيا.' }
  },
  canada: {
    tz: 'America/Toronto',
    en: { title: '🇨🇦 Canada (Toronto · Ottawa · Calgary · Vancouver)', desc: 'Full bilingual English & Arabic instruction for Canadian children (ages 2+) and adults.' },
    ar: { title: '🇨🇦 كندا (تورنتو · أوتاوا · كالغاري · فانكوفر)', desc: 'برامج ثنائية اللغة بالكامل لأطفال وأسر كندا من عمر سنتين وحتى الكبار.' }
  },
  europe: {
    tz: 'Europe/Berlin',
    en: { title: '🇪🇺 Europe (France · Germany · Netherlands · Scandinavia)', desc: 'Zero-conflict scheduling synced with Central European Time and private Hub-and-Spoke family privacy.' },
    ar: { title: '🇪🇺 أوروبا (فرنسا · ألمانيا · هولندا · الدول الإسكندنافية)', desc: 'مواعيد دقيقة متوافقة مع توقيت وسط أوروبا مع خصوصية كاملة للأسر والمعلمين.' }
  },
  gulf: {
    tz: 'Asia/Riyadh',
    en: { title: '🇸🇦 Gulf & Arab World (KSA · UAE · Kuwait · Qatar · Jordan)', desc: 'Immediate timezone harmony (+0 to +2h from Cairo) with structured Hifz, Tajweed & Ijazah tracks.' },
    ar: { title: '🇸🇦 الخليج والعالم العربي (السعودية · الإمارات · الكويت · قطر · الأردن)', desc: 'توافق زمني شبه تام مع القاهرة وبرامج متكاملة للحفظ والتجويد ومسار الإجازة.' }
  },
  asia: {
    tz: 'Asia/Kuala_Lumpur',
    en: { title: '🇲🇾 Southeast Asia (Malaysia · Singapore)', desc: 'Morning & evening live 1-on-1 sessions tailored to Kuala Lumpur & Singapore school schedules.' },
    ar: { title: '🇲🇾 جنوب شرق آسيا (ماليزيا · سنغافورة)', desc: 'حصص فردية مباشرة صباحية ومسائية متوافقة مع جداول مدارس ماليزيا وسنغافورة.' }
  },
  australia: {
    tz: 'Australia/Sydney',
    en: { title: '🇦🇺 Australia (Sydney · Melbourne)', desc: '24/7 Academy operations mean Australian families enjoy dedicated after-school & morning Fajr slots.' },
    ar: { title: '🇦🇺 أستراليا (سيدني · ملبورن)', desc: 'بفضل عمل الأكاديمية 24/7 تحصل أسر أستراليا على مواعيد مريحة بعد المدرسة أو بعد الفجر.' }
  }
};

function selectReachHub(key) {
  const safeKey = REACH_HUBS[key] ? key : 'cairo';
  _activeReachHub = safeKey;
  const lang = window._QAA_LANG === 'ar' ? 'ar' : 'en';
  const hub = REACH_HUBS[safeKey];
  const copy = hub[lang] || hub.en;

  document.querySelectorAll('.map-hub, .rh-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.hub === safeKey);
  });
  const tEl = document.getElementById('rrTitle');
  const dEl = document.getElementById('rrDesc');
  const cEl = document.getElementById('rrClock');
  if (tEl) tEl.textContent = copy.title;
  if (dEl) dEl.textContent = copy.desc;
  if (cEl) {
    try {
      const nowStr = new Intl.DateTimeFormat('en-US', {
        timeZone: hub.tz, hour: '2-digit', minute: '2-digit', hour12: true
      }).format(new Date());
      cEl.textContent = (lang === 'ar' ? 'الآن: ' : 'Live: ') + nowStr;
    } catch (_) {
      cEl.textContent = '24/7 Live';
    }
  }
}

// Refresh active region live clock every 30s
setInterval(() => {
  if (document.getElementById('rrClock')) selectReachHub(_activeReachHub);
}, 30000);

// Animated scroll count-up for KPI numbers
(function initCountUps() {
  const els = document.querySelectorAll('.count-up[data-target]');
  if (!els.length || !('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      if (isNaN(target)) return;
      obs.unobserve(el);
      const start = performance.now();
      const dur = 1100;
      const step = now => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.35 });
  els.forEach(el => obs.observe(el));
})();

/* 7. INTERACTIVE FAMILY SAVINGS INFOGRAPHIC CALCULATOR */
let _calcMode = 'sib2';
let _calcDur = '60';
let _calcFreq = 2;

const CALC_PRICES = {
  '60': { 1: 52, 2: 96, 3: 126, 4: 152, 5: 170 },
  '30': { 1: 36, 2: 64, 3: 87,  4: 104, 5: 120 }
};

function setCalcMode(mode, btn) {
  _calcMode = mode;
  document.querySelectorAll('.fc-pill').forEach(b => b.classList.toggle('active', b === btn));
  updateFamilyCalculator();
}

function setCalcDur(dur, btn) {
  _calcDur = dur;
  document.querySelectorAll('.fc-dur').forEach(b => b.classList.toggle('active', b === btn));
  updateFamilyCalculator();
}

function setCalcFreq(freq, btn) {
  _calcFreq = Math.max(1, Math.min(5, Number(freq) || 2));
  document.querySelectorAll('.fc-freq').forEach(b => b.classList.toggle('active', b === btn));
  updateFamilyCalculator();
}

function updateFamilyCalculator() {
  const lang = window._QAA_LANG === 'ar' ? 'ar' : 'en';
  const basePerPlan = (CALC_PRICES[_calcDur] && CALC_PRICES[_calcDur][_calcFreq]) || 96;
  const hasRef = Boolean(document.getElementById('fcRefCheck') && document.getElementById('fcRefCheck').checked);

  // Sync frequency button labels for EN/AR
  document.querySelectorAll('.fc-freq').forEach(b => {
    const f = Number(b.dataset.freq);
    b.textContent = lang === 'ar' ? (f + '×/أسبوع') : (f + '×/wk');
  });

  const rows = [];
  let stdTotal = 0;
  let famTotal = 0;

  if (_calcMode === 'sib2') {
    const p1 = basePerPlan;
    const p2 = +(basePerPlan * 0.90).toFixed(2);
    stdTotal = basePerPlan * 2;
    famTotal = p1 + p2;
    rows.push({
      label: lang === 'ar' ? 'الطفل الأول' : '1st Child',
      badge: lang === 'ar' ? 'السعر الأساسي' : 'Standard',
      isStd: true, orig: basePerPlan, final: p1
    });
    rows.push({
      label: lang === 'ar' ? 'الطفل الثاني' : '2nd Child',
      badge: lang === 'ar' ? 'خصم 10%' : '10% OFF',
      isStd: false, orig: basePerPlan, final: p2
    });
  } else if (_calcMode === 'sib3') {
    const p1 = basePerPlan;
    const p2 = +(basePerPlan * 0.90).toFixed(2);
    const p3 = +(basePerPlan * 0.85).toFixed(2);
    stdTotal = basePerPlan * 3;
    famTotal = p1 + p2 + p3;
    rows.push({
      label: lang === 'ar' ? 'الطفل الأول' : '1st Child',
      badge: lang === 'ar' ? 'السعر الأساسي' : 'Standard',
      isStd: true, orig: basePerPlan, final: p1
    });
    rows.push({
      label: lang === 'ar' ? 'الطفل الثاني' : '2nd Child',
      badge: lang === 'ar' ? 'خصم 10%' : '10% OFF',
      isStd: false, orig: basePerPlan, final: p2
    });
    rows.push({
      label: lang === 'ar' ? 'الطفل الثالث' : '3rd Child',
      badge: lang === 'ar' ? 'خصم 15%' : '15% OFF',
      isStd: false, orig: basePerPlan, final: p3
    });
  } else {
    const pParent = +(basePerPlan * 0.80).toFixed(2);
    const pChild  = +(basePerPlan * 0.85).toFixed(2);
    stdTotal = basePerPlan * 2;
    famTotal = pParent + pChild;
    rows.push({
      label: lang === 'ar' ? 'باقة ولي الأمر' : 'Parent Plan',
      badge: lang === 'ar' ? 'خصم 20%' : '20% OFF',
      isStd: false, orig: basePerPlan, final: pParent
    });
    rows.push({
      label: lang === 'ar' ? 'باقة الطفل' : 'Child Plan',
      badge: lang === 'ar' ? 'خصم 15%' : '15% OFF',
      isStd: false, orig: basePerPlan, final: pChild
    });
  }

  const refExtraFirstMonth = hasRef ? +(famTotal * 0.10).toFixed(2) : 0;
  const displayFamPrice = Math.round(famTotal - refExtraFirstMonth);
  const monthlySaved = Math.round(stdTotal - famTotal);
  const firstMonthSaved = Math.round(stdTotal - (famTotal - refExtraFirstMonth));
  const annualSaved = Math.round((stdTotal - famTotal) * 12 + refExtraFirstMonth);
  const ratioPct = Math.max(40, Math.min(100, Math.round(((famTotal - refExtraFirstMonth) / stdTotal) * 100)));

  const fmtUsd = v => '$' + (Number.isInteger(v) ? v : v.toFixed(2).replace(/\.00$/, ''));

  const bdEl = document.getElementById('fcBreakdown');
  if (bdEl) {
    let html = rows.map(r => (
      '<div class="fc-bd-row">' +
        '<div class="fc-bd-left"><strong>' + r.label + '</strong><span class="fc-bd-badge' + (r.isStd ? ' std' : '') + '">' + r.badge + '</span></div>' +
        '<div class="fc-bd-price">' +
          (!r.isStd ? '<span class="fc-bd-strike">' + fmtUsd(r.orig) + '</span>' : '') +
          '<span>' + fmtUsd(r.final) + (lang === 'ar' ? '/شهر' : '/mo') + '</span>' +
        '</div>' +
      '</div>'
    )).join('');
    if (hasRef) {
      html += '<div class="fc-bd-row">' +
        '<div class="fc-bd-left"><strong>' + (lang === 'ar' ? 'مكافأة كود الإحالة (الشهر الأول)' : 'Referral Bonus (1st Month)') + '</strong><span class="fc-bd-badge">-10%</span></div>' +
        '<div class="fc-bd-price" style="color:#0f7a52;">-' + fmtUsd(refExtraFirstMonth) + '</div>' +
      '</div>';
    }
    bdEl.innerHTML = html;
  }

  const stdEl = document.getElementById('fcStdPrice');
  const famEl = document.getElementById('fcFamPrice');
  const barEl = document.getElementById('fcFamBar');
  const saveEl = document.getElementById('fcSaveText');

  if (stdEl) stdEl.textContent = '$' + stdTotal + (lang === 'ar' ? '/شهر' : '/mo');
  if (famEl) famEl.textContent = '$' + displayFamPrice + (lang === 'ar' ? '/شهر' : '/mo');
  if (barEl) barEl.style.width = ratioPct + '%';
  if (saveEl) {
    if (lang === 'ar') {
      saveEl.textContent = 'توفير $' + (hasRef ? firstMonthSaved : monthlySaved) + (hasRef ? ' أول شهر' : '/شهر') + ' · $' + annualSaved + ' سنويًا';
    } else {
      saveEl.textContent = '$' + (hasRef ? firstMonthSaved : monthlySaved) + (hasRef ? ' (1st mo)' : '/mo') + ' · $' + annualSaved + '/year saved';
    }
  }
}

function applyCalculatorToForm() {
  if (_calcMode === 'pc') {
    if (typeof activateFamilyMode === 'function') activateFamilyMode('parent-child');
  } else {
    if (typeof activateFamilyMode === 'function') activateFamilyMode('siblings');
    const targetChildren = _calcMode === 'sib3' ? 3 : 2;
    const countEl = document.getElementById('childrenCount');
    const hidEl = document.getElementById('f_children_count');
    if (countEl) countEl.textContent = String(targetChildren);
    if (hidEl) hidEl.value = String(targetChildren);
  }
  const durSel = document.getElementById('f_session_duration');
  const planSel = document.getElementById('f_plan');
  const pathPrefix = _calcFreq <= 2 ? 'foundation' : 'fluency';
  const planVal = pathPrefix + '-' + _calcDur + '-' + _calcFreq;
  if (durSel) {
    durSel.value = _calcDur;
    syncSessionToPlans(_calcDur);
    markField(durSel, true);
  }
  if (planSel) {
    planSel.value = planVal;
    markField(planSel, true);
  }
}

// Initialize saved language preference + all interactive architectural widgets cleanly (zero TDZ)
if (typeof window._QAA_LANG === 'string') {
  setLang(window._QAA_LANG);
} else {
  renderHeroTrack('tajweed');
  selectRoadmapStage(0);
  selectReachHub('cairo');
  updateFamilyCalculator();
}
