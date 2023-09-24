

<template  >
  <div class="template-mayor">

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
            <router-link to="/share-tenant"> <pv-button id="btnrouter">BUSCAR AUTOS</pv-button> </router-link>
            <router-link to="/maintenance-tenant"> <pv-button id="btnrouter">MANTENIMIENTO</pv-button> </router-link>
            <router-link to="/rent-tenant"> <pv-button id="btnrouter">ALQUILER</pv-button> </router-link>
            <router-link to="/requests-tenant"> <pv-button id="btnrouter">SOLICITUDES</pv-button> </router-link>
          </div>

        </template>
      </pv-toolbar>

    </div>

    <br>
    <div id="titulo-seccion">
      <label >Pago de Alquiler</label>
    </div>

    <div class="card">
      <pv-card class="p-cardcontent" >

        <template #title>
          Datos de Alquiler:
        </template>

        <template #content>
          <p class="text-content">
            Precio de Alquiler:  <br>
            Tiempo de Alquiler: <br>
            Fecha de inicio de contrato: <br>
            Fecha de fin de contrato:<br>
            Lugar de recojo y entrega de vehículo:
          </p>
          <pv-images src="https://i.postimg.cc/Xqj4zfvb/RT-V-0c7166c16ff74073b65851f7f0b360ed.jpg"  width="400" />
        </template>
      </pv-card>
    </div><br><br>
    <div class="footerpag">
      <div id="titulo-footer">
        <label >El dia del inicio del contrato  debera ir a recojer el vehículo
          y además debera efectuar el pago de manera personal </label>
      </div>
      <br><br>
<label style="margin-left: 60px;font-family: 'Poppins',sans-serif;margin-right: 60px">Indicar hora del recojo del vehiculo: </label><br><br>
    <pv-inputtext type="text" v-model="hour" style="margin-right: 60px;margin-left: 60px"/>
    <pv-button label="Confirmar fecha de alquiler" style="justify-content: flex-end;background-color: #40019A"/><br><br><br><br><br>


</div>





  </div>
</template>




<script>


import UseApiService from "@/services/use-api-services";


export default {
  name: "cash-payment",


  data() {
    return {
      hour: "",
      useApiService: new UseApiService(),
    };
  },
};

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');


.toolbar-1{
  background-color: #D9D9D9;
  padding:9px;
  border: none;
}
#titulo-seccion{
  font-size: 35px;
  font-family: 'Poppins',sans-serif;
  color:#14131B;
  margin-left:20px;
  font-weight: bold;
}

.control{
  display:inline-block;
}
#btnrouter{
  margin-left: 10px;
  margin-right:10px;
  width: 160px;
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
.card{
  display: flex;
  -webkit-justify-content: center;
}
.p-cardcontent{
  box-shadow: 3px 4px 4px #14131B;
  -webkit-justify-content:flex-start;
  width: 90em;
  height: 30em;
  background-color: whitesmoke;
  align-content: flex-start;
  display: flex;

}
.text-content{
  font-size: 30px;
  display:inline-block;
  margin-right: 100px;
}
#titulo-footer{
  font-size: 20px;
  font-family: 'Poppins',sans-serif;
  color:#14131B;
  margin-left:20px;
  text-align: center;
  margin-right: 20px;

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
  #titulo-seccion{
    font-size: 30px;
  }
  .p-cardcontent{
    width: 40em;height: 50em;
  }

}

</style>
