<template>
    <div class="bg-slate-100 py-16"></div>
    <div class="container mb-16">
        <div v-if="isLoggedIn" class="rounded-lg bg-white px-6 py-6 border border-slate-200 relative -mt-12">
            <div class="border-8 border-slate-100 inline-block  w-24 h-24 rounded-full absolute -top-12 left-1/2 -translate-x-1/2">
                <img :src="getLoggedInUser.profile.avatar_urls[96]" :alt="getLoggedInUser.profile.display_name" class="rounded-full">
            </div>
            <div class="text-center pt-12">
                <h1 class="capitalize text-3xl mb-3">{{ getLoggedInUser.profile.display_name }}</h1>
                <p v-if="getLoggedInUser.profile.description" class="w-2/3 mx-auto text-gray-600" v-html="getLoggedInUser.profile.description"></p>
                <ul class="flex items-center justify-center gap-10 text-gray-500 mt-5">
                    <li v-if="getLoggedInUser.profile.user_registered" class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                        </svg>
                        <span>Joined on {{ getLoggedInUser.profile.user_registered }}</span>
                    </li>
                    <li v-if="getLoggedInUser.profile.user_email">
                        <a class="flex items-center gap-2" :href="`mailto:${getLoggedInUser.profile.user_email}`">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span>{{ getLoggedInUser.profile.user_email }}</span>    
                        </a>
                    </li>
                    <li v-if="getLoggedInUser.profile.url">
                        <a class="flex items-center gap-2" :href="getLoggedInUser.profile.url" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            <span>{{ getLoggedInUser.profile.url }}</span>
                        </a>
                    </li>
                </ul>
                <div class="flex justify-center gap-24 text-gray-600 mt-8 border-t pt-8 pb-5 border-slate-200">
                    <div>
                        <span class="text-sm text-gray-500">Education</span>
                        <div v-if="getLoggedInUser.profile.acf && getLoggedInUser.profile.acf.education">{{ getLoggedInUser.profile.acf.education }}</div>
                    </div>
                    <div>
                        <span class="text-sm text-gray-500">Work</span>
                        <div v-if="getLoggedInUser.profile.acf && getLoggedInUser.profile.acf.work">{{ getLoggedInUser.profile.acf.work }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex justify-between mt-10 mb-5 items-center">
                <h2 class="text-3xl">Your Latest Posts</h2>
                <router-link to="#" class="uppercase flex text-gray-500 gap-2 text-sm transition hover:text-primary-green">
                    <span>View All Posts</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </router-link>
            </div>
            <div class="rounded-lg bg-white px-6 py-6 border border-slate-200 mb-4">
                <h2 class="text-2xl mb-1"><a href="#" class=" transition hover:text-primary-green">Nuxt.js Data Fetching Hook: Async Data.</a></h2>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur debitis aliquid nihil et, numquam dolorum quis eveniet laudantium accusantium soluta. Maxime cum non excepturi a deleniti eius fugit suscipit nam.</p>
                <div class="space-x-3 mt-2 mb-3 text-gray-500">
                    <a href="#">#vue</a>
                    <a href="#">#javascript</a>
                </div>
                <div class="flex justify-between text-gray-500">
                    <div class="flex gap-10">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span>12 reactions</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            <span>2 comments</span>
                        </div>
                    </div>
                    <span>2 min read</span>
                </div>
            </div>
            <div class="rounded-lg bg-white px-6 py-6 border border-slate-200 mb-4">
                <h2 class="text-2xl mb-1"><a href="#" class=" transition hover:text-primary-green">Nuxt.js Data Fetching Hook: Async Data.</a></h2>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur debitis aliquid nihil et, numquam dolorum quis eveniet laudantium accusantium soluta. Maxime cum non excepturi a deleniti eius fugit suscipit nam.</p>
                <div class="space-x-3 mt-2 mb-3 text-gray-500">
                    <a href="#">#vue</a>
                    <a href="#">#javascript</a>
                </div>
                <div class="flex justify-between text-gray-500">
                    <div class="flex gap-10">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span>12 reactions</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            <span>2 comments</span>
                        </div>
                    </div>
                    <span>2 min read</span>
                </div>
            </div>
            <div class="rounded-lg bg-white px-6 py-6 border border-slate-200 mb-4">
                <h2 class="text-2xl mb-1"><a href="#" class=" transition hover:text-primary-green">Nuxt.js Data Fetching Hook: Async Data.</a></h2>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur debitis aliquid nihil et, numquam dolorum quis eveniet laudantium accusantium soluta. Maxime cum non excepturi a deleniti eius fugit suscipit nam.</p>
                <div class="space-x-3 mt-2 mb-3 text-gray-500">
                    <a href="#">#vue</a>
                    <a href="#">#javascript</a>
                </div>
                <div class="flex justify-between text-gray-500">
                    <div class="flex gap-10">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span>12 reactions</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            <span>2 comments</span>
                        </div>
                    </div>
                    <span>2 min read</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//Vuex Store
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isLoggedIn', 'getLoggedInUser'
    ])
  },
  methods: {
    async logout(){
      // Logout
      localStorage.removeItem("token");
      location.reload();
    }
  }
}
</script>