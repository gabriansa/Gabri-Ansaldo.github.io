/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F1EA',
        ink: '#0E0E0E',
        accent: '#FF4A1C',
        mute: '#6B6862',
        hairline: '#D9D4C7',
        invert: '#0E0E0E',
        invertText: '#F4F1EA',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'eyebrow': ['0.78rem', { lineHeight: '1', letterSpacing: '0.14em' }],
        'hero': ['clamp(3.25rem, 12vw, 11rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display': ['clamp(2.25rem, 7vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'mega': ['clamp(4rem, 18vw, 18rem)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'lede': ['clamp(1.15rem, 1.8vw, 1.5rem)', { lineHeight: '1.45', letterSpacing: '-0.01em' }],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        wide: '1440px',
        content: '1180px',
      },
    },
  },
  plugins: [],
}
