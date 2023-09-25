
<!--ESTOY MODIFICANDO ESTA PARTE -ERICKRUIZ-->
<template  >
  <div class="template-mayor">
    <toolbar-bar></toolbar-bar>
    <br>
    <div id="titulo-seccion">
      <label >ALQUILER</label>
    </div>
    <div style="text-align: end ">
      <label style="font-family: 'Poppins',sans-serif;">Encuentra todas las solisitudes disponibles </label><br>
    </div>
    <pv-message :closable="false" icon="pi pi-send" style="color: #14131B;font-family: 'Poppins',sans-serif;background-color: whitesmoke" >Piero Torres Arias envio una solicitud de alquiler del
      vehículo Toyota Prius &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/profile-request"> <a  style="color: #40019A;text-decoration: none;font-weight: bold;display:inline-block;">Ver Solicitud</a></router-link>
    </pv-message>
    <pv-message :closable="false" icon="pi pi-send" style="color: #14131B;font-family: 'Poppins',sans-serif;background-color: whitesmoke" >Jorge Paredes Cano  envio una solicitud de alquiler del
      vehículo Toyota Prius   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/profile-request"> <a  style="color: #40019A;text-decoration: none;font-weight: bold;display:inline-block;">Ver Solicitud</a></router-link>
    </pv-message>
  </div>
</template>




<script>


import UseApiService from "@/services/use-api-services";
import ToolbarBar from "@/components/rent/rent-owner/toolbar-bar-owner.vue";


export default {
  name: "profile-request",
  components: {ToolbarBar},


  data() {
    return {

      useApiService: new UseApiService(),
    };
  },
};

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
#titulo-seccion{
  font-size: 40px;
  font-family: 'Poppins',sans-serif;
  color:#40019A;
  margin-left:20px;
  font-weight: bold;
  display:inline-block;
}
@media all and (max-width: 840px) {
  #titulo-seccion{
    font-size: 30px;
  }
}

</style>
