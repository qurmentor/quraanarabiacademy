/* ═══════════════════════════════════════════════════════════════════════════
   Quraan Arabi Academy — Bilingual Engine (EN / AR) + 9 Full Journal Articles
   Classic zero-dependency script (works on https://, http://localhost, and file://)
═══════════════════════════════════════════════════════════════════════════ */

window._QAA_LANG = (function () {
  try {
    return localStorage.getItem('qaa_landing_lang') === 'ar' ? 'ar' : 'en';
  } catch (_) {
    return 'en';
  }
})();

window._QAA_I18N = {
  en: {
    'top.banner': "Structured Qur'anic Education · Ahlul Qur'an, Ahlullah · Global Enrollment Open",
    'nav.motto': "أهل القرآن أهل الله · People of the Qur'an, People of Allah",
    'nav.academy': 'The Academy',
    'nav.founder': 'Founder',
    'nav.plans': 'Study Plans',
    'nav.journal': 'Journal',
    'nav.portal': 'Portal Login',
    'nav.cta': 'Placement Evaluation ↗',
    'drawer.academy': 'The Academy',
    'drawer.founder': 'Meet the Founder',
    'drawer.plans': 'Study Plans',
    'drawer.journal': 'The Journal',
    'drawer.legal': 'FAQ & Legal Policies',
    'drawer.ijazah': 'Ijazah Track',
    'drawer.portal': 'Student & Teacher Portal',
    'drawer.cta': 'Placement Evaluation ↗',
    'drawer.wa': 'Contact on WhatsApp',
    'hero.badge': 'Now Enrolling · Global Cohort 2026',
    'hero.motto_ar': 'أَهْلُ الْقُرْآنِ أَهْلُ اللَّهِ وَخَاصَّتُهُ',
    'hero.motto_en': "The People of the Qur'an Are the People of Allah",
    'hero.title': "The Future of<br><em>Qur'anic Literacy.</em>",
    'hero.bridge': 'Bridging Tradition and Excellence.',
    'hero.desc': "Structured Arabic and Qur'anic programs designed for the modern student. No confusion — just measurable, verified progress.",
    'hero.cta1': 'Placement Evaluation ↗',
    'hero.cta2': 'Explore the Academy',
    'hero.stat1': 'Students',
    'hero.stat2': 'Certified Tutors',
    'hero.stat3': 'Study Tracks',
    'hero.stat4': 'Languages',
    'hero.card_title': 'Your Study Dashboard',
    'hero.card_badge': 'Live Portal Preview',
    'hero.card_prog': 'Mastery Score',
    'hero.tab_tajweed': 'Tajweed',
    'hero.tab_hifz': 'Hifz',
    'hero.tab_arabic': 'Arabic',
    'roadmap.eye': 'Interactive Learning Architecture',
    'roadmap.title': 'From First Letter to <em>Certified Mastery.</em>',
    'roadmap.sub': 'Click any stage below to explore how our structured methodology transforms beginners and serious learners step by step.',
    'roadmap.s1_lbl': 'Diagnostic',
    'roadmap.s2_lbl': 'Foundation',
    'roadmap.s3_lbl': 'Fluency & Hifz',
    'roadmap.s4_lbl': 'Ijazah & Sanad',
    'reach.eye': 'Global Classroom Telemetry',
    'reach.title': 'One Academy HQ in Cairo.<br><em>Connected to 11+ Countries.</em>',
    'reach.sub': '24/7 live 1-on-1 classes seamlessly synchronized across US, UK, Canada, Europe, Gulf, and Australia time zones — with certified male and female tutors.',
    'reach.k1': 'Teaching Hours Delivered',
    'reach.k2': 'Countries Worldwide',
    'reach.k3': 'Starting Age (to Adults)',
    'reach.k4': 'Live Global Operations',
    'reach.hint': 'Tap any glowing beacon on the map to inspect timezone & tutor availability',
    'calc.eyebrow': 'Interactive Savings Infographic',
    'calc.title': 'Estimate Your Family Monthly Savings',
    'calc.s1': '1. Who is enrolling?',
    'calc.s2': '2. Session length & weekly frequency',
    'calc.d60': '60 min',
    'calc.d30': '30 min',
    'calc.m_sib2': '2 Children',
    'calc.m_sib3': '3 Children',
    'calc.m_pc': 'Parent + Child',
    'calc.ref_lbl': '+ Referral Code (10% off 1st month)',
    'calc.std_lbl': 'Standard Total',
    'calc.fam_lbl': 'Your Family Rate',
    'calc.save_lbl': 'Estimated Savings',
    'calc.cta': 'Apply This Family Plan →',
    'ped.eye': 'The Standards',
    'ped.title': 'Academy <em>Pedigree.</em><br>Built on Certainty.',
    'ped.sub': "Every instructor, every lesson plan, and every program is engineered with one goal: measurable, lasting Qur'anic progress anchored in scholarly authenticity.",
    'ped.c1_t': 'Ijazah-Certified Tutors',
    'ped.c1_p': "Every instructor holds an unbroken chain of transmission — Sanad — back to the Prophet ﷺ. The gold standard of Qur'anic authority.",
    'ped.c2_t': 'Structured Progress Reports',
    'ped.c2_p': 'Detailed lesson reports after every single class track recitation accuracy, memorisation, revision, Tajweed rules, and homework. Never guess where you stand.',
    'ped.c3_t': 'Multilingual Delivery',
    'ped.c3_p': 'Programs fully delivered in English and Arabic. Every nuance of the sacred text understood with precision, regardless of background.',
    'founder.eye': "Founder's Corner",
    'founder.title': 'Meet the <em>Mentor</em><br>Behind the Vision.',
    'founder.quote': '"True Qur\'anic literacy is not memorisation alone — it is precision, understanding, embodiment, and a living relationship with the Words of Allah."',
    'founder.bio': "Mohamed Abdul-Maqsoud is an Imam, Khateeb, and certified reciter, specialising in advanced Tajweed and Tafsir methodology. With over a decade of structured teaching and Da'wah experience across three continents, he founded Quraan Arabi Academy to deliver rigorous, systemised, and high-credibility Qur'anic education for serious students seeking mastery — not casual learning.",
    'founder.cred_h': 'Academic & Scholarly Credentials',
    'founder.pub_h': 'Publications',
    'founder.pub_p': "Author of three forthcoming Arabic and Qur'anic study workbooks — currently in development",
    'founder.cta': 'Apply for the Ijazah Track ↗',
    'dash.eye': 'Student Experience',
    'dash.title': 'Your <em>Structured</em> Learning Environment.',
    'dash.sub': 'A real, dedicated Student & Parent Portal that keeps every family organised — with interactive lesson calendars, assigned teacher profiles, post-lesson reports, verified certificates, and private admin messaging.',
    'dash.tab1': '📅 Interactive Lessons Calendar',
    'dash.tab2': '👨‍🏫 Assigned Teacher Profile',
    'pricing.eye': 'Academic Pathways',
    'pricing.title': "How Serious Are You About Your<br><em>Qur'anic Journey?</em>",
    'pricing.sub': 'Your progress depends on your commitment. Choose the pathway that reflects your intention and let us guide you through a structured, scholarly transformation.',
    'pricing.t60': '60-Minute Sessions',
    'pricing.t30': '30-Minute Sessions',
    'pricing.p1_num': 'Pathway 1',
    'pricing.p1_name': 'Foundation Path',
    'pricing.p1_sub': 'For Beginners & Structured Learners',
    'pricing.p1_desc': 'Build strong foundations in pronunciation, Tajweed, and confident recitation through a carefully structured curriculum designed for long-term mastery.',
    'pricing.p1_int': 'Choose your weekly intensity',
    'pricing.p1_cta': 'Begin Your Foundation Journey →',
    'pricing.p2_num': 'Pathway 2',
    'pricing.p2_name': 'Fluency Path',
    'pricing.p2_sub': 'For Committed & Serious Learners',
    'pricing.p2_desc': "Designed for students seeking accelerated development, Tajweed precision, and preparation for advanced Qur'anic study.",
    'pricing.p2_int': 'Choose your commitment level',
    'pricing.p2_cta': 'Advance to Fluency →',
    'pricing.p3_num': 'Pathway 3',
    'pricing.p3_name': 'Ijazah Track',
    'pricing.p3_sub': "Founder's Elite — By Application Only",
    'pricing.p3_desc': "A private scholarly mentorship for students seeking certified Qur'anic transmission (Sanad) under direct supervision of the Founder.",
    'pricing.p3_badge': 'By Application Only',
    'pricing.p3_cta': 'Apply for Mentorship ↗',
    'pricing.p3_note': 'Application reviewed personally by Mentor Mohamed Abdul-Maqsoud. Limited placements.',
    'disc.eye': 'More Than a Lesson — A Family Legacy',
    'disc.title': 'When a Family Learns Together,<br><em>They Grow Together.</em>',
    'disc.sub': "We believe Qur'anic education is a family affair — not just a transaction. That's why we've built a programme that rewards families who commit together, because the impact multiplies when everyone grows.",
    'disc.note': '<strong>Applies to Foundation and Fluency Paths only.</strong> Discounts are applied upon verification of enrolment. Contact us via WhatsApp to activate your family or referral discount. Loyalty Reward is applied automatically after 12 uninterrupted months.',
    'blog.eye': 'Resource Hub · Bilingual EN & AR',
    'blog.title': 'The Academy <em>Journal.</em>',
    'blog.search': 'Search Tajweed, Arabic, Tafsir, Morning/Evening/Sleep Du\'as…',
    'blog.f_all': 'All Articles (9)',
    'blog.f_tajweed': 'Tajweed & Recitation',
    'blog.f_arabic': 'Arabic & Tafsir',
    'blog.f_adhkar': "Islamic & Du'as",
    'blog.read_more': 'Read full article',
    'blog.empty': 'No journal articles match your search. Try "Tajweed", "Adhkar", "Morning", or "Sleep".',
    'modal.book': 'Book Placement Evaluation ↗',
    'modal.wa': 'Discuss on WhatsApp',
    'place.eye': 'Begin Your Journey',
    'place.title': 'Placement <em>Evaluation.</em>',
    'place.sub': 'A complimentary assessment reviewed personally by our instructors. Takes 5 minutes.',
    'place.form_t': 'Your Academic Assessment',
    'place.form_s': 'Reviewed personally by our certified instructors. Placement results within 48 hours.',
    'contact.eye': 'Direct Official Channels',
    'contact.title': 'Connect With <em>Quraan Arabi Academy.</em>',
    'contact.sub': "Reach our Admissions, Support, Billing, or Founder's Ijazah Office directly through our verified official channels.",
    'contact.c1_tag': 'Fastest Response',
    'contact.c1_t': 'WhatsApp & Phone',
    'contact.c1_p': 'Speak directly with Academy Administration for enrolment questions, plan guidance, or family discounts.',
    'contact.c1_btn': 'Open WhatsApp ↗',
    'contact.c2_tag': 'Official Desk',
    'contact.c2_t': 'General & Official Email',
    'contact.c2_p': 'For official inquiries, partnerships, institutional communication, or written documentation.',
    'contact.gmail': 'Gmail Web ↗',
    'contact.mailapp': 'Mail App',
    'contact.copy': 'Copy',
    'contact.c3_tag': 'Verified Departments',
    'contact.c3_t': 'Support & Specialist Desks',
    'contact.d_sup': 'Student & Family Support',
    'contact.d_bil': 'Billing & Refunds',
    'contact.d_ija': "Founder's Ijazah Track",
    'contact.d_pri': 'Privacy & Data',
    'contact.c4_tag': 'Enrolled Members',
    'contact.c4_t': 'Academy Learning Portal',
    'contact.c4_p': 'Already enrolled? Sign in to access your interactive schedule, live classes, reports, certificates, and 24/7 AI Assistant.',
    'contact.c4_btn': 'Open Portal Login ↗',
    'cta.title': "Begin Your<br><em>Qur'anic Journey</em> Today.",
    'cta.sub': 'Book your complimentary placement evaluation. Our certified instructors will design a personalised programme around your goals, schedule, and current level.',
    'cta.b1': 'Book My Placement Evaluation ↗',
    'cta.b2': 'Chat on WhatsApp',
    'foot.desc': "Structured Qur'anic education anchored in scholarly authenticity and delivered with modern precision. For serious students everywhere.",
    'foot.motto': "✦ أهل القرآن أهل الله · People of the Qur'an, People of Allah ✦",
    'foot.col1': 'The Academy',
    'foot.col2': 'Programs',
    'foot.col3': 'Resources',
    'foot.copy': "© 2025–2027 Quraan Arabi Academy · Ahlul Qur'an, Ahlullah. All rights reserved.",
  },
  ar: {
    'top.banner': 'تعليم قرآني منهجي · أهل القرآن أهل الله · التسجيل مفتوح عالميًا',
    'nav.motto': 'أهل القرآن أهل الله',
    'nav.academy': 'الأكاديمية',
    'nav.founder': 'المؤسس',
    'nav.plans': 'الباقات',
    'nav.journal': 'المجلة العلمية',
    'nav.portal': 'دخول البوابة',
    'nav.cta': 'تقييم المستوى المجاني ↗',
    'drawer.academy': 'عن الأكاديمية',
    'drawer.founder': 'تعرف على المؤسس',
    'drawer.plans': 'خطط الدراسة والباقات',
    'drawer.journal': 'المجلة العلمية والأذكار',
    'drawer.legal': 'الأسئلة الشائعة والسياسات',
    'drawer.ijazah': 'مسار الإجازة بالسند',
    'drawer.portal': 'بوابة الطلاب والمعلمين',
    'drawer.cta': 'احجز تقييم المستوى ↗',
    'drawer.wa': 'تواصل عبر واتساب',
    'hero.badge': 'التسجيل مفتوح الآن · دفعة 2026 العالمية',
    'hero.motto_ar': 'أَهْلُ الْقُرْآنِ أَهْلُ اللَّهِ وَخَاصَّتُهُ',
    'hero.motto_en': 'شعارنا ومنهجنا — صحبة القرآن علمًا وعملًا وإتقانًا',
    'hero.title': 'مستقبل<br><em>التعليم القرآني المتقن.</em>',
    'hero.bridge': 'نجمع بين أصالة السند ودقّة المنهج الحديث.',
    'hero.desc': 'برامج منهجية في القرآن الكريم والتجويد واللغة العربية والدراسات الإسلامية مصمّمة للطالب الجاد — بدون عشوائية، بل بتقدّم ملموس وتقارير دقيقة بعد كل حصة.',
    'hero.cta1': 'احجز تقييم المستوى المجاني ↗',
    'hero.cta2': 'استكشف الأكاديمية',
    'hero.stat1': 'طالب وطالبة',
    'hero.stat2': 'معلم مجاز',
    'hero.stat3': 'مسارات دراسية',
    'hero.stat4': 'لغتان للتدريس',
    'hero.card_title': 'لوحة متابعة الطالب التفاعلية',
    'hero.card_badge': 'معاينة حية للبوابة',
    'hero.card_prog': 'مؤشر الإتقان',
    'hero.tab_tajweed': 'التجويد',
    'hero.tab_hifz': 'الحفظ',
    'hero.tab_arabic': 'العربية',
    'roadmap.eye': 'خريطة التعلّم التفاعلية',
    'roadmap.title': 'من أول حرف إلى <em>الإتقان والسند.</em>',
    'roadmap.sub': 'اضغط على أي مرحلة بالأسفل لاستعراض كيف ينقلك منهجنا المنظّم خطوة بخطوة نحو القراءة المتقنة والحفظ الثابت.',
    'roadmap.s1_lbl': 'التقييم والتشخيص',
    'roadmap.s2_lbl': 'التأسيس والمخارج',
    'roadmap.s3_lbl': 'الإتقان والحفظ',
    'roadmap.s4_lbl': 'الشهادات والإجازة',
    'reach.eye': 'خريطة الانتشار والتغطية العالمية',
    'reach.title': 'مقر أكاديمي واحد في القاهرة.<br><em>متصل بأكثر من 11 دولة حول العالم.</em>',
    'reach.sub': 'حصص فردية مباشرة 24/7 متزامنة تلقائيًا مع توقيت أمريكا وبريطانيا وكندا وأوروبا والخليج وأستراليا — بمعلمين ومعلمات مجازين.',
    'reach.k1': 'ساعة تدريسية منجزة',
    'reach.k2': 'دولة حول العالم',
    'reach.k3': 'أصغر عمر للقبول (حتى الكبار)',
    'reach.k4': 'تغطية عالمية مرنة',
    'reach.hint': 'اضغط على أي نقطة مضيئة على الخريطة لمعاينة التغطية الزمنية وتوفر المعلمين',
    'calc.eyebrow': 'حاسبة التوفير العائلي التفاعلية',
    'calc.title': 'احسب توفير أسرتك الشهري فورًا',
    'calc.s1': '1. من سيسجّل من الأسرة؟',
    'calc.s2': '2. مدة الحصة وعدد الحصص أسبوعيًا',
    'calc.d60': '60 دقيقة',
    'calc.d30': '30 دقيقة',
    'calc.m_sib2': 'طفلان (أشقاء)',
    'calc.m_sib3': '3 أطفال (أشقاء)',
    'calc.m_pc': 'ولي أمر + طفل',
    'calc.ref_lbl': '+ كود إحالة (خصم 10% إضافي)',
    'calc.std_lbl': 'السعر قبل الخصم',
    'calc.fam_lbl': 'سعر أسرتك بعد الخصم',
    'calc.save_lbl': 'إجمالي التوفير',
    'calc.cta': 'تفعيل هذا العرض لأسرتك ←',
    'ped.eye': 'معايير الجودة',
    'ped.title': 'منهجية <em>الأكاديمية.</em><br>مبنية على الإتقان واليقين.',
    'ped.sub': 'كل معلم، وكل خطة درس، وكل برنامج صُمّم لهدف واحد: تقدّم قرآني حقيقي ومستمر راسخ على الأصالة العلمية.',
    'ped.c1_t': 'معلمون مجازون بالسند المتصل',
    'ped.c1_p': 'يحمل معلمونا إجازات معتمدة بسندٍ متصل إلى النبي ﷺ — المعيار الذهبي لتلقي كتاب الله تعالى.',
    'ped.c2_t': 'تقارير متابعة دقيقة بعد كل حصة',
    'ped.c2_p': 'تقرير تفصيلي بعد كل درس يوثّق الحفظ والمراجعة وأحكام التجويد والواجب المنزلي — لتعرف دائمًا أين وصلت.',
    'ped.c3_t': 'تدريس متقن بالعربية والإنجليزية',
    'ped.c3_p': 'برامج متكاملة باللغتين العربية والإنجليزية تناسب العرب وغير الناطقين بالعربية والأسر المغتربة.',
    'founder.eye': 'ركن المؤسس',
    'founder.title': 'تعرّف على <em>المؤسس</em><br>صاحب الرؤية والمنهج.',
    'founder.quote': '«الإتقان القرآني الحقيقي ليس حفظًا مجردًا فحسب — بل هو دقّة في التلاوة، وفهمٌ للمعاني، وعملٌ بالآيات، وصلةٌ حيّة بكلام الله.»',
    'founder.bio': 'محمد عبد المقصود، إمام وخطيب ومقرئ مجاز متخصص في التجويد المتقدم ومنهجية التفسير. بخبرة تتجاوز عشر سنوات في التعليم القرآني والدعوة عبر ثلاث قارات، أسّس أكاديمية «قرآن عربي» لتقديم تعليم قرآني رصين ومنظّم للطلاب الجادين الباحثين عن الإتقان الحقيقي.',
    'founder.cred_h': 'المؤهلات العلمية والأكاديمية',
    'founder.pub_h': 'الإصدارات والمؤلفات',
    'founder.pub_p': 'مؤلف ثلاثة كتب ومذكرات منهجية في القرآن واللغة العربية — قيد الإعداد والنشر قريبًا',
    'founder.cta': 'التقديم لمسار الإجازة بالسند ↗',
    'dash.eye': 'تجربة الطالب وولي الأمر',
    'dash.title': 'بيئة تعليمية <em>منظّمة</em> واحترافية.',
    'dash.sub': 'بوابة إلكترونية حقيقية ومخصّصة للطالب وولي الأمر تجمع التقويم التفاعلي للحصص، وبطاقة المعلم الأكاديمية، وتقارير كل حصة، والشهادات المعتمدة، والتواصل الآمن مع الإدارة.',
    'dash.tab1': '📅 التقويم التفاعلي للحصص',
    'dash.tab2': '👨‍🏫 بطاقة المعلم المعيّن',
    'pricing.eye': 'المسارات الأكاديمية والباقات',
    'pricing.title': 'إلى أي مدى أنت جادّ في<br><em>رحلتك مع القرآن؟</em>',
    'pricing.sub': 'تقدّمك يبدأ بقرارك والتزامك. اختر المسار المناسب لوقتك وهدفك وسنرافقك خطوة بخطوة نحو الإتقان.',
    'pricing.t60': 'حصص 60 دقيقة',
    'pricing.t30': 'حصص 30 دقيقة',
    'pricing.p1_num': 'المسار الأول',
    'pricing.p1_name': 'مسار التأسيس (Foundation)',
    'pricing.p1_sub': 'للمبتدئين وبناء الأساس المتين',
    'pricing.p1_desc': 'تأسيس قوي في مخارج الحروف وأحكام التجويد والقراءة الواثقة عبر منهج متدرّج مصمّم للثبات والإتقان.',
    'pricing.p1_int': 'اختر عدد الحصص الأسبوعي',
    'pricing.p1_cta': 'ابدأ مسار التأسيس ←',
    'pricing.p2_num': 'المسار الثاني',
    'pricing.p2_name': 'مسار الإتقان والطلاقة (Fluency)',
    'pricing.p2_sub': 'للطلاب الجادين وتسريع التقدّم',
    'pricing.p2_desc': 'مصمّم للطلاب الراغبين في تسريع الحفظ وإتقان دقائق التجويد والتأهيل للدراسات القرآنية المتقدمة.',
    'pricing.p2_int': 'اختر مستوى الالتزام الأسبوعي',
    'pricing.p2_cta': 'انتقل لمسار الإتقان ←',
    'pricing.p3_num': 'المسار الثالث',
    'pricing.p3_name': 'مسار الإجازة بالسند (Ijazah)',
    'pricing.p3_sub': 'إشراف مباشر من المؤسس — بالتقديم فقط',
    'pricing.p3_desc': 'برنامج إرشاد علمي خاص لطلاب الإتقان الساعين لنيل إجازة قرآنية بسندٍ متصل تحت إشراف مباشر من المؤسس.',
    'pricing.p3_badge': 'بالقبول والتقديم فقط',
    'pricing.p3_cta': 'قدّم لبرنامج الإجازة ↗',
    'pricing.p3_note': 'يُراجع الطلب شخصيًا من الأستاذ محمد عبد المقصود. المقاعد محدودة.',
    'disc.eye': 'أكثر من مجرد حصة — إرثٌ عائلي مبارك',
    'disc.title': 'حين تتعلّم الأسرة معًا،<br><em>تنمو البركة في البيت كله.</em>',
    'disc.sub': 'نؤمن أن تعليم القرآن رسالة أسرية مباركة؛ لذلك أعددنا برنامج خصومات خاصًا للأشقاء والوالدين والإحالات والولاء السنوي.',
    'disc.note': '<strong>تسري الخصومات على مسارَي التأسيس والإتقان.</strong> يُفعَّل الخصم فور تأكيد التسجيل، بينما يُطبَّق خصم الولاء الدائم (10%) تلقائيًا بعد إتمام 12 شهرًا متتاليًا.',
    'blog.eye': 'المكتبة المعرفية · بالعربية والإنجليزية',
    'blog.title': 'مجلة <em>الأكاديمية.</em>',
    'blog.search': 'ابحث في التجويد، العربية، التفسير، أذكار الصباح والمساء والنوم…',
    'blog.f_all': 'كل المقالات (9)',
    'blog.f_tajweed': 'التجويد وتيسير التلاوة',
    'blog.f_arabic': 'العربية والتفسير',
    'blog.f_adhkar': 'إسلاميات وأذكار وأدعية',
    'blog.read_more': 'اقرأ المقال كاملًا',
    'blog.empty': 'لا توجد مقالات مطابقة للبحث. جرّب «تجويد» أو «أذكار» أو «الصباح» أو «النوم».',
    'modal.book': 'احجز تقييم المستوى المجاني ↗',
    'modal.wa': 'ناقش المقال عبر واتساب',
    'place.eye': 'ابدأ رحلتك الآن',
    'place.title': 'تقييم <em>المستوى المجاني.</em>',
    'place.sub': 'تقييم مجاني يراجعه معلمونا شخصيًا لتحديد مستواك وخطتك المثالية خلال 48 ساعة.',
    'place.form_t': 'استمارة التقييم الأكاديمي',
    'place.form_s': 'تُراجع استمارتك شخصيًا من معلمينا المجازين وتصلك النتيجة خلال 48 ساعة.',
    'contact.eye': 'قنوات التواصل الرسمية المعتمدة',
    'contact.title': 'تواصل مع <em>أكاديمية قرآن عربي.</em>',
    'contact.sub': 'تواصل مباشرةً مع إدارة القبول أو الدعم أو المدفوعات أو مكتب الإجازة عبر قنواتنا الرسمية الموثّقة.',
    'contact.c1_tag': 'الأسرع استجابة',
    'contact.c1_t': 'واتساب والهاتف الرسمي',
    'contact.c1_p': 'تحدث مباشرةً مع إدارة الأكاديمية للاستفسار عن الباقات والخصومات العائلية والتسجيل.',
    'contact.c1_btn': 'فتح واتساب ↗',
    'contact.c2_tag': 'البريد الرسمي',
    'contact.c2_t': 'البريد الرسمي للأكاديمية',
    'contact.c2_p': 'للمراسلات الرسمية والشراكات والاستفسارات الإدارية والتوثيق الكتابي.',
    'contact.gmail': 'فتح في Gmail ↗',
    'contact.mailapp': 'تطبيق البريد',
    'contact.copy': 'نسخ',
    'contact.c3_tag': 'الأقسام الرسمية',
    'contact.c3_t': 'بريد الدعم والأقسام المتخصصة',
    'contact.d_sup': 'دعم الطلاب وأولياء الأمور',
    'contact.d_bil': 'المدفوعات والاسترداد',
    'contact.d_ija': 'مسار الإجازة بالسند',
    'contact.d_pri': 'الخصوصية وحماية البيانات',
    'contact.c4_tag': 'للطلاب والمعلمين المسجلين',
    'contact.c4_t': 'بوابة الأكاديمية التعليمية',
    'contact.c4_p': 'مسجّل معنا بالفعل؟ ادخل إلى بوابتك لمتابعة الجدول والحصص المباشرة والتقارير والشهادات والمساعد الذكي.',
    'contact.c4_btn': 'دخول البوابة ↗',
    'cta.title': 'ابدأ <em>رحلتك القرآنية</em><br>اليوم بإتقان.',
    'cta.sub': 'احجز جلسة تقييم المستوى المجانية الآن، وسيُعدّ لك معلمونا خطة دراسية مخصّصة تناسب هدفك ووقتك ومستواك.',
    'cta.b1': 'احجز تقييم المستوى الآن ↗',
    'cta.b2': 'تحدث معنا على واتساب',
    'foot.desc': 'تعليم قرآني منهجي يجمع بين أصالة السند ودقّة الإدارة والمتابعة الحديثة — للطلاب الجادين في كل مكان.',
    'foot.motto': '✦ أهل القرآن أهل الله وخاصته ✦',
    'foot.col1': 'الأكاديمية',
    'foot.col2': 'البرامج والمسارات',
    'foot.col3': 'المصادر والتواصل',
    'foot.copy': '© 2025–2027 أكاديمية قرآن عربي · أهل القرآن أهل الله. جميع الحقوق محفوظة.',
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   9 FULL BILINGUAL JOURNAL ARTICLES (EN + AR)
═══════════════════════════════════════════════════════════════════════════ */
window._QAA_ARTICLES = {
  'tajweed-5-rules': {
    category: 'tajweed',
    icon: '📿',
    bgClass: 'bi-1',
    en: {
      tag: 'Tajweed',
      meta: 'March 2025 · 8 min read · Quraan Arabi Academy',
      shortMeta: 'March 2025 · 8 min read',
      title: 'Why Your Tajweed Stops Here: The 5 Rules Every Student Gets Wrong',
      excerpt: 'Most students plateau after the basics. We break down the five most misunderstood Tajweed rules that tutors rarely address — and how to fix each one cleanly.',
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
    ar: {
      tag: 'التجويد',
      meta: 'مارس 2025 · 8 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: 'مارس 2025 · 8 دقائق',
      title: 'لماذا يتوقف تقدّمك في التجويد هنا؟ 5 أخطاء دقيقة يقع فيها معظم الطلاب',
      excerpt: 'يتقن كثير من الطلاب الأساسيات ثم يشعرون بثبات مستواهم؛ إليك أكثر 5 أخطاء تجويدية دقيقة وطريقة تصحيح كل منها عمليًا.',
      body: `
        <p>كثير من الطلاب المجتهدين يدرسون مبادئ التجويد نظريًا، لكنهم يشعرون عند التلاوة أن القراءة ما تزال بحاجة إلى صفاء وإتقان. ومن خلال تقييم مئات الطلاب، تتكرّر خمس نقاط دقيقة تمثّل الفارق الحقيقي نحو التلاوة المتقنة:</p>
        <h4>1. اختلاط التفخيم والترقيق عند تجاور الحروف</h4>
        <p>حين يجاور الحرف المرقّق حرفًا مفخّمًا — مثل اللام في <strong>وَلَا الضَّالِّينَ</strong> أو الباء في <strong>بَاطِلًا</strong> — يميل اللسان تلقائيًا إلى تفخيم الحرف المرقّق. التدرّب البطيء على تخليص الحروف يحلّ هذا الخطأ سريعًا.</p>
        <h4>2. عدم انضباط أزمنة المدود</h4>
        <p>قياس حركتين أو أربع أو ست حركات يحتاج إلى ميزان سمعي متناسق مع سرعة تلاوتك (التحقيق أو التدوير أو الحدر)، لا مجرد تقدير عشوائي يتغيّر من آية لأخرى.</p>
        <h4>3. تسرب الغنّة إلى حروف المدّ</h4>
        <p>السماح بمرور الصوت عبر الخيشوم أثناء نطق حروف المد يُفقد التلاوة صفاءها ونقاءها. التمرين اليومي القصير تحت إشراف معلم مجاز يزيل هذه العادة خلال أسابيع قليلة.</p>
        <h4>4. خلط القلقلة بحركةٍ عند الوقف</h4>
        <p>عند الوقف على حروف <strong>قطب جد</strong> يميل البعض لإمالة القلقلة نحو الفتحة أو كتمها تمامًا، بينما القلقلة الصحيحة تخرج باضطرابٍ واضح خالٍ من شائبة أي حركة.</p>
        <h4>5. الوقف والابتداء دون مراعاة المعنى</h4>
        <p>إتقان التلاوة لا ينفصل عن فهم المعنى؛ ومعرفة مواضع الوقف الحسن والابتداء السليم تحوّل قراءتك من مجرد نطقٍ آلي إلى تدبّرٍ حيّ وخشوع.</p>
        <p><strong>الخطوة التالية:</strong> احجز تقييم المستوى المجاني الآن ليُشخّص معلم مجاز نقاط قوّتك وما تحتاج إلى صقله بدقّة.</p>
      `
    }
  },

  'quranic-arabic-vs-msa': {
    category: 'arabic',
    icon: '✍️',
    bgClass: 'bi-2',
    en: {
      tag: 'Grammar',
      meta: 'February 2026 · 5 min read · Quraan Arabi Academy',
      shortMeta: 'Feb 2026 · 5 min read',
      title: "Qur'anic Arabic vs. Modern Standard: The Difference That Changes Everything",
      excerpt: 'Understanding the structural difference between Modern Standard Arabic and Classical Qur\'anic Arabic can save you years of misdirected effort.',
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
    ar: {
      tag: 'النحو والعربية',
      meta: 'فبراير 2026 · 5 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: 'فبراير 2026 · 5 دقائق',
      title: 'العربية القرآنية مقابل العربية الإعلامية المعاصرة: الفرق الذي يختصر سنوات',
      excerpt: 'فهم الفارق المنهجي بين لغة الأخبار والمحادثة وبين لغة القرآن الكريم يختصر عليك سنوات طويلة من التشتت.',
      body: `
        <p>يقضي كثير من الدارسين سنوات في تعلم عبارات السفر والصحف، ثم يفتحون سورة البقرة فيشعرون بأنهم أمام لغة مختلفة. إدراك الفرق بين العربية المعاصرة والعربية القرآنية يضعك على الطريق الأقصر والأعمق.</p>
        <h4>1. قوة الجذور القرآنية المتكرّرة</h4>
        <p>نحو 300 جذر لغوي فقط تغطي أكثر من 70% من مفردات المصحف الشريف! البدء بتعلّم الجذور والتصريف القرآني يمنحك فهمًا سريعًا للآيات أضعاف ما تمنحه قوائم المفردات العامة.</p>
        <h4>2. بلاغة التقديم والتأخير</h4>
        <p>في القرآن الكريم لكل تقديم وتأخير سرٌّ بلاغي عظيم؛ مثل قوله تعالى <strong>إِيَّاكَ نَعْبُدُ</strong> حيث أفاد تقديم المفعول به الحصر والإخلاص الكامل لله وحده.</p>
        <h4>3. الإعراب بوّابة الفهم الصحيح</h4>
        <p>ضمة واحدة أو فتحة واحدة في أواخر الكلمات تحدد الفاعل من المفعول وتضبط المعنى التفسيري الدقيق للآية دون لبس.</p>
        <p><strong>منهجنا في الأكاديمية:</strong> نُدرّس النحو والصرف من خلال الآيات القرآنية مباشرة، لتشعر بثمرة كل درس في صلاتك وتدبّرك منذ الأسبوع الأول.</p>
      `
    }
  },

  'tafsir-approach': {
    category: 'arabic',
    icon: '🌙',
    bgClass: 'bi-3',
    en: {
      tag: 'Tafsir',
      meta: 'November 2025 · 6 min read · Quraan Arabi Academy',
      shortMeta: 'Nov 2025 · 6 min read',
      title: 'How to Approach Tafsir as a Non-Arabic Speaker',
      excerpt: 'A structured methodology for engaging authentic classical exegesis without needing ten years of Arabic first — and why it transforms your prayer.',
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
    ar: {
      tag: 'التفسير والتدبّر',
      meta: 'نوفمبر 2025 · 6 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: 'نوفمبر 2025 · 6 دقائق',
      title: 'كيف تبدأ رحلة التفسير والتدبّر بمنهجية علمية واضحة؟',
      excerpt: 'خطة عملية متدرّجة لفهم معاني القرآن الكريم من أمهات كتب التفسير الموثوقة وتحويل القراءة إلى خشوع يومي.',
      body: `
        <p>لا تحتاج إلى سنوات من الدراسات التخصصية قبل أن تبدأ بتدبّر كلام الله فهمًا سليمًا؛ كل ما تحتاجه هو منهجية منضبطة تحفظك من الفهم السطحي وتفتح لك أبواب المعاني.</p>
        <h4>1. ابدأ بالسور القصيرة التي تقرؤها في صلاتك يوميًا</h4>
        <p>البدء بجزء عمّ يُغيّر خشوعك في الصلوات الخمس فورًا. الوقوف العميق مع سورة من خمس آيات أعمق أثرًا في القلب من قراءة عشرات الصفحات سريعًا.</p>
        <h4>2. اربط الآية بسياقها ومقصد السورة</h4>
        <p>لكل سورة محور روحي يجمع آياتها. قراءة التفسير الميسّر الموثوق مثل <em>تفسير السعدي</em> و<em>مختصر ابن كثير</em> مع معلم موجّه تمنحك فهمًا متوازنًا وأصيلًا.</p>
        <h4>3. دوّن 3 إلى 5 مفردات قرآنية مفتاحية في كل مقطع</h4>
        <p>الانتباه لمعنى الكلمة العربية الدقيقة يفتح لك ظلالًا إيمانية وجمالية عميقة تظل حاضرة في قلبك كلما مررت بها في المصحف.</p>
        <p><strong>في أكاديمية قرآن عربي:</strong> نربط بين إتقان التلاوة وفهم المعاني حتى ينمو اللسان والقلب والعقل معًا.</p>
      `
    }
  },

  'tajweed-simplified-3-steps': {
    category: 'tajweed',
    icon: '🌿',
    bgClass: 'bi-1',
    en: {
      tag: 'Tajweed Simplified',
      meta: '2026 · 5 min read · Quraan Arabi Academy',
      shortMeta: '2026 · 5 min read',
      title: 'Reciting with Ease: A Simple 3-Step Method to Master Any New Surah',
      excerpt: 'Stop feeling overwhelmed by dozens of rules at once. Follow this practical 3-step recitation routine to read smoothly and confidently.',
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
    ar: {
      tag: 'تيسير التجويد',
      meta: '2026 · 5 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: '2026 · 5 دقائق',
      title: 'التلاوة بيسر وسكينة: طريقة عملية من 3 خطوات لإتقان أي سورة جديدة',
      excerpt: 'لا تُرهق نفسك بعشرات القواعد دفعة واحدة؛ اتبع هذا الروتين البسيط من 3 خطوات لتقرأ بطلاقة وثقة وهدوء.',
      body: `
        <p>يظنّ كثير من المبتدئين أن التجويد يعني حفظ كتاب ضخم قبل فتح المصحف! والحقيقة أن التجويد نُقل بالتلقّي والمشافهة ليجعل تلاوة القرآن <strong>أيسر وأوضح وأجمل</strong> لا أشقّ ولا أكثر توترًا.</p>
        <h4>الخطوة 1: استمع وتابع بإصبعك في المصحف (دقيقتان فقط)</h4>
        <p>قبل أن تقرأ المقطع بنفسك، استمع مرتين لقارئ متقن ومعلّم مثل الشيخ الحصري مع تتبّع الحركات وعلامات الوقف بعينك؛ أذنك تلتقط 70% من النطق الصحيح قبل أن يتحرك لسانك.</p>
        <h4>الخطوة 2: القراءة البطيئة مع التركيز على قاعدة واحدة فقط</h4>
        <p>لا تحاول مراقبة عشرين حكمًا في آنٍ واحد. في قراءتك الأولى، ركّز على إتمام الحركات (الفتحة والكسرة والضمة) وصفاء مخارج الحروف دون عجلة.</p>
        <h4>الخطوة 3: الوصل الهادئ والتثبيت (3 مرات متقنة)</h4>
        <p>بعد أن تستقر الكلمات، اقرأ الآية كاملة بنبرة هادئة متزنة وكررها 3 مرات بإتقان قبل الانتقال للآية التالية؛ ثلاث قراءات متقنة تثبّت اللسان أضعاف عشرين قراءة سريعة.</p>
        <p><strong>وتذكّر البشارة النبوية:</strong> «والذي يقرأ القرآن ويتتعتع فيه وهو عليه شاقّ له أجران».</p>
      `
    }
  },

  'noon-saakinah-easy-map': {
    category: 'tajweed',
    icon: '🗺️',
    bgClass: 'bi-2',
    en: {
      tag: 'Tajweed Simplified',
      meta: '2026 · 6 min read · Quraan Arabi Academy',
      shortMeta: '2026 · 6 min read',
      title: 'Noon Saakinah & Tanween Made Simple: The 4-Rule Mental Map',
      excerpt: 'Most students memorise charts and still freeze while reading. Here is the 2-minute visual map that makes Izhar, Idgham, Iqlab, and Ikhfa second nature.',
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
    ar: {
      tag: 'تيسير التجويد',
      meta: '2026 · 6 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: '2026 · 6 دقائق',
      title: 'أحكام النون الساكنة والتنوين ببساطة: خريطة ذهنية من 4 خطوات فقط',
      excerpt: 'بدل حفظ الجداول الجافة ثم التردد أثناء القراءة، إليك الخريطة البصرية السريعة التي تجعل الإظهار والإدغام والإقلاب والإخفاء طبيعة ثانية.',
      body: `
        <p>تتكرّر <strong>النون الساكنة (نْ) والتنوين (ـً ـٍ ـٌ)</strong> في كل سطر تقريبًا من المصحف. وبدل التعقيد النظري، فكّر فيها كـ <strong>أربعة أصوات طبيعية</strong> يحدّدها الحرف التالي مباشرة:</p>
        <h4>1. انطقها واضحة — الإظهار</h4>
        <p>إذا جاء بعدها حرف من حروف <strong>الحلق الستة (ء هـ ع ح غ خ)</strong> تخرج النون واضحة صافية بلا غنّة زائدة، مثل: <strong>مِنْ خَوْفٍ</strong>.</p>
        <h4>2. ادمجها بسلاسة — الإدغام</h4>
        <p>مع حروف كلمة <strong>يَرْمَلُون</strong> تذوب النون في الحرف التالي لسهولة النطق: بغنّة حركتين مع حروف <strong>يَنْمُو</strong>، وبلا غنّة مع <strong>ل، ر</strong>.</p>
        <h4>3. اقلبها ميمًا لطيفة — الإقلاب</h4>
        <p>حرف واحد فقط هو <strong>الباء (ب)</strong>؛ عند النطق بـ <strong>مِن بَعْدِ</strong> تنطبق الشفتان طبيعيًا فتُقلب النون ميمًا مخفاة بغنّة، والمصحف يضع لك علامة <strong>(م)</strong> صغيرة للتيسير!</p>
        <h4>4. أخفِها بلطف — الإخفاء</h4>
        <p>مع بقية الحروف الـ 15 لا يُلصق اللسان بمخرج النون، بل يستعد لمخرج الحرف التالي مع غنّة ناعمة بمقدار حركتين.</p>
        <p><strong>قاعدة ذهبية:</strong> التجويد في أصله تيسيرٌ وتجميلٌ لانتقال الفم بين الحروف العربية!</p>
      `
    }
  },

  'smooth-madd-breath': {
    category: 'tajweed',
    icon: '✨',
    bgClass: 'bi-3',
    en: {
      tag: 'Tajweed Simplified',
      meta: '2026 · 5 min read · Quraan Arabi Academy',
      shortMeta: '2026 · 5 min read',
      title: "How to Stop Running Out of Breath While Reciting the Qur'an",
      excerpt: 'Simple breathing habits, Mushaf stopping signs (Waqf), and steady Madd timing that turn rushed reading into calm, effortless recitation.',
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
    },
    ar: {
      tag: 'تيسير التجويد',
      meta: '2026 · 5 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: '2026 · 5 دقائق',
      title: 'كيف تتغلب على انقطاع النفَس أثناء تلاوة القرآن الكريم؟',
      excerpt: 'عادات تنفّس بسيطة، وعلامات الوقف في المصحف، وضبط المدود لتحويل القراءة المتعجّلة إلى تلاوة هادئة سلسة.',
      body: `
        <p>انقطاع النفَس وسط الآية من أكثر ما يُربك القارئ ويدفعه للإسراع أو تقصير المدود. إليك أربع خطوات عملية بسيطة تُحسّن تلاوتك من اليوم الأول:</p>
        <h4>1. اعتدل في جلستك وارفَع المصحف</h4>
        <p>الانحناء الشديد فوق الهاتف أو الطاولة يضغط الرئتين ويُقلّل سعة النفَس بنحو الثلث. اعتدل في جلستك، أرخِ كتفيك، وخذ نفسًا هادئًا عميقًا قبل بداية الآية.</p>
        <h4>2. استعن بعلامات الوقف في المصحف</h4>
        <p>لستَ مطالبًا بإنهاء الآية الطويلة في نفَس واحد! راقب العلامات اللطيفة فوق السطر: <strong>مـ</strong> (وقف لازم)، <strong>قلى</strong> (الوقف أولى)، و<strong>ج</strong> (جائز) — فهي تحفظ لك النفَس والمعنى معًا.</p>
        <h4>3. اضبط المدّ الطبيعي (حركتين) دون تطويل زائد</h4>
        <p>تطويل المدود الطبيعية إلى أربع حركات يستهلك نصف نفَسك دون أن تشعر قبل وصولك إلى المدود المتصلة والمنفصلة.</p>
        <h4>4. إذا انقطع نفَسك، قف بسكونٍ هادئ وارجع كلمة أو كلمتين</h4>
        <p>عند الاضطرار للوقف، سكّن آخر الكلمة، تنفّس بهدوء، ثم ارجع إلى بداية المعنى القريب واكمل تلاوتك بسكينة.</p>
        <p><strong>التدريب المباشر:</strong> في حصصنا الفردية يدرّبك معلمك عمليًا على مواضع الوقف وتوزيع النفَس حتى تصبح التلاوة الهادئة سجيةً لك.</p>
      `
    }
  },

  /* ── 3 NEW ISLAMIC & DU'A ARTICLES (MORNING / EVENING / BEFORE SLEEPING) ── */
  'morning-adhkar-guide': {
    category: 'adhkar',
    icon: '🌅',
    bgClass: 'bi-4',
    en: {
      tag: "Islamic & Du'as",
      meta: '2026 · 6 min read · Quraan Arabi Academy',
      shortMeta: '2026 · 6 min read',
      title: 'Morning Adhkar (أذكار الصباح): Your Daily Shield of Barakah & Protection',
      excerpt: 'Essential authentic Prophetic morning supplications — with Arabic text, transliteration, meaning, and why starting your day with remembrance transforms everything.',
      body: `
        <p>Before checking your phone or rushing into work, the Prophet Muhammad ﷺ taught us a 5-minute spiritual armor recited between <strong>Fajr and sunrise</strong> (and permissible until noon if delayed). Keeping your Morning Adhkar consistently invites <em>Barakah</em> into your time, guards you from unseen harm, and anchors your heart in complete reliance upon Allah.</p>

        <h4>1. Ayat al-Kursi (Protection Until Evening)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...</div>
          <div class="dua-tr">Allahu la ilaha illa Huwal-Hayyul-Qayyum... (Surah Al-Baqarah 2:255 — Once)</div>
          <div class="dua-en">Whoever recites Ayat al-Kursi in the morning is protected by Allah from every evil until the evening.</div>
        </div>

        <h4>2. The Three Quls (Al-Ikhlas, Al-Falaq &amp; An-Nas — 3 Times Each)</h4>
        <p>The Prophet ﷺ said: <em>"Recite Qul Huwa Allahu Ahad and Al-Mu'awwidhatayn three times in the morning and evening; they will suffice you against everything."</em> (Abu Dawud &amp; At-Tirmidhi).</p>

        <h4>3. Protection from Sudden Harm (3 Times)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</div>
          <div class="dua-tr">Bismillahilladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim. (3×)</div>
          <div class="dua-en">"In the Name of Allah, with Whose Name nothing on earth or in heaven can cause harm, and He is the All-Hearing, All-Knowing." — Nothing shall harm the one who says it three times in the morning.</div>
        </div>

        <h4>4. Sayyid al-Istighfar — The Master Supplication for Forgiveness (Once)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</div>
          <div class="dua-tr">Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka...</div>
          <div class="dua-en">Whoever recites it with certainty in the morning and passes away before evening enters Paradise (Sahih al-Bukhari).</div>
        </div>

        <h4>5. Asking for Beneficial Knowledge, Pure Provision &amp; Accepted Deeds</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا</div>
          <div class="dua-tr">Allahumma inni as'aluka 'ilman nafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan. (Once after Fajr)</div>
          <div class="dua-en">"O Allah, I ask You for beneficial knowledge, pure lawful provision, and deeds that are accepted."</div>
        </div>

        <h4>Why Keeping Morning Adhkar Daily Is So Important</h4>
        <p><strong>1. Divine Shield Before Facing the World:</strong> You step into your day protected by Allah's Name, not merely your own plans.<br>
        <strong>2. Calm Focus &amp; Barakah in Time:</strong> Remembering Allah first realigns your priorities, softens stress, and places unseen blessing in your studies, work, and family.<br>
        <strong>3. A Living Heart:</strong> The Prophet ﷺ likened the one who remembers his Lord to the living, and the one who forgets Him to the dead. Even 5 sincere minutes every morning transforms your entire day.</p>
      `
    },
    ar: {
      tag: 'إسلاميات وأذكار',
      meta: '2026 · 6 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: '2026 · 6 دقائق',
      title: 'أذكار الصباح: حصنك اليومي للبركة والحفظ وبداية اليوم بسكينة',
      excerpt: 'أهم أذكار الصباح النبوية الصحيحة مع فضلها، ولماذا تصنع المداومة عليها فارقًا حقيقيًا في يومك وقلبك ورزقك.',
      body: `
        <p>قبل أن تمسك بهاتفك أو تنغمس في مهام يومك، علّمنا النبي ﷺ حصنًا إيمانيًا لا يستغرق سوى خمس دقائق بين <strong>صلاة الفجر وطلوع الشمس</strong> (ويجوز تداركها حتى الزوال). المداومة على أذكار الصباح تملأ يومك بركةً وطمأنينة وحفظًا من كل سوء.</p>

        <h4>1. آية الكرسي (حفظٌ من الله حتى تمسي)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...</div>
          <div class="dua-en">من قرأها حين يُصبح أُجير من الجن والشرور حتى يُمسي.</div>
        </div>

        <h4>2. سورة الإخلاص والمعوّذتان (3 مرات)</h4>
        <p>قال ﷺ: <em>«قُلْ هُوَ اللَّهُ أَحَدٌ، وَالمُعَوِّذَتَيْنِ حِينَ تُمْسِي وَحِينَ تُصْبِحُ ثَلَاثَ مَرَّاتٍ تَكْفِيكَ مِنْ كُلِّ شَيْءٍ»</em> (رواه أبو داود والترمذي).</p>

        <h4>3. دعاء الحفظ من فجاءة الضرر (3 مرات)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</div>
          <div class="dua-en">من قالها ثلاث مرات صباحًا لم يضرّه شيء بإذن الله حتى يُمسي.</div>
        </div>

        <h4>4. سيّد الاستغفار (مرة واحدة بيقين)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</div>
          <div class="dua-en">من قالها من النهار موقنًا بها فمات من يومه قبل أن يُمسي فهو من أهل الجنة (رواه البخاري).</div>
        </div>

        <h4>5. دعاء العلم النافع والرزق الطيّب والعمل المتقبّل</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا</div>
          <div class="dua-en">دعاء نبوي عظيم يُقال بعد صلاة الفجر، يجمع خيري الدنيا والآخرة للطالب والوالد والعامل.</div>
        </div>

        <h4>لماذا تُعدّ المداومة على أذكار الصباح ضرورة يومية؟</h4>
        <p><strong>1. حصن رباني قبل مواجهة الدنيا:</strong> تبدأ يومك متوكلًا على الله لا على حولك وقوّتك.<br>
        <strong>2. بركة في الوقت والتركيز:</strong> ذكر الله في مطلع النهار يهدّئ القلق ويبارك في الحفظ والدراسة والعمل والأسرة.<br>
        <strong>3. حياة القلب:</strong> قال ﷺ: «مَثَلُ الذي يذكر ربه والذي لا يذكر ربه مَثَلُ الحي والميت» — خمس دقائق صادقة كل صباح تُغيّر يومك بأكمله.</p>
      `
    }
  },

  'evening-adhkar-guide': {
    category: 'adhkar',
    icon: '🌆',
    bgClass: 'bi-5',
    en: {
      tag: "Islamic & Du'as",
      meta: '2026 · 6 min read · Quraan Arabi Academy',
      shortMeta: '2026 · 6 min read',
      title: 'Evening Adhkar (أذكار المساء): Closing Your Day in Peace, Gratitude & Protection',
      excerpt: 'Recited between Asr and Maghrib, these authentic evening supplications dissolve the day\'s stress, protect your household, and refill your heart with Sakina.',
      body: `
        <p>As daylight fades between <strong>'Asr and Maghrib</strong> (and permissible into the early night), the evening transition is a sacred moment to release the anxieties of the day, thank Allah for His blessings, and wrap yourself and your family in His protection.</p>

        <h4>1. Acknowledging Allah's Sovereignty Over the Night (Once)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا</div>
          <div class="dua-tr">Amsayna wa amsal-mulku lillah, wal-hamdulillahi, la ilaha illallahu wahdahu la sharika lah...</div>
          <div class="dua-en">"We have reached the evening and at this very time all sovereignty belongs to Allah... My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and what follows it."</div>
        </div>

        <h4>2. Seeking Complete Well-Being ('Afiyah) in Faith, Family &amp; Wealth</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي</div>
          <div class="dua-tr">Allahumma inni as'alukal-'afwa wal-'afiyata fid-dunya wal-akhirah...</div>
          <div class="dua-en">The Prophet ﷺ NEVER abandoned this supplication in the morning or the evening (Abu Dawud &amp; Ibn Majah).</div>
        </div>

        <h4>3. Protection from Harm in the Night (3 Times)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ</div>
          <div class="dua-tr">A'udhu bi kalimatillahit-tammati min sharri ma khalaq. (3×)</div>
          <div class="dua-en">"I seek refuge in the perfect words of Allah from the evil of what He has created." — Protects against harm throughout the night (Sahih Muslim).</div>
        </div>

        <h4>4. Complete Sufficiency Against Worries (7 Times)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ</div>
          <div class="dua-tr">Hasbiyallahu la ilaha illa Huwa, 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azim. (7×)</div>
          <div class="dua-en">"Allah is sufficient for me; there is none worthy of worship but Him. Upon Him I rely, and He is the Lord of the Mighty Throne."</div>
        </div>

        <h4>5. Sending Blessings Upon the Prophet ﷺ (10 Times)</h4>
        <p>Reciting <strong>اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ</strong> ten times in the morning and evening brings immense mercy, forgiveness, and the intercession of the Prophet ﷺ.</p>

        <h4>Why Evening Adhkar Protect Your Heart &amp; Home</h4>
        <p>By evening, fatigue and daily pressures often cloud gratitude and invite restlessness. Pausing for Evening Adhkar resets your nervous system through <em>Dhikr</em> (<em>"Verily, in the remembrance of Allah do hearts find rest"</em> — 13:28), guards your children and home during the night, and turns everyday exhaustion into worship and reward.</p>
      `
    },
    ar: {
      tag: 'إسلاميات وأذكار',
      meta: '2026 · 6 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: '2026 · 6 دقائق',
      title: 'أذكار المساء: كيف تختم يومك بالطمأنينة والشكر والحفظ الرباني؟',
      excerpt: 'الأذكار النبوية المباركة بين العصر والمغرب لتفريغ هموم اليوم، وحفظ الأسرة والبيت، وملء القلب بالسكينة والرضا.',
      body: `
        <p>بين <strong>صلاة العصر والمغرب</strong> (ويمتد وقتها لأول الليل لمن فاته)، شرع الله لنا أذكار المساء لتكون محطة سكون وشكرٍ وتحصينٍ تُزيل عن القلب عناء النهار وتُحيط بك وبأسرتك بحفظ الله طوال الليل.</p>

        <h4>1. الإقرار بملك الله وسؤال خير الليلة (مرة واحدة)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا</div>
          <div class="dua-en">افتتاحٌ مبارك لليلةٍ مملوءة بالتوحيد والحمد وطلب الخير والوقاية من الشر.</div>
        </div>

        <h4>2. دعاء العفو والعافية في الدين والدنيا والأهل والمال</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي</div>
          <div class="dua-en">دعاء لم يكن النبي ﷺ يدعه أبدًا حين يُمسي وحين يُصبح، لِما يجمعه من العافية الشاملة.</div>
        </div>

        <h4>3. التحصين التام من كل شرّ (3 مرات)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ</div>
          <div class="dua-en">حصنٌ عظيم من أذى الليل وهوامّه وشروره (رواه مسلم).</div>
        </div>

        <h4>4. كفاية الهموم والتوكل الكامل على الله (7 مرات)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ</div>
          <div class="dua-en">تفويضٌ صادقٌ لله يُذهب القلق والاضطراب ويملأ الصدر ثقةً ورضا.</div>
        </div>

        <h4>5. الصلاة على النبي ﷺ (10 مرات)</h4>
        <p>قول <strong>اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ</strong> عشر مرات صباحًا ومساءً سببٌ للرحمة ومغفرة الذنوب وتفريج الهموم ونيل الشفاعة.</p>

        <h4>لماذا تُعدّ أذكار المساء سلاح السكينة للقلب والبيت؟</h4>
        <p>في نهاية اليوم يتراكم التعب وتزداد الوساوس والانشغالات؛ فتأتي أذكار المساء لتُعيد القلب إلى قوله تعالى: <strong>﴿أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ﴾</strong>، وتحمي أبناءك وبيتك طوال الليل، وتحوّل ساعات المساء العادية إلى عبادةٍ وأجرٍ متواصل.</p>
      `
    }
  },

  'sleep-duas-prophetic-night': {
    category: 'adhkar',
    icon: '🌌',
    bgClass: 'bi-6',
    en: {
      tag: "Islamic & Du'as",
      meta: '2026 · 7 min read · Quraan Arabi Academy',
      shortMeta: '2026 · 7 min read',
      title: "Before Sleeping Du'as (أذكار النوم): The Prophetic Night Routine for Peaceful Sleep",
      excerpt: 'The authentic Sunnah steps before sleep — and why keeping Morning, Evening, and Sleep Adhkar daily builds an unbreakable shield of Sakina and closeness to Allah.',
      body: `
        <p>Sleep is called the <em>"minor death"</em> in the Qur'an (39:42), as Allah takes our souls each night and returns them by His mercy at dawn. Following the Prophetic routine before closing your eyes turns 6–8 hours of ordinary sleep into protected, peaceful worship.</p>

        <h4>1. Cup Your Hands, Recite the Three Quls &amp; Wipe Over Your Body (3 Times)</h4>
        <p>Every night before bed, the Prophet ﷺ would bring his palms together, blow softly into them, recite <strong>Surah Al-Ikhlas, Al-Falaq, and An-Nas</strong>, and wipe over his head, face, and as much of his body as he could reach — repeating this <strong>three times</strong> (Sahih al-Bukhari).</p>

        <h4>2. Ayat al-Kursi — A Guardian Angel Until Dawn</h4>
        <p>Whoever recites <strong>Ayat al-Kursi</strong> upon lying down: <em>"A guardian from Allah will remain over you, and no devil will come near you until morning."</em> (Sahih al-Bukhari).</p>

        <h4>3. The Last Two Verses of Surah Al-Baqarah (2:285–286)</h4>
        <p>The Prophet ﷺ said: <em>"Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him"</em> — sufficing him in night prayer, protection from harm, and spiritual peace.</p>

        <h4>4. Tasbih Fatimah (33 · 33 · 34) — Strength &amp; Rest</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">سُبْحَانَ اللَّهِ (33) · الْحَمْدُ لِلَّهِ (33) · اللَّهُ أَكْبَرُ (34)</div>
          <div class="dua-tr">SubhanAllah (33×) · Alhamdulillah (33×) · Allahu Akbar (34×)</div>
          <div class="dua-en">Taught by the Prophet ﷺ to Fatimah and 'Ali (may Allah be pleased with them) as a gift better than a servant — bringing barakah in physical energy and waking refreshed.</div>
        </div>

        <h4>5. Lying on the Right Side &amp; The Final Sleep Du'a</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا</div>
          <div class="dua-tr">Bismika Allahumma amutu wa ahya.</div>
          <div class="dua-en">"In Your Name, O Allah, I die and I live."</div>
        </div>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ</div>
          <div class="dua-tr">Allahumma aslamtu nafsi ilayk, wa fawwadtu amri ilayk...</div>
          <div class="dua-en">The Prophet ﷺ said: Make these the very last words you speak before sleep; if you pass away that night, you pass away upon the pure Fitrah (Sahih al-Bukhari).</div>
        </div>

        <h4>Why Consistency in Morning, Evening &amp; Sleep Adhkar Changes Your Life</h4>
        <p><strong>• 24-Hour Spiritual Fortress:</strong> Morning guards your day, Evening guards your dusk, and Sleep Adhkar guard your night — leaving zero gap for anxiety or unseen harm.<br>
        <strong>• Deeper Sleep, Lighter Mornings:</strong> Replacing late-night scrolling with Qur'an and Dhikr calms the mind immediately and makes waking up for Fajr noticeably easier.<br>
        <strong>• Teaching Children by Example:</strong> Reciting these short Du'as aloud with your children every morning and bedtime plants a lifelong love of Allah and the Qur'an in their hearts.</p>
      `
    },
    ar: {
      tag: 'إسلاميات وأذكار',
      meta: '2026 · 7 دقائق قراءة · أكاديمية قرآن عربي',
      shortMeta: '2026 · 7 دقائق',
      title: 'أذكار النوم: الهدي النبوي لليلٍ هادئٍ مطمئنٍ وحفظٍ حتى الصباح',
      excerpt: 'الخطوات النبوية الصحيحة قبل إغماض عينيك، ولماذا تصنع المواظبة على أذكار الصباح والمساء والنوم سياجًا لا يُخترق من السكينة والبركة.',
      body: `
        <p>سمّى الله النوم <strong>الوفاة الصغرى</strong>؛ إذ يتوفّى سبحانه الأنفس بالليل ثم يُرسلها برحمته عند الفجر. وباتباع أذكار النوم النبوية تتحول ساعات نومك كلها إلى عبادةٍ وحفظٍ وسكينةٍ عميقة.</p>

        <h4>1. جمع الكفّين وقراءة الإخلاص والمعوّذتين والمسح على الجسد (3 مرات)</h4>
        <p>كان النبي ﷺ إذا أوى إلى فراشه كل ليلة جمع كفّيه، ثم نفث فيهما، فقرأ <strong>قل هو الله أحد، وقل أعوذ برب الفلق، وقل أعوذ برب الناس</strong>، ثم مسح بهما ما استطاع من جسده يبدأ برأسه ووجهه، يفعل ذلك <strong>ثلاث مرات</strong> (رواه البخاري).</p>

        <h4>2. آية الكرسي — حارسٌ من الله حتى تصبح</h4>
        <p>من قرأ <strong>آية الكرسي</strong> عند النوم: <em>«لن يزال عليك من الله حافظ، ولا يقربك شيطان حتى تصبح»</em> (رواه البخاري).</p>

        <h4>3. آخر آيتين من سورة البقرة</h4>
        <p>قال ﷺ: <em>«مَن قرأ بالآيتين من آخر سورة البقرة في ليلةٍ كفتاه»</em> — تكفيانه من الشرور والآفات وتقومان مقام قيام الليل.</p>

        <h4>4. تسبيح فاطمة رضي الله عنها (33 · 33 · 34)</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">سُبْحَانَ اللَّهِ (33) · الْحَمْدُ لِلَّهِ (33) · اللَّهُ أَكْبَرُ (34)</div>
          <div class="dua-en">وصيّة النبي ﷺ لابنته فاطمة وعلي رضي الله عنهما؛ تمنح الجسد قوةً وبركةً ونشاطًا عند الاستيقاظ.</div>
        </div>

        <h4>5. النوم على الشق الأيمن وختام الكلام بالذكر</h4>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا</div>
          <div class="dua-en">تسليمٌ هادئ للروح بين يدي خالقها عز وجل.</div>
        </div>
        <div class="dua-box">
          <div class="dua-ar" dir="rtl">اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ</div>
          <div class="dua-en">قال ﷺ: اجعلهنّ آخر ما تتكلم به قبل النوم؛ فإن مُتّ من ليلتك مُتّ على الفطرة (رواه البخاري).</div>
        </div>

        <h4>لماذا تُغيّر المواظبة على أذكار الصباح والمساء والنوم حياتك كلها؟</h4>
        <p><strong>• حماية ربانية 24 ساعة:</strong> الصباح يحفظ نهارك، والمساء يحفظ عشيتك، وأذكار النوم تحفظ ليلك فلا تترك ثغرة للقلق أو الأذى.<br>
        <strong>• نوم أعمق واستيقاظ أيسر للفجر:</strong> استبدال تصفّح الهاتف قبل النوم بالقرآن والذكر يُهدّئ العقل فورًا ويُعينك على صلاة الفجر بنشاط.<br>
        <strong>• تربية الأبناء بالقدوة:</strong> ترديد هذه الأذكار اليسيرة مع أطفالك صباحًا وقبل النوم يغرس في قلوبهم صلةً حيّة بالله وبكتاب الله طوال العمر.</p>
      `
    }
  }
};
