<template>
    <aside class="2xl:flex flex-col h-full justify-between w-72 bg-section shadow hidden p-8">
        <div>
            <NuxtLink to="/" class="flex items-center ">
                <Favicon width="50px" height="50px"/>
                <h1 class="m-0 ml-4">{{ config.public.appName }}</h1>
            </NuxtLink>
            <nav>
                <ul class="flex flex-col items-stretch">                        
                    <li v-for="item in menu" :key="item.name">
                        <NuxtLink :to="item.route" class="flex items-center p-4 gap-2">
                            <font-awesome-icon :icon="item.icon"/>
                            <span>{{ item.name }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div>
            <footer class="menu-text">
                <p><small>Version: {{ config.public.version }}</small></p>
                <p><small>&copy; {{ new Date().getFullYear() }} {{ config.public.appName }}</small></p>
            </footer>
        </div>
        
    </aside>
</template>

<script setup>
    const config = useRuntimeConfig()
    import { faHouse, faGear, faUser, faFileInvoice, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons'

    const menu = [
        {name: 'Fragt', icon: faHouse, route: '/plucklist/freight'},
        {name: 'Tur', icon: faGear, route: '/plucklist/internal'},
        {name: 'Menu 3', icon: faUser, route: '/'},
        {name: 'Menu 4', icon: faFileInvoice, route: '/'}
    ];

</script>