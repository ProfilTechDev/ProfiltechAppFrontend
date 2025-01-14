const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'primary': 'var(--theme-primary)',
        'secondary': 'var(--theme-secondary)',
        'danger': '#B91C1C',
        'success': '#00A86B',
        'warning': '#FFA500',
        'info': '#1E90FF',
      },
      textColor: {
        'base': 'var(--theme-h1-color)',
        'muted': 'var(--theme-muted-color)',
        'primary': 'var(--theme-primary)',
        'link': 'var(--theme-link-color)'
      },
      backgroundColor: {
        'section': 'var(--theme-card-background-color)'
      },
      boxShadow: {
        'section': 'var(--theme-card-box-shadow)'
      },
      fontFamily: {
        'body': ['Nunito']
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}