<script setup>
import VLazyImage from "v-lazy-image";
</script>

<template >
  <div class="card">
  <pv-toolbar class=" toolbar-1 text-white font-bold m-0 flex flex-wrap " role="navigation" aria-label="Toolbar">
    <template #start >
      <pv-images src="https://i.postimg.cc/rF47Qr56/ai-de-logo-Mesa-de-trabajo-1.png" alt="logo" width="100"/>
    </template>
  </pv-toolbar >

    <div class="card flex justify-content-center">
      <v-lazy-image src="https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg" />
<!--      <pv-images src="https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg" alt="Image" width="1000" />-->
    </div>

  </div>



</template>

<style scoped>

.toolbar-1{
  background-color: #14131B;
  padding:9px;
}

</style>
