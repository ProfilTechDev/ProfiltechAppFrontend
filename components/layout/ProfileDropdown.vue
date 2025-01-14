<template>
    <DropdownMenu>
        <DropdownMenuTrigger class="!bg-transparent !border-0">
            <div class="flex items-center gap-2 text-base">
                <span class="bg-primary flex rounded-full h-[2.3rem] w-[2.3rem] font-bold text-white items-center justify-center !text-default-color">
                    MM
                </span>
                <span class="hidden lg:block">{{ user.name }}</span>
                <font-awesome-icon :icon="faChevronDown" class="!w-3 hidden lg:block"/>
            </div>
            
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Indstillinger</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <NuxtLink to="/settings/profile" class="flex items-center gap-2 hover:text-primary">
                    <font-awesome-icon :icon="faUser" class="!w-3"/>
                    Min profil
                </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <NuxtLink to="/settings/notifications" class="flex items-center gap-2 hover:text-primary">
                    <font-awesome-icon :icon="faBell" class="!w-3"/>
                    Notifikationer
                </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <NuxtLink to="/settings/billing" class="flex items-center gap-2 hover:text-primary">
                    <font-awesome-icon :icon="faFileInvoiceDollar" class="!w-3"/>
                    Faktuering
                </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="logout" class="cursor-pointer hover:text-primary">
                <font-awesome-icon :icon="faArrowRightFromBracket" class="!w-3"/>
                Log ud
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup>
    import { faChevronDown, faArrowRightFromBracket, faFileInvoiceDollar, faUser, faBell  } from '@fortawesome/free-solid-svg-icons'
    const { user, logout } = useUser()
</script>