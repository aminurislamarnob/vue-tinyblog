<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 min-h-[calc(100vh-10.5rem)]">
    <div class="w-full max-w-md space-y-8 bg-white px-8 py-10 rounded-lg">
      <AuthFormHeader
        title="Login Now"
      />
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div>
          <BaseInput
            label="Username"
            placeholder="Enter your username"
            type="text"
            v-model.trim="v$.formData.username.$model"
            :client-side-errors="v$.formData.username"
          />
        </div>
        <div>
          <BaseInput
            label="Password"
            placeholder="Enter password"
            type="password"
            v-model.trim="v$.formData.password.$model"
            :client-side-errors="v$.formData.password"
          />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Checkbox 
              label="Remember me" 
              v-model="formData.rememberMe"
            />
          </div>
          <div class="text-sm">
            <router-link to="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</router-link>
          </div>
        </div>
        <div>
          <SubmitButton 
            label="Login"
          />
          <div class="block text-center my-2 text-gray-500 text-sm">Don't have any account? <router-link :to="{name: 'register'}" class=" text-primary-green">Register Now</router-link></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//validation
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

//Import Components
import BaseInput from "@/components/fields/BaseInput.vue"
import AuthFormHeader from "../components/auth/AuthFormHeader.vue";
import Checkbox from '../components/fields/Checkbox.vue'
import SubmitButton from "../components/fields/SubmitButton.vue";

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  components: { BaseInput, Checkbox, SubmitButton, AuthFormHeader },
  data(){
    return{
      formData: {
        username: "",
        password: "",
        rememberMe: false
      }
    }
  },
  validations() {
    return {
      formData: {
        username: {
          required: helpers.withMessage("Username cannot be empty", required),
          minLength: minLength(6),
        },
        password: {
          required: helpers.withMessage("Password cannot be empty", required),
          minLength: minLength(6),
        },
      },
    };
  },
  methods: {
    async login(){
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      try {
        const response = await this.axios.post( "/jwt-auth/v1/token", this.formData );
        console.log(response)
      } catch (error) {
        
      }
    }
  }
}
</script>
