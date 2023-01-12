const randomColor = (min, max) => {
    var color = function() {
        return Math.floor(Math.random() * (max - min)) + min
    }
    return `rgb(${color()},${color()}, ${color()})`
}

const fonts = {
    header: '"Barlow Semi", sans-serif',
    body: '"Barlow Semi", sans-serif'
}

export const randomTheme = (mode) => {
    console.log(mode)
    var colors = {
        foreground: 'black',
        background: 'white',
        accent: 'red',
        highlight: 'blue'
    }

    colors.foreground = randomColor(100,200);

    return {
        name: "random",
        breakpoints: {
            mobile: 550,
            tablet: 768,
            desktop: 1201,
            jumbo: 1451
        },
        fonts: {
            header: fonts.header,
            body: fonts.body
        },
        colors: {
            foreground: colors.foreground,
            background: colors.background,
            accent: colors.accent,
            highlight: colors.highlight
        },
        title: {
            default: {
                fontFamily: fonts.header,
                fontWeight: '800',
                fontSize: '16px',
                lineHeight: '22px',
                color: colors.foreground
            }
        }
    }
}

export default randomTheme