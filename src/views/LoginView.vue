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
            :server-side-errors="(serverErrors.length > 0 && serverErrors[0].username) ? serverErrors[0].username : []"
          />
        </div>
        <div>
          <BaseInput
            label="Password"
            placeholder="Enter password"
            type="password"
            v-model.trim="v$.formData.password.$model"
            :client-side-errors="v$.formData.password"
            :server-side-errors="(serverErrors.length > 0 && serverErrors[0].password) ? serverErrors[0].password : []"
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
      },
      serverErrors: []
    }
  },
  validations() {
    return {
      formData: {
        username: {
          required: helpers.withMessage("Username cannot be empty", required),
          minLength: minLength(4),
        },
        password: {
          required: helpers.withMessage("Password cannot be empty", required),
          minLength: minLength(4),
        },
      },
    };
  },
  methods: {
    async login(){
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      try {
        const userResponse = await this.axios.post( "/jwt-auth/v1/token", this.formData );
        if(userResponse.status === 200){
          this.axios.defaults.headers.common["Authorization"] = `Bearer ${userResponse.data.token}`; // add axios header auth token
          
          const profileResponse = await this.axios.get( "/wp/v2/users/me" );
          if(profileResponse.status === 200){
            localStorage.setItem("token", JSON.stringify(userResponse.data.token)); // save on localstorage
            const userInfo = {
              token: userResponse.data.token,
              profile: profileResponse.data
            }
            this.$store.dispatch("SET_LOGGED_IN_USER", userInfo);// save user info to vuex
            this.$router.push({name: 'home'});
            this.$toast.success("You are successfully logged in."); // Success notification
          }else{
            this.$toast.error("Login failed. Please try again later."); // Error notification
          }
        }else{
          this.$toast.error("Login failed. Please try again later."); // Error notification
        }
        this.serverErrors = [];
      } catch (error) {
        if(error.response.data.data.status === 403 && error.response.data.code === "[jwt_auth] empty_username"){
          this.serverErrors[0] = {'username': "Username can not be empty"};
        }else if(error.response.data.data.status === 403 && error.response.data.code === "[jwt_auth] empty_password"){
          this.serverErrors[0] = ({'password': "Password can not be empty"});
        }else if(error.response.data.data.status === 403 && error.response.data.code === "[jwt_auth] invalid_username"){
          this.serverErrors[0] = ({'username': "Invalid username"});
        }else if(error.response.data.data.status === 403 && error.response.data.code === "[jwt_auth] incorrect_password"){
          this.serverErrors[0] = ({'password': "Incorrect password"});
        }else{
          this.serverErrors = [];
          this.$toast.error("Login failed. Please try again later.");
        }
      }
    }
  }
}
</script>
