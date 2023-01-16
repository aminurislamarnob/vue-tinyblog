<template>
    <AuthLayout>
        <template v-slot:breadcrumb>
            <div class="bg-slate-100 py-16">
                <div class="container mx-auto">
                    <h1 class="text-center text-4xl">My Profile</h1>
                </div>
            </div>
        </template>
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