<template>
    <article>
        <table>
            <thead>
                <tr>
                    <th>Fragtfirma</th>
                    <th>Ordre Dato</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="freight in freightList" :key="freight.id">
                    <td>
                        <NuxtLink :to="`/plucklist/freight/${freight.id}`">
                            {{ freight.carrier }}
                        </NuxtLink>
                    </td>
                    <td>
                        <NuxtLink :to="`/plucklist/freight/${freight.id}`">
                            {{ freight.orderDate }}
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </article>
</template>

<script setup>
    definePageMeta({
        title: 'Fragt liste',
        metaTitle: 'Fragt liste',
    })


    const freightList = [
        {
            id: 1,
            carrier: 'Danske Fragtmænd',
            orderDate: '2022-01-01',
        },
        {
            id: 1,
            carrier: 'GLS',
            orderDate: '2022-01-02',
        },
        {
            id: 1,
            carrier: 'Danske Fragtmænd',
            orderDate: '2022-01-03',
        },
        {
            id: 1,
            carrier: 'GLS',
            orderDate: '2022-01-04',
        },
        {
            id: 1,
            carrier: 'GLS',
            orderDate: '2022-01-05',
        },
    ]
</script>