/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "on-secondary-fixed-variant": "#5c5b5b",
              "inverse-primary": "#fbc51f",
              "surface-container": "#eae8e2",
              "surface-bright": "#f8f6f0",
              "primary": "#735800",
              "error-container": "#f95630",
              "primary-container": "#fbc51f",
              "on-surface-variant": "#5c5c57",
              "on-primary": "#fff1d8",
              "tertiary-dim": "#565034",
              "on-error-container": "#520c00",
              "primary-dim": "#644c00",
              "secondary-container": "#e5e2e1",
              "on-secondary-fixed": "#403f3f",
              "secondary": "#5c5b5b",
              "on-primary-fixed-variant": "#614a00",
              "primary-fixed": "#fbc51f",
              "surface-container-low": "#f2f1ea",
              "inverse-surface": "#0e0f0b",
              "on-tertiary": "#fef3cd",
              "outline": "#777772",
              "surface": "#f8f6f0",
              "secondary-fixed-dim": "#d6d4d3",
              "on-background": "#2e2f2b",
              "secondary-fixed": "#e5e2e1",
              "tertiary-fixed-dim": "#ede2be",
              "on-secondary": "#f5f2f1",
              "surface-container-highest": "#deddd6",
              "error-dim": "#b92902",
              "tertiary-container": "#fcf1cc",
              "error": "#b02500",
              "background": "#f8f6f0",
              "surface-container-lowest": "#ffffff",
              "outline-variant": "#aeada8",
              "surface-dim": "#d5d5cd",
              "tertiary": "#625b3f",
              "primary-fixed-dim": "#ebb703",
              "on-primary-container": "#564100",
              "on-secondary-container": "#525151",
              "surface-tint": "#735800",
              "on-tertiary-container": "#615a3e",
              "on-tertiary-fixed": "#4e482d",
              "surface-variant": "#deddd6",
              "inverse-on-surface": "#9e9d98",
              "on-primary-fixed": "#3e2e00",
              "on-error": "#ffefec",
              "secondary-dim": "#504f4f",
              "tertiary-fixed": "#fcf1cc",
              "on-surface": "#2e2f2b",
              "on-tertiary-fixed-variant": "#6c6447",
              "surface-container-high": "#e4e3dc"
      },
      "borderRadius": {
              "DEFAULT": "1rem",
              "lg": "2rem",
              "xl": "3rem",
              "full": "9999px"
      },
      "fontFamily": {
              "headline": ["'Plus Jakarta Sans'", "sans-serif"],
              "body": ["'Be Vietnam Pro'", "sans-serif"],
              "label": ["'Be Vietnam Pro'", "sans-serif"]
      },
      "animation": {
        'dash': 'dash 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      "keyframes": {
        'dash': {
          'to': { 'stroke-dashoffset': '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
