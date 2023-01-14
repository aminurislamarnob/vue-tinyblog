<template>
    <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600" alt="Your Company">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>