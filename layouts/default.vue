<template>
    <div class="flex h-screen overflow-hidden">
        <aside class="2xl:flex flex-col h-full justify-between w-72 bg-section shadow hidden">
            <div>
                <div class="flex items-center p-8">
                    <Favicon width="50px" height="50px"/>
                    <h1 class="m-0 ml-4">{{ config.public.appName }}</h1>
                </div>
                <nav>
                    <ul class="flex flex-col items-stretch text-center">                        
                        <li v-for="item in menu" :key="item.name">
                            <NuxtLink :to="item.route" class="flex items-center justify-center p-4 gap-2">
                                <font-awesome-icon :icon="item.icon"/>
                                <span>{{ item.name }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <font-awesome-icon class="app-info-icon" :icon="faInfoCircle" />
                <footer class="menu-text">
                    <p><small>Version: {{ config.public.version }}</small></p>
                    <p><small>&copy; {{ new Date().getFullYear() }} {{ config.public.appName }}</small></p>
                </footer>
            </div>
            
        </aside>

        <div class="flex-1 min-h-full overflow-auto bg-background">
            <header class="p-8 2xl:bg-transparent bg-menu-bg">
                <nav>
                    <ul>
                        <li>
                            <h1>{{ route.meta.title ?? route.name }}</h1>
                        </li>
                    </ul>

                    <ul class=" hidden md:flex 2xl:hidden">
                        <li v-for="item in menu" :key="item.name">
                            <NuxtLink :to="item.route">
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Themeswitch/>
                        </li>
                        <li>
                            <details class="dropdown user-dropdown">
                                <summary class="user-wrap">
                                    <div class="user-img">MM</div>
                                    {{ user.name }}
                                </summary>
                                <ul dir="rtl">

                                <li dir="ltr">
                                </li>

                                <li class="seperator"><hr></li>
                                <li role="link" @click="logout">Log ud</li>
                                </ul>
                            </details>
                        </li>
                        <li class="md:hidden">
                            <NuxtLink to="/">
                                <font-awesome-icon :icon="faBars"/>
                            </NuxtLink>
                        </li>
                    </ul>
                    
                </nav>
            </header>

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
