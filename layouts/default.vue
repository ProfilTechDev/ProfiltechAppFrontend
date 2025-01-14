<template>
    <div class="flex h-screen overflow-hidden">
        <LayoutSidebar/>

        <div class="flex-1 min-h-full overflow-auto bg-background">
            <LayoutHeader/>

            <main class="p-8">
                <slot/>
            </main>
        </div>
        
        <Toasts/>
    </div>
</template>

<script setup>
    import { faHouse, faGear, faUser, faFileInvoice, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons'

    const route = useRoute()
    const config = useRuntimeConfig()
    const { isLoggedIn, user, logout } = useUser()
    const menu = [
        {name: 'Fragt', icon: faHouse, route: '/plucklist/freight'},
        {name: 'Tur', icon: faGear, route: '/plucklist/internal'},
        {name: 'Menu 3', icon: faUser, route: '/'},
        {name: 'Menu 4', icon: faFileInvoice, route: '/'}
    ];


    useHead({
        title: config.public.appName + ' - ' + (route.meta.metaTitle ?? route.name),
    })
</script>
