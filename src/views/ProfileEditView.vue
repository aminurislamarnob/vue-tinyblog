<template>
    <div class="bg-slate-100 py-16"></div>
    <div class="container mb-16">
        <div v-if="isLoggedIn" class="rounded-lg bg-white px-6 py-6 border border-slate-200 relative -mt-12">
           
  <div>
    <form class="bg-white p-6 rounded-lg">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="name">
          Name
        </label>
        <input
          v-model="form.name"
          class="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="name"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="email">
          Email
        </label>
        <input
          v-model="form.email"
          class="w-full border border-gray-400 p-2 rounded-lg"
          type="email"
          id="email"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="phone_number">
          Phone Number
        </label>
        <input
          v-model="form.phone_number"
          class="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="phone_number"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <button class="" @click="submitForm">
          Update Profile
        </button>
      </div>
    </form>
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
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone_number: ''
      }
    }
  },
  methods: {
    async logout(){
      // Logout
      localStorage.removeItem("token");
      location.reload();
    },
    submitForm() {
      // Add your code here to submit the form data
      // to your server using an HTTP request
    }
  }
}
</script>