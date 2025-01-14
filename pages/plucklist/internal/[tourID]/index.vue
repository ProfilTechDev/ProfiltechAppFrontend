<template>
    <article>
        <table>
            <thead>
                <tr>
                    <th>Stop</th>
                    <th>Færdig</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stop in stops" :key="stop.id">
                    <td>
                        <NuxtLink :to="`/plucklist/internal/${route.params.tourID}/${stop.id}`">
                            {{ stop.name }}
                        </NuxtLink>
                    </td>
                    <td>
                        <NuxtLink :to="`/plucklist/internal/${route.params.tourID}/${stop.id}`">
                            {{ stop.done }}
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </article>
</template>

<script setup>
    const route = useRoute();
    definePageMeta({
        title: 'Stop på tur',
        metaTitle: 'Stop på tur',
    })

    const stops = [
        {
            id: 1,
            name: '1',
            done: true
        },
        {
            id: 1,
            name: '1A',
            done: false
        },
        {
            id: 1,
            name: '2',
            done: false
        }
    ]
</script>