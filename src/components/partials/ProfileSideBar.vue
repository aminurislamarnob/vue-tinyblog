<template>
    <ul class="py-4 shadow-lg bg-white rounded-md transition-all duration-300 space-y-1">
        <li class="block rounded-lg py-2 px-4 transition duration-300 text-gray-900 hover:bg-gray-400/10"><router-link :to="{name: 'myprofile'}" class="block">My Profile</router-link></li>
        <li class="block rounded-lg py-2 px-4 transition duration-300 text-gray-900 hover:bg-gray-400/10"><router-link to="#" class="block">Edit Profile</router-link></li>
        <li class="block rounded-lg py-2 px-4 transition duration-300 text-gray-900 hover:bg-gray-400/10"><router-link to="#" class="block">My Posts</router-link></li>
        <li class="block rounded-lg py-2 px-4 transition duration-300 text-gray-900 hover:bg-gray-400/10"><router-link to="#" class="block">Add New Posts</router-link></li>
        <li class="block rounded-lg py-2 px-4 transition duration-300 text-gray-900 hover:bg-gray-400/10"><router-link to="#" class="block">Change Password</router-link></li>
        <li class="block rounded-lg py-2 px-4 transition duration-300 text-gray-900 hover:bg-gray-400/10"><button @click.prevent="logout">Log Out</button></li> 
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>