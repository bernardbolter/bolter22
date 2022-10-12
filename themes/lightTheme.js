const colors = {
    fg: '#000',
    fgAccent: '#111',
    fgSub: '#222',
    bg: '#fff',
    bgAccent: '#eee',
    bgSub: '#ddd'
}

const lightTheme = {
    name: 'light',
    breakpoints: {
        mobile: 550,
        tablet: 768,
        desktop: 1201,
        jumbo: 1451
    },
    colors: {
        fg: colors.fg,
        fgAccent: colors.fgAccent,
        fgSub: colors.fgSub,
        bg: colors.bg,
        bgAccent: colors.bgAccent,
        bgSub: colors.bgSub
    },
    title: {
        default: {
            fontFamily: '"Barlow Semi", sans-serif',
            fontWeight: '800',
            fontSize: '20px',
            lineHeight: '26px',
            color: colors.fg
        },
        mobile: {
            fontSize: '14px',
            lineHeight: '20px'
        },
        tablet: {
            fontSize: '16px',
            lineHeight: '24px'
        },
        desktop: {
            fontSize: '20px',
            lineHeight: '28px'
        },
        jumbo: {
            fontSize: '28px',
            lineHeight: '34px'
        }
    }
}

export default lightTheme