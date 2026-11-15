/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            font: 'inter',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            '2xl': '1536px',
        },
        extend: {
            extend: {
                fontSize: {
                'card-title': ['20px', { lineHeight: '1.4' }], 
                'card-caption': ['14px', { lineHeight: '1.4' }],
                }
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                dark: '#17191c',
                dark2: '#10181e',
                darkBorder: 'transparent',
                blueBorder: '#10414f',
                black: '#08111F',
                primary: '#e0ff68',
                secondary: '#205fee',
                gray: {
                    light: '#FBFBFB',
                    DEFAULT: '#E6E9EB',
                    dark: '#91999e',
                }
            },
            fontFamily: {
                sans: ['inter', 'sans-serif'],
                reey: ['reey', 'sans-serif'],
            },
             spacing: {
                'xxl': '80px',
                'xl': '60px',
                'lg': '40px',
                'md': '20px',
                'sm': '16px',
                'xs': '8px',
                'xxs': '4px',
            },
            borderRadius: {
                'xxl': '80px',
                'xl': '60px',
                'lg': '40px',
                'md': '20px',
                'sm': '16px',
                'xs': '8px',
                'xxs': '4px',
             },
             boxShadow: {
                'shadow': '0px 0px 4px 0px rgba(0,0,0,0.2)',
             },
            animation: {
                show: 'show 1s ease 0s 1 normal forwards',
                hide: 'hide 1s ease 0s 1 normal forwards',
                fadeIn: 'fadeIn 1s ease forwards',
                scaleHorzRight: 'scaleHorzRight 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
                scaleVertCenter: 'scaleVertCenter  0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            },
            keyframes: {
                scaleHorzRight: {
                    '0%': { transform: 'scaleX(0.4)', 'transform-origin': '100% 100%' },
                    '100%': { transform: 'scaleX(1)', 'transform-origin': '100% 100%' },
                },
                scaleVertCenter: {
                    '0%': {
                        transform: 'scaleY(0)',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'scaleY(1)',
                        opacity: '1',
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                show: {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                hide: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0)', opacity: '0' },
                },
                
            },
        },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.black'),
                        fontSize: '1rem',
                    },
                },
            }),
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('flowbite/plugin'),
        plugin(function({ addUtilities }) {
            addUtilities({
            '.rotate-y-180': { transform: 'rotateY(180deg)' },
            });
        }),
        ],
};
