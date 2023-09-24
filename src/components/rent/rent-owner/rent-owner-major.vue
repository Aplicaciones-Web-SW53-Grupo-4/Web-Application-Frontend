

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
            <router-link to="/vehicle-registration-owner"> <pv-button id="btnrouter">REGISTRO VEHICULAR</pv-button> </router-link>
            <router-link to="/notification-owner"> <pv-button id="btnrouter">NOTIFICACIONES</pv-button> </router-link>
            <router-link to="/rent-owner"> <pv-button id="btnrouter">ALQUILER</pv-button> </router-link>
            <router-link to="/perfil-owner"> <a><pv-images id="btnrouter" src="https://i.postimg.cc/FFqf7CRJ/usuario-1.png" alt="logo" width="40"/></a> </router-link>

          </div>

        </template>
      </pv-toolbar>

    </div>

    <br>
    <div id="titulo-seccion">
      <label >ALQUILER</label>
    </div>

    <div class="card">
      <pv-card class="p-cardcontent" >



        <template #content>
          <router-link to="/online-payment"><pv-button  id="btnprimary" label="ALQUILAR NUEVO AUTO"  /></router-link>
        </template>



      </pv-card>
    </div>


  </div>
</template>




<script>


import UseApiService from "@/services/use-api-services";


export default {
  name: "rent-owner-major",

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


.toolbar-1{
  background-color: #D9D9D9;
  padding:9px;
  border: none;
}
#titulo-seccion{
  font-size: 40px;
  font-family: 'Poppins',sans-serif;
  color:#40019A;
  margin-left:20px;
  font-weight: bold;
}
.p-cardcontent{
  width: 30em;
  height: 33em;

  align-content: flex-start;
  display: flex;
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
.card{
  display: flex;
}
.p-cardcontent{
  background-color: white;
  box-shadow: 3px 4px 4px #14131B;
  -webkit-justify-content: center;

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
