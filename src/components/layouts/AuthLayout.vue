<template>
    <slot name="breadcrumb"></slot>
    <div class="container mx-auto">
        <div class="flex gap-6 py-16">
            <aside class="w-1/5">
                <ProfileSideBar/>
            </aside>
            <div class="w-4/5">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
import ProfileSideBar from '../partials/ProfileSideBar.vue'
export default {
    components: {ProfileSideBar}
}
</script>