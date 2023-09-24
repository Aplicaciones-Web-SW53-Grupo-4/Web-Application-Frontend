

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

<!--    formulario de pago-->
    <div id="titulo-header">
      <label >Completa tus datos</label>
    </div><br>

    <div class="cardform">
      <pv-card class="p-cardcontentform"  >
        <template #header>
          <br><br>
          <pv-images src="https://i.postimg.cc/8Cdxqmbc/ai-de-logwww-Mesa-de-trabajo-1.png" alt="logo" width="100"/>
        </template>

        <template #content>

          <div class="inputpform flex justify-content-center">
            <span>
              <label for="email" style="font-family: Poppins,serif ;color:black">Numero de Tarjeta  </label>
              <pv-inputtext id="email" v-model="numbertarjet" aria-describedby="tarjet-help" class="inputpform" type="number"/>
            </span>
          </div>

          <div class="inputpform flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">MM/AA</label>
                <pv-inputtext id="password" v-model="mmaa"  aria-describedby="mmaa-help" class="inputpform" type="number" />
              </span>
          </div>
          <div class="inputpform flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">CVV</label>
                <pv-inputtext id="password" v-model="cvv"  aria-describedby="cvv-help" class="inputpform" type="number" />
              </span>
          </div>
          <div class="inputpform flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">Nombres</label>
                <pv-inputtext id="password" v-model="name"  aria-describedby="name-help" class="inputpform" type="text" />
              </span>
          </div>
          <div class="inputpform flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">Apellidos</label>
                <pv-inputtext id="password" v-model="lastname"  aria-describedby="lastname-help" class="inputpform" type="text" />
              </span>
          </div>
          <div class="inputpform flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">Correo Electrónico</label>
                <pv-inputtext id="password" v-model="email"  aria-describedby="email-help" class="inputpform" type="text" />
              </span>
          </div>


        </template>
        <template #footer>
          <router-link to="/validation"> <pv-button  id="btnprimary" label="PAGAR #"  /></router-link> <br><br>
          <pv-images src="https://i.postimg.cc/c1YYrsdw/VISA-Logo.png" alt="logo" width="100" style="margin-right: 10px;margin-left:10px"/>
          <pv-images src="https://i.postimg.cc/8cPSQpH9/Mastercard-logo-svg.png" alt="logo" width="100" style="margin-right: 10px;margin-left:10px"/>
          <pv-images src="https://i.postimg.cc/mkXGTvpD/logo-Paypal.png" alt="logo" width="100" style="margin-right: 10px;margin-left:10px"/>

        </template>
      </pv-card>
    </div>

     <br><br>
    <div class="footerpag">
      <div id="titulo-footer">
        <label >Indicar hora de recojo de vehículo </label><br><br>
        <pv-inputtext type="text" v-model="name" style="-webkit-justify-content: center"/><br><br><br><br><br>
      </div>
    </div>
  </div>
</template>




<script>

import UseApiService from "@/services/use-api-services";
export default {
  name: "online-payment",


  data() {
    return {
      numbertarjet:0,
      mmaa:0,
      cvv:0,
      name:'',
      lastname:'',
      email:'',
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
.cardform{
  display: flex;
  justify-content: center;
  text-align: center;
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
.p-cardcontentform{
  background-color: white;
  width: 30em;
}
.text-content{
  font-size: 30px;
  display:inline-block;
  margin-right: 100px;
}
#titulo-header{
  font-size: 30px;
  font-family: 'Poppins',sans-serif;
  color:#14131B;
  margin-left:20px;
  text-align: center;
  margin-right: 20px;
}
#titulo-footer{
  font-size: 20px;
  font-family: 'Poppins',sans-serif;
  color:#14131B;
  margin-left:20px;
  text-align: center;
  margin-right: 20px;
}
.inputpform{
  display: flex;
  min-width: 300px;
  max-width: 100%;

  text-align: start;
  justify-content: center;
}
#btnprimary{
  background-color: #40019A;
  color: white;
  box-shadow: transparent;
  border: transparent;
  width: 19em;
  height: 2.5em;
}
#btnprimary:hover{
  background-color:#310077;
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
  .inputpform{
    display: flex;
    min-width: 100px;

    text-align: start;
    justify-content: center;
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
