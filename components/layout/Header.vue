<template>
    <header class="px-8 2xl:p-8 2xl:bg-transparent bg-section shadow 2xl:shadow-none">
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
                    <LayoutProfileDropdown/>
                </li>
                <li class="md:hidden">
                    <NuxtLink to="/">
                        <font-awesome-icon :icon="faBars"/>
                    </NuxtLink>
                </li>
            </ul>
            
        </nav>
    </header>
</template>

<script setup>
    const route = useRoute();
    import { faBars } from '@fortawesome/free-solid-svg-icons'
    const menu = [
        {name: 'Fragt', route: '/plucklist/freight'},
        {name: 'Tur', route: '/plucklist/internal'},
        {name: 'Menu 3', route: '/'},
        {name: 'Menu 4', route: '/'}
    ];
</script>