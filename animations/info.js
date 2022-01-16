export const slideUp = {
    initial: {
        translateY: 0
    },
    animate: {
        translateY: -600,
    },
    exit: {
        translateY: 0
    },
    transition: {
        duration: 1
    }
}

export const fadeOut = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 0,
        display: 'none'
    }
}
