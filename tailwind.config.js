/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        colors: {
            mainColor: '#ffb921',
            white: '#fff',
            borderGray: 'rgb(233, 236, 238)',
            menuItem: '#919eab',
            hoverBackground: 'rgba(145, 158, 171, 0.08)',
            menuActive: '#ebf8f4',
            activeText: 'rgb(0, 167, 111)',
            greenHover:'rgba(0, 167, 111, 0.08)',
            green: '#00a76f',
            black:'#000',
            hoverDelBack:'rgb(183, 29, 24)'
        },
        fontFamily: {
            publicSansBold: 'PublicSans-Bold'
        },
        screens: {
            'lg': {
                'max': '1200px'
            }
        },
        boxShadow: {
            grayShadow: '0px 0px 15px 0px rgba(0,0,0,0.08)',
            whiteShodow: 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -10px 10px ' +
                    '20px -2px',
            greenShadow:'0px 0px 15px 0px #00a76f',
            tableShadow:'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',        
            hoverShadow:'rgba(255, 86, 48, 0.24) 0px 8px 16px 0px'
        }
    },
    plugins: []
}
