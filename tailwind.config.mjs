/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // SINGLE SOURCE OF TRUTH - All colors defined here only
        'bg': '#0a0e1a',
        'surface': '#131827',
        'text': '#e8eaf4',
        'muted': '#9ca3af',
        'accent': '#818cf8',
        'accent-2': '#fbbf24',
        'link': '#a78bfa',
        'stroke': '#1e293b',
        'focus': '#c4b5fd',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'caret': 'caret 1s steps(1, end) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        caret: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      maxWidth: {
        'content': '880px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    // Auto-generate CSS variables from theme colors
    function({ addBase, theme }) {
      const colors = theme('colors');
      const cssVars = Object.entries(colors).reduce((acc, [key, value]) => {
        if (typeof value === 'string') {
          acc[`--${key}`] = value;
        }
        return acc;
      }, {});
      
      addBase({
        ':root': cssVars
      });
    }
  ],
}
