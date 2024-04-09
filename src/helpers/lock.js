export function bodyLock(lock = false) {
    if (lock) {
        document.documentElement.classList.add('lock')
        document.body.classList.add('lock')
    } else {
        document.documentElement.classList.remove('lock')
        document.body.classList.remove('lock')
    }
}