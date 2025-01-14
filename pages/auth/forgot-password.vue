<template>
    <div class="forgot-password">
        <div class="forgot-password-container">
            <div class="primary-icon-circle">
                <font-awesome-icon :icon="faKey" class="primary-icon"/>
            </div>
            <h1>Har du glemt dit kodeord?</h1>
            <p>Indtast din email og vi sender dig et link til at nulstille dit kodeord</p>
            <form @submit.prevent="submitForgotPassword">
                <input v-model="form.email" type="email" @keyup="checkVadility" placeholder="Email" aria-label="Email" autocomplete="email" pattern=".*@.+\..+" required>
                <button :aria-busy="isBuisy" type="submit">Nulstil kodeord</button>
            </form>
            <router-link to="/auth/login" class="back-link">
                <font-awesome-icon :icon="faArrowLeft"/>Tilbage til login
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { faArrowLeft, faKey } from '@fortawesome/free-solid-svg-icons';
    
    const { forgotPassword } = useUser()
    const { checkVadility } = useFormValidation();
    const { addToast } = useToast();
    const isBuisy = ref(false);
    const form = ref({
        email: ''
    });

    definePageMeta({
        layout: 'guest',
        sanctum: {
            guestOnly: true,
        }
    });

    const submitForgotPassword = async (e) => {
        isBuisy.value = true;
        const { status, data, error } = await forgotPassword(form.value);

        if (status.value === 'success') {
            navigateTo('/auth/login');
            addToast(data.value.message, 'success');
        } else if ( status.value === 'error'){
            isBuisy.value = false;
            addToast(error.value.data.message, 'error');
        }
    }
</script>