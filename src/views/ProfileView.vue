<template>
    <AuthLayout>
        <template v-slot:content>
            {{ $store.state.user }}
        </template>
    </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/layouts/AuthLayout.vue'
export default {
    components: {AuthLayout}
}
</script>