export const nameContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

export const fadeLinks = {
    hidden: {
        opacity: 1
    },
    visible: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: 1
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1
        }
    }
}

export const fadeLink = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}