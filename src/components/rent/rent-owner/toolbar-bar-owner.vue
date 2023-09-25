<script >
export default {
  name: "toolbar-bar",
}
</script>

<template>
  <div class="toolbar-1">
  <pv-toolbar  class="toolbar-1 mx-auto">
    <template #start>
      <div class="imglogo">
        <pv-images src="https://i.postimg.cc/8Cdxqmbc/ai-de-logwww-Mesa-de-trabajo-1.png" alt="logo" width="100"/>
      </div>
    </template>
    <template #end>
      <div class="control">
        <router-link to="/main-page-tenant"> <pv-button  id="btnrouter">INICIO</pv-button> </router-link>
        <router-link to="/vehicle-registration-owner"> <pv-button id="btnrouter">REGISTRO VEHICULAR</pv-button> </router-link>
        <router-link to="/notification-owner"> <pv-button id="btnrouter">NOTIFICACIONES</pv-button> </router-link>
        <router-link to="/rent-owner"> <pv-button id="btnrouter">ALQUILER</pv-button> </router-link>
        <router-link to="/perfil-owner"> <a><pv-images id="btnrouter" src="https://i.postimg.cc/FFqf7CRJ/usuario-1.png" alt="logo" width="40"/></a> </router-link>

      </div>

    </template>
  </pv-toolbar>
  </div>
</template>

<style scoped>
.toolbar-1{
  background-color: #D9D9D9;
  padding:9px;
  border: none;
}
.control{
  display:inline-block;
}
#btnrouter{
  margin-left: 10px;
  margin-right:10px;
  width: 200px;
  justify-content: center;
  background-color: whitesmoke ;
  color:#14131B;border:none;
  box-shadow: #14131B;
  font-weight: bold;
}
#btnrouter:hover{
  background-color:#14131B;
  box-shadow: none;
  font-weight: bold;
  color:white;
}
#btnrouter:focus{
  color:#40019A;
  box-shadow: none;
  font-weight: bold;
}
@media all and (max-width: 840px) {
  .imglogo{
    place-content: center;
  }
  .control{
    display:block;
    float:none;
    align-content: center;
    text-align: center;
  }
}
</style>
