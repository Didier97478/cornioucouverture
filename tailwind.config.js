/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                premium: {
                    slate: "#0f172a",
                    dark: "#020617",
                    copper: "#b87333",
                    gold: "#d4af37",
                    accent: "#ec9213"
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
