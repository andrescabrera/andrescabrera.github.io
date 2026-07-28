/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Altitude palette
        'bg-primary':    '#080C14',
        'bg-surface':    '#0F1724',
        'bg-elevated':   '#162035',
        'bg-card':       '#111827',
        'accent-sky':    '#0EA5E9',
        'accent-sky-lt': '#38BDF8',
        'accent-travel': '#10B981',
        'accent-fintech':'#8B5CF6',
        'accent-amber':  '#F59E0B',
        'text-primary':  '#F0F6FF',
        'text-muted':    '#8BA8C8',
        'text-faint':    '#4A6A8A',
        'border-dark':   '#1E3A5F',
        'border-light':  '#253D5F',
        // Legacy (kept for schedule page compat)
        'caribbean-yellow': '#FFDE59',
        'medium-brown': '#653A1E',
        'button-orange': '#FA873E',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body':    ['Inter', 'sans-serif'],
        'mono':    ['JetBrains Mono', 'monospace'],
        // Legacy fonts kept for backward compat
        'heading':    ['Space Grotesk', 'sans-serif'],
        'typewriter': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'heading-xl':    ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-lg':    ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'heading-md':    ['36px', { lineHeight: '1.2',  fontWeight: '600' }],
        'heading-sm':    ['24px', { lineHeight: '1.3',  fontWeight: '600' }],
        'subheading-xl': ['20px', { lineHeight: '1.4',  fontWeight: '500' }],
      },
      spacing: {
        'section': '96px',
        'section-sm': '64px',
      },
      borderRadius: {
        'card': '16px',
        'badge': '999px',
        'button': '10px',
      },
      boxShadow: {
        'glow-sky':    '0 0 30px rgba(14, 165, 233, 0.2)',
        'glow-travel': '0 0 30px rgba(16, 185, 129, 0.15)',
        'glow-fintech':'0 0 30px rgba(139, 92, 246, 0.15)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-sky': 'linear-gradient(135deg, #0EA5E9, #0284C7)',
        'gradient-travel': 'linear-gradient(135deg, #10B981, #059669)',
        'gradient-fintech': 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
        'gradient-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(14,165,233,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)',
      },
      animation: {
        'fade-up':    'fadeInUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient':   'gradientShift 15s ease infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      screens: {
        '3xl': '2000px',
      },
      minWidth: {
        "1/3": "30%"
      },
      maxWidth: {
        'content': '1200px',
      },
      height: {
        "banner-height": "100vh",
        "banner-height-mobile": "100vh",
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
    plugins: [],
  },
}