/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--theme-primary)',
        'secondary': 'var(--theme-secondary)',
      },
      textColor: {
        'base': 'var(--theme-h1-color)',
        'muted': 'var(--theme-text-muted-color)',
        'primary': 'var(--theme-primary)',
        'link': 'var(--theme-link-color)'
      },
      backgroundColor: {
        'section': 'var(--theme-card-background-color)'
      },
      boxShadow: {
        'section': 'var(--theme-card-box-shadow)'
      },
    },
  },
  plugins: [],
}

