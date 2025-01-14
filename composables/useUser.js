export default function useUser() {
    const client = useSanctumClient();
    const { login, logout, user } = useSanctumAuth();
    const defaultEndpoint = 'v1/user';

    async function forgotPassword(email) {
        return useAsyncData('forgot-password', () =>
            client('/forgot-password', {
                method: 'POST',
                body: JSON.stringify(email),
            })
        );
    }

    async function resetPassword(token, email, password, password_confirmation) {
        return useAsyncData('reset-password', () =>
            client('/reset-password', {
                method: 'POST',
                body: JSON.stringify({ 
                    'token': token, 
                    'email': email, 
                    'password': password, 
                    'password_confirmation': password_confirmation 
                }),
            })
        );
    }

    async function updateUser(data) {
        return useAsyncData('update-user', () =>
            client(defaultEndpoint, {
                method: 'PUT',
                body: JSON.stringify(data),
            })
        );
    }

    async function confirmCurrentPassword(password) {
        return useAsyncData('confirm-password', () =>
            client('user/confirm-password', {
                method: 'POST',
                body: JSON.stringify({password: password}),
            })
        );
    }

    async function updatePassword(current_password, password, password_confirmation) {
        return useAsyncData('update-password', () =>
            client('user/password', {
                method: 'PUT',
                body: JSON.stringify({ current_password, password, password_confirmation }),
            })
        );
    }

    async function updateEmailNotificationSettings(type, value) {
        return useAsyncData('update-email-notification-settings', () =>
            client(`${defaultEndpoint}/email-notification-settings`, {
                method: 'PUT',
                body: JSON.stringify({ type, value }),
            })
        );
    }

    async function updateAppNotificationSettings(type, value) {
        return useAsyncData('update-app-notification-settings', () =>
            client(`${defaultEndpoint}/app-notification-settings`, {
                method: 'PUT',
                body: JSON.stringify({ type, value }),
            })
        );
    }

    function getEmailNotificationSettings() {
        return client(`${defaultEndpoint}/email-notification-settings`);
    }

    
    function getAppNotificationSettings() {
        return client(`${defaultEndpoint}/app-notification-settings`)
    }


    return {
        login,
        logout,
        forgotPassword,
        resetPassword,
        updateUser,
        confirmCurrentPassword,
        updatePassword,
        updateEmailNotificationSettings,
        updateAppNotificationSettings,
        getEmailNotificationSettings,
        getAppNotificationSettings,
        user,
    }
}