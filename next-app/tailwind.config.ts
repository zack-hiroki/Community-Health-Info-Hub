import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#4A90E2',
          lightBlue: '#64A3F5',
          darkBlue: '#357ABD',
        },
        neutral: {
          white: '#FFFFFF',
          lightGray: '#F5F7FA',
          mediumGray: '#E1E8ED',
          darkGray: '#8A94A6',
          charcoal: '#2C3E50',
        },
        functional: {
          success: '#2ECC71',
          warning: '#F39C12',
          error: '#E74C3C',
          info: '#3498DB',
        },
        // Gradients as CSS variables for use in style attributes
        gradients: {
          heroGradient: 'var(--hero-gradient)',
          cardAccent: 'var(--card-accent-gradient)',
          buttonGradient: 'var(--button-gradient)',
          backgroundGradient: 'var(--background-gradient)',
        },
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        full: '50%',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
        md: '0 4px 12px rgba(0, 0, 0, 0.08)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
        xl: '0 12px 32px rgba(0, 0, 0, 0.16)',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
      },
      fontFamily: {
        inter: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config; 