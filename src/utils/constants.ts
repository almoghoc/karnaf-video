// Video specifications
export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  totalFrames: 1800, // 60 seconds
} as const;

// Scene timings (in frames)
export const SCENES = {
  challenge: { start: 0, end: 240 },       // 0-8s
  stakes: { start: 240, end: 450 },         // 8-15s
  rhinoIntro: { start: 450, end: 750 },     // 15-25s
  course: { start: 750, end: 1140 },        // 25-38s
  premium: { start: 1140, end: 1530 },      // 38-51s
  cta: { start: 1530, end: 1800 },          // 51-60s
} as const;

// Color palette — matched to karnaf.lovable.app website design
export const colors = {
  background: {
    dark: '#0f172a',
    medium: '#1e293b',
    light: '#334155',
  },
  text: {
    primary: '#ffffff',
    secondary: '#e2e8f0',
  },
  accents: {
    rhino: '#f97316',     // Orange — primary brand color
    course: '#f97316',    // Orange — unified brand
    premium: '#fbbf24',   // Gold — premium distinction
    cta: '#f97316',       // Orange — CTA buttons
    danger: '#ef4444',    // Red — warning/danger
  },
  glow: 'rgba(249, 115, 22, 0.5)',
} as const;

// Hebrew script content — creative direction by Karnaf
export const SCRIPT = {
  scene1: {
    lines: [
      'לקנות דירה בישראל?',
      'זה לא סתם עוד החלטה.',
      'זה ההשקעה הכי גדולה בחיים שלך.',
    ],
  },
  scene2: {
    cards: [
      { text: 'טעויות יקרות — מאות אלפי שקלים', icon: 'alert' as const },
      { text: 'משכנתא לא נכונה — תשלומים מיותרים', icon: 'trending' as const },
      { text: 'בלי ליווי — לבד מול מערכת מורכבת', icon: 'clock' as const },
    ],
  },
  scene3: {
    title: 'קרנף נדל"ן',
    subtitle: 'כוח. עוצמה. נדל"ן.',
    subtext: 'הכוח שמוביל אותך בביטחון',
  },
  scene4: {
    title: 'קורס הדרך לדירה',
    items: [
      'כל מה שצריך לדעת — במקום אחד',
      'צעד אחר צעד, בקצב שלך',
      'חוסכים לך זמן, כסף וטעויות',
      'מתאים לרוכשי דירה ראשונה',
    ],
  },
  scene5: {
    title: 'ליווי פרימיום',
    items: [
      'ליווי אישי מלא — מא׳ ועד ת׳',
      'מהחיפוש ועד קבלת המפתח',
      'ניסיון של שנים בשטח',
      'ביטחון מלא בכל צעד',
    ],
  },
  scene6: {
    counter: 300,
    tagline: 'כוח. עוצמה. נדל"ן.',
    brand: 'קרנף נדל"ן',
    url: 'karnaf.lovable.app',
    cta: 'הצעד הבא שלך מתחיל כאן.',
  },
} as const;
