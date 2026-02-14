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

// Color palette
export const colors = {
  background: {
    dark: '#0a0f1e',
    medium: '#1a1f35',
    light: '#2a3550',
  },
  text: {
    primary: '#ffffff',
    secondary: '#e2e8f0',
  },
  accents: {
    rhino: '#8b5cf6',
    course: '#10b981',
    premium: '#f59e0b',
    cta: '#3b82f6',
    danger: '#ef4444',
  },
  glow: 'rgba(139, 92, 246, 0.5)',
} as const;

// Hebrew script content
export const SCRIPT = {
  scene1: {
    lines: [
      'לקנות דירה בישראל?',
      'זה לא סתם עוד משימה.',
      'זה מסע שדורש ידע, זמן, ועצבים.',
    ],
  },
  scene2: {
    cards: [
      { text: 'טעויות יקרות — מאות אלפי ₪', icon: 'alert' as const },
      { text: 'משכנתא לא מיטבית', icon: 'trending' as const },
      { text: 'זמן יקר שהולך לאיבוד', icon: 'clock' as const },
    ],
  },
  scene3: {
    title: 'קרנף נדל"ן',
    subtitle: 'כוח. הגנה. דרך ברורה קדימה.',
  },
  scene4: {
    title: 'קורס הדרך לדירה',
    items: [
      'כל הידע במקום אחד',
      'צעד אחר צעד',
      'בקצב שלך',
      'מתאים לרוכשים ראשונים',
    ],
  },
  scene5: {
    title: 'ליווי פרימיום',
    items: [
      'ליווי אישי מלא',
      'מהחיפוש ועד החתימה',
      'ניסיון של שנים',
      'ביטחון בכל שלב',
    ],
  },
  scene6: {
    counter: 300,
    tagline: 'כוח. עוצמה. נדל"ן.',
    brand: 'קרנף נדל"ן',
    url: 'karnaf.lovable.app',
    cta: 'עכשיו תורך.',
  },
} as const;
