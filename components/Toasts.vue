<template>
    <div class="toasts">
        <article
            v-for="toast in toasts"
            :key="toast.id"
            :class="['toast', toast.type]"
            @mouseenter="pauseToast(toast.id)"
            @mouseleave="resumeToast(toast.id)"
        >   
            <div class="toast-content">
                <FontAwesomeIcon :icon="toast.icon" />
                <p>{{ toast.message }}</p>
            </div>
            <span @click="removeToast(toast.id)" class="close">X</span>
        </article>
    </div>

</template>

<script setup>
import 'assets/styles/toasts.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const { toasts, removeToast, pauseToast, resumeToast } = useToast()
</script>
