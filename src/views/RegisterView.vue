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
            v-model.trim="v$.formData.name.$model"
            :client-side-errors="v$.formData.name"
            :server-side-errors="(serverErrors.length > 0 && serverErrors[0].name) ? serverErrors[0].name : []"
          />
        </div>
        <div>
          <BaseInput
            label="Username"
            placeholder="Username"
            type="text"
            v-model.trim="v$.formData.username.$model"
            :client-side-errors="v$.formData.username"
            :server-side-errors="(serverErrors.length > 0 && serverErrors[0].username) ? serverErrors[0].username : []"
          />
        </div>
        <div>
          <BaseInput
            label="Email address"
            placeholder="Your email address"
            type="email"
            v-model.trim="v$.formData.email.$model"
            :client-side-errors="v$.formData.email"
            :server-side-errors="(serverErrors.length > 0 && serverErrors[0].email) ? serverErrors[0].email : []"
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
        <div>
          <BaseInput
            label="Confirm Password"
            placeholder="Again enter same password"
            type="password"
            v-model.trim="v$.formData.cpassword.$model"
            :client-side-errors="v$.formData.cpassword"
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
//validation
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, sameAs, helpers } from '@vuelidate/validators'

//Import Components
import BaseInput from "@/components/fields/BaseInput.vue"
import AuthFormHeader from "../components/auth/AuthFormHeader.vue"
import SubmitButton from "../components/fields/SubmitButton.vue";

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  components: { AuthFormHeader, SubmitButton, BaseInput },
  data(){
    return{
      formData: {
        name: "",
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
      serverErrors: []
    }
  },
  validations() {
    return {
      formData: {
        name: {
          required: helpers.withMessage("Name cannot be empty", required),
          minLength: minLength(4),
        },
        username: {
          required: helpers.withMessage("Username cannot be empty", required),
          minLength: minLength(5),
        },
        email: {
          required: helpers.withMessage("Email cannot be empty", required),
          email
        },
        password: {
          required: helpers.withMessage("Password cannot be empty", required),
          minLength: minLength(8),
        },
        cpassword: {
          required: helpers.withMessage("Confirm Password cannot be empty", required),
          minLength: minLength(8),
          sameAs: sameAs(this.formData.password)
        },
      },
    };
  },
  methods: {
    async register(){
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      try {
        const response = await this.axios.post( "/wp/v2/users/register", this.formData );
        if(response.status === 201){
          this.$toast.success("You are successfully registered."); // Success notification
          this.$router.push({name: 'home'});
        }else{
            this.$toast.error("Registration failed. Please try again later."); // Error notification
        }
      } catch (error) {
        if(error.response.status === 500 && error.response.data.code === "existing_user_login"){
          this.serverErrors[0] = {'username': "Sorry, that username already exists!"};
        }else if(error.response.status === 500 && error.response.data.code === "existing_user_email"){
          this.serverErrors[0] = {'email': "Sorry, that email address is already used!"};
        }else if(error.response.status === 400 && error.response.data.code === "rest_invalid_param"){
          this.serverErrors[0] = error.response.data.data.params;
        }else{
          this.$toast.error("Registration failed. Please try again later."); // Error notification
        }
      }
    }
  }
}
</script>