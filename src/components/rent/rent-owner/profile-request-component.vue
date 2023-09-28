
<!--ESTOY MODIFICANDO ESTA PARTE -ERICKRUIZ-->
<template  >
  <div class="template-mayor">
    <toolbar-bar></toolbar-bar>
    <br>
    <div id="titulo-seccion">
      <label >ALQUILER</label>
    </div>
    <div style="text-align: start">
      <label style="font-family: 'Poppins',sans-serif;"> Nombre del solicitante: Erick Ruiz</label><br>
    </div>
  </div>

  <div class="card">

    <pv-card class="p-cardcontent" style="width: 58em;height: 33em" >
      <template #header>

        <div class="grid">
          <div class="col1">
            <label  class="textinfo">Nombres: Erick   </label><br><br>
            <label  class="textinfo">Apellidos:Ruiz </label><br><br>
            <label  class="textinfo">Celular: 990883151</label><br><br>
            <label  class="textinfo">Teléfono: 01-0883151</label><br>
          </div>
          <div class="col2">
            <center><img src="https://i.postimg.cc/FFqf7CRJ/usuario-1.png" alt="logo" class="img"/></center>
          </div>
        </div>
        <div class="grid2">
          <div class="col3">
            <label style="font-family: 'Poppins',sans-serif;color: #40019A">Solicito Alquilar: Toyota </label><br>

          </div>
          <div class="col4">
            <div class="card flex flex-wrap gap-3  justify-content-center">

              <router-link to="/..."><pv-button label="VERIFICAR"  style="margin-left: 10px;  font-family: 'Poppins',sans-serif;background-color: #40019A;border: none"/></router-link>
              <router-link to="/..."><pv-button label="PROCESO"   style="margin-left: 10px;  font-family: 'Poppins',sans-serif;background-color: dimgray;border: none"/></router-link>
            </div>
            <div style="margin-top:10px">
              <router-link to="/..."><pv-button label="Aceptar Alquiler" style="margin-left: 10px;  font-family: 'Poppins',sans-serif;background-color: deepskyblue;border: none" /></router-link>
              <router-link to="/..."><pv-button label="Rechazar Alquiler" style="margin-left: 10px;  font-family: 'Poppins',sans-serif;background-color: red;border: none" /></router-link>

            </div>
          </div>
        </div>

      </template>

    </pv-card>
  </div>




</template>




<script>


import UseApiService from "@/services/use-api-services";
import ToolbarBar from "@/components/toolbar/toolbar-bar-owner-component.vue";


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
.textinfo{
  color:black;font-family: Poppins,serif;
  -webkit-justify-content: flex-start;

}
.img{
  width: 270px;
  align-content: center;

}
.grid{
  display: flex;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;

}
.col1{
  width: 10em;
}
.col2{
  display: flex;
  text-align: center;
  margin-left: 20px;
  flex-direction: column;
  width: 40em;
  justify-items: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
}
.grid2{
  display: flex;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
}
.col3{
  width: 10em;
  flex-wrap: wrap; align-content: flex-start;
}
.col4{
  display: flex;
  text-align: center;
  margin:20px;
  padding: 10px;
  flex-direction: column;
  width: 40em;
  justify-items: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
}


.card{
  display: flex;
  justify-content: center;




}
.p-cardcontent{
  background-color: whitesmoke;
  padding: 30px;

}
@media all and (max-width: 840px) {
  #titulo-seccion{
    font-size: 30px;
  }
  .img{
    width: 100px;
  }
  .grid{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    width: 20em;
  }
  .col1{
    width: 20em;
  }
  .col2{
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 18em;
    justify-items: flex-end;
    justify-content: flex-end;
    align-content: flex-end;
  }
  .grid2{
    display: flex;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    width: 20em;
  }
  .col3{
    width: 10em;
    flex-wrap: wrap; align-content: flex-start;
  }
  .col4{
    display: flex;
    text-align: center;
    margin:10px;
    padding: 5px;
    flex-direction: column;
    width: 30em;
  }


}

</style>
