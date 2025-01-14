<template>
    <div class="forgot-password">
        <div class="forgot-password-container">

            <h1>Nulstil din adgangskode</h1>
            <p>Indtast nyt kodeord</p>
            <form @submit.prevent="submitResetPassword">
                <input v-model="form.password" type="password" @keyup="checkVadility" placeholder="Nyt kodeord" aria-label="Nyt kodeord" required>
                <input v-model="form.confirmPassword" type="password" :aria-invalid="form.confirmPassword ? !passwordMatch : null" placeholder="Bekræft kodeord" aria-label="Bekræft kodeord" required>
                <p v-if="!passwordMatch && form.confirmPassword.length > 0" class="error">Kodeordene matcher ikke</p>
                <button :aria-busy="isBuisy" :disabled="!passwordMatch" type="submit">Nulstil kodeord</button>
            </form>
        </div>
    </div>
</template>

<script setup>

    definePageMeta({
        layout: 'guest',
        sanctum: {
            guestOnly: true,
        }
    });

    const { resetPassword } = useUser();
    const { checkVadility } = useFormValidation();
    const { addToast } = useToast();
    const { query } = useRoute();
    const token = query.token;
    const email = query.email;
    const passwordMatch = computed(() => form.value.password === form.value.confirmPassword && form.value.password.length > 0);
    const form = ref({
        password: '',
        confirmPassword: ''
    });
    const isBuisy = ref(false);

    const submitResetPassword = async (e) => {
        if(!passwordMatch.value) return;
        isBuisy.value = true;

        const { status, data, error } = await resetPassword(token, email, form.value.password, form.value.confirmPassword);

        if (status.value === 'success') {
            navigateTo('/auth/login');
            addToast(data.value.message, 'success');
        } else if (status.value === 'error') {
            isBuisy.value = false;
            addToast(error.value.data.message, 'error');
        }
    }
</script>