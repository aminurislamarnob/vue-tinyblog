<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 min-h-[calc(100vh-10.5rem)]">
    <div class="w-full max-w-md space-y-8 bg-white px-8 py-10 rounded-lg">
      <AuthFormHeader
        title="Register Now"
      />
      <form class="mt-8 space-y-6" @submit.prevent="register">
        <div>
          <BaseInput
            label="Name"
            placeholder="Your fullname"
            type="text"
            v-model.trim="formData.name"
          />
        </div>
        <div>
          <BaseInput
            label="Username"
            placeholder="Username"
            type="text"
            v-model.trim="formData.username"
          />
        </div>
        <div>
          <BaseInput
            label="Email address"
            placeholder="Your email address"
            type="email"
            v-model.trim="formData.email"
          />
        </div>
        <div>
          <BaseInput
            label="Password"
            placeholder="Enter password"
            type="password"
            v-model.trim="formData.password"
          />
        </div>
        <div>
          <BaseInput
            label="Confirm Password"
            placeholder="Again enter same password"
            type="password"
            v-model.trim="formData.cpassword"
          />
        </div>
        <div>
          <SubmitButton 
            label="Register"
          />
          <div class="block text-center my-2 text-gray-500 text-sm">Already have an account? <router-link :to="{name: 'login'}" class=" text-primary-green">Login</router-link></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/fields/BaseInput.vue"
import AuthFormHeader from "../components/auth/AuthFormHeader.vue"
import SubmitButton from "../components/fields/SubmitButton.vue";

export default {
  components: { AuthFormHeader, SubmitButton, BaseInput },
  data(){
    return{
      formData: {
        name: "",
        username: "",
        email: "",
        password: "",
        cpassword: "",
      }
    }
  },
  methods: {
    async register(){
      try {
        const response = await this.axios.post( "/wp/v2/users/register", this.formData );
        console.log(response)
      } catch (error) {
        
      }
    }
  }
}
</script>