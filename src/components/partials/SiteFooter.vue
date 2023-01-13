<template>
  <div class="text-center bg-gray-50 px-4 py-8 text-sm text-gray-500">
    <p>Copyright &copy; {{getCurrentYear}} <a href="https://aiarnob.com" target="_blank" class="text-primary-green">Md. Aminur Islam Arnob</a></p>
  </div>
</template>

<script>
export default {
  computed: {
    getCurrentYear(){
      const todayDate = new Date();
      return todayDate.getFullYear();
    }
  },
}
</script>
