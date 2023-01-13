<template>
  <HeaderPart/>
  <div class="page-wrapper">
    <RouterView />
  </div>
  <SiteFooter/>
</template>

<script>
import HeaderPart from './components/partials/SiteHeader.vue'
import SiteFooter from "@/components/partials/SiteFooter.vue";
export default {
  components: {
    SiteFooter,
    HeaderPart
  }
}
</script>
