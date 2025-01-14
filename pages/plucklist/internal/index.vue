<template>
    <article>
        <table>
            <thead>
                <tr>
                    <th>Tur</th>
                    <th>Færdig</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ship in shipping" :key="ship.id">
                    <td>
                        <NuxtLink :to="`/plucklist/internal/${ship.id}`">
                            {{ ship.name }}
                        </NuxtLink>
                    </td>
                    <td>
                        <NuxtLink :to="`/plucklist/internal/${ship.id}`">
                            {{ ship.done }}
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </article>
</template>

<script setup>
    definePageMeta({
        title: 'Alle ture',
        metaTitle: 'Alle ture',
    })

    const shipping = [
        {
            id: 1,
            name: 'Sjælland 01/10-25',
            done: true
        },
        {
            id: 1,
            name: 'Jylland 01/10-25',
            done: false
        },
        {
            id: 1,
            name: 'Fyn 01/10-25',
            done: false
        }
    ]
</script>