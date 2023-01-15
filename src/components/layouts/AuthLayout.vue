<template>
    <div class="container mx-auto">
        <div class="flex gap-4">
            <aside class="w-1/4">
                <ProfileSideBar/>
            </aside>
            <div class="w-3/4">
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