<template>
    <div class="flex">
        <div class="h-screen flex flex-col justify-evenly items-center w-full md:w-[30rem] 2xl:w-[50rem] p-20">
            <div class="flex flex-col items-center">
                <Favicon width="75px" height="75px" class="mb-5"/>
                <h1>{{ config.public.appName }}</h1>
            </div>

            <div>
                <h1>Velkommen tilbage</h1>
                <p>Log ind for at fortsætte</p>
                <form @submit.prevent="submitLogin">
                    <input v-model="form.email" @keyup="checkVadility" type="email" pattern=".*@.+\..+" placeholder="email" aria-label="Email" autocomplete="username" required>
                    <input v-model="form.password" @keyup="checkVadility" type="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required>
                    <fieldset>
                        <label for="remember">
                            <input v-model="form.remember" type="checkbox" role="switch" id="remember" name="remember">Remember me
                        </label>
                    </fieldset>
                    <button type="submit">Login</button>
                </form>
                <p>
                    Har du glemt dit kodeord?
                    <router-link to="/auth/forgot-password">Nulstil her</router-link>
                </p>
            </div>
            
            <div>
                Har du ikke en bruger? 
                <router-link to="/auth/register">Opret bruger her</router-link>
            </div>
        </div>

        <div class="hidden md:block flex-1">
            <img src="/img/login.png" alt="Login" class="h-full w-full object-cover object center"/>
        </div>
    </div>
</template>

<script setup>
    //import page scss
    const config = useRuntimeConfig()
    const { login } = useUser()
    const { checkVadility } = useFormValidation();
    const { addToast } = useToast();

    var form = ref({
        email: '',
        password: '',
        remember: false
    })

    definePageMeta({
        layout: 'guest',
        sanctum: {
            guestOnly: true,
        }
    });

    const submitLogin = async (e) => {
        const submitButton = e.target.querySelector('button[type="submit"]');
        const inputs = e.target.querySelectorAll('input');
        submitButton.setAttribute('aria-busy', 'true');
        await login(form.value).catch((error) => {
            submitButton.removeAttribute('aria-busy');
            addToast(error.response._data.message, 'error');
        });
    }
</script>