

<template  >
  <div class="template-mayor">
    <toolbar-bar></toolbar-bar>
    <br>
    <div id="titulo-seccion">
      <label >ALQUILER</label>
    </div>
    <div style="text-align: end ">
      <label style="font-family: 'Poppins',sans-serif;">Agiliza tus pago afiliando tu cuenta  de banco con MODO </label><br>
      <router-link to="/.."><pv-button   label="Afiliar Cuenta con MODO" style="background-color: #40019A;font-family: 'Poppins',sans-serif;box-shadow: none" /></router-link><br>
    </div>

    <div class="card">
      <pv-card class="p-cardcontent" >
        <template #content>
          <router-link to="/.."><pv-button  id="btnprimary" label="AGREGAR AUTO"  /></router-link>
        </template>
      </pv-card>
    </div>
  </div>
</template>




<script>


import UseApiService from "@/services/use-api-services";
import ToolbarBar from "@/components/toolbar/toolbar-bar-owner-component.vue";


export default {
  name: "rent-owner-major",
  components: {ToolbarBar},

  data() {
    return {
      email: "",
      password: "",
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
.card{
  display: flex;
}
.p-cardcontent{
  background-color: whitesmoke;
  box-shadow: 3px 4px 4px #14131B;
  -webkit-justify-content: center;
  width: 30em;
  height: 33em;
  align-content: flex-start;
  display: flex;
}

#btnprimary{
  background-color: #40019A;
  color: white;
  box-shadow: transparent;
  border: none;
  margin-top: 150px;
  align-content: center;
}
#btnprimary:hover{
  background-color:#310077;
}
@media all and (max-width: 840px) {
  #titulo-seccion{
    font-size: 30px;
  }
  .p-cardcontent{
    width: 20em;height: 30em;
  }
  #btnprimary{
    background-color: #40019A;
    color: white;
    box-shadow: transparent;
    border: transparent;
    width: 20em;
    font-size: 10px;
    height: 2.5em;
  }
}

</style>
