import { faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


// Use Nuxt's useState to create a globally shared state
export function useToast() {
    const toasts = useState('toasts', () => [])

    const addToast = (message, type = 'info') => {
        const id = Date.now()
        const duration = 5000 // Toast duration in milliseconds
        const startTime = Date.now()

        const toast = {
        id,
        message,
        icon: getFAIcon(type),
        type,
        duration,
        startTime,
        remainingTime: duration,
        timeoutId: null,
        }

        const remove = () => {
        removeToast(id)
        }

        // Set the timeout and store its ID
        toast.timeoutId = setTimeout(remove, duration)

        toasts.value.push(toast)
    }

    const removeToast = (id) => {
        toasts.value = toasts.value.filter((toast) => toast.id !== id)
    }

    const pauseToast = (id) => {
        const toast = toasts.value.find((t) => t.id === id)
        if (toast) {
        clearTimeout(toast.timeoutId)
        const elapsed = Date.now() - toast.startTime
        toast.remainingTime -= elapsed
        }
    }

    const resumeToast = (id) => {
        const toast = toasts.value.find((t) => t.id === id)
        if (toast) {
        toast.startTime = Date.now()
        const remove = () => {
            removeToast(id)
        }
        toast.timeoutId = setTimeout(remove, toast.remainingTime)
        }
    }

    const getFAIcon = (type) => {
        switch (type) {
        case 'info':
            return faInfoCircle
        case 'success':
            return faCheckCircle
        case 'warning':
            return faExclamationCircle
        case 'error':
            return faTimesCircle
        default:
            return faInfoCircle
        }
    }

    return {
        toasts,
        addToast,
        removeToast,
        pauseToast,
        resumeToast,
    }
}
