import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          name: 'light',
          default: true,
          'base-100': '#F2EFE7',
          primary: '#006A71',
          secondary: '#48A6A7',
          accent: '#9ACBD0',
        },
        dark: {
          name: 'dark',
          'base-100': '#1e293b',
          primary: '#48A6A7',
          secondary: '#006A71',
          accent: '#9ACBD0',
        },
      },
    ],
  },
};
