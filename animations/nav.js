export const navContainer = {
    artwork: {
        opacity: 1,
    },
    exhibit: {
        opacity: 1,
    },
    exit: {
        opacity: 1
    }
}

export const war = {
    initial: {
        background: '#393B3E',
        x: -50,
        y: 10,
    },
    exhibit: {
        background: '#393B3E',
        x: -50,
        y: 10,
        transition: {
            duration: .5
        }
    },
    artwork: {
        background: '#6D2E46',
        x: -10,
        y: 20,
        transition: {
            duration: .5
        }
    }
}

export const links = {
    exhibit: {
        transition: {
            // when: 'beforeChildren',
            // staggerChildren: 0.05,
            // staggerDirection: 1
        }
    },
    artwork: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: 1
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

export const item = {
    exhibit: {
        opacity: 0
    },
    artwork: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}