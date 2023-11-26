/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',

    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/**/*.antlers.html",
    ],

    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                tertiary: 'var(--color-tertiary)',
                success: 'var(--color-success)',
                info: 'var(--color-info)',
                warning: 'var(--color-warning)',
                danger: 'var(--color-danger)',
                light: 'var(--color-light)',
                dark: 'var(--color-dark)',
            }
        },
    },
    plugins: [],
}

