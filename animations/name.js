export const fadeLinks = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 2,
            staggerDirection: 1
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 2 }
    }
}

export const fadeLink = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}