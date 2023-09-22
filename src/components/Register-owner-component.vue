

<template>
  <div class="toolbar-1">
    <pv-toolbar class=" toolbar-1 text-white font-bold m-0 flex flex-wrap " role="navigation" aria-label="Toolbar">
      <template #start >
        <pv-images src="https://i.postimg.cc/rF47Qr56/ai-de-logo-Mesa-de-trabajo-1.png" alt="logo" width="100"/>
      </template>
    </pv-toolbar >
  </div>


  <div >
    <!--      <pv-images src="https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg" alt="Image" width="1000" />-->
  </div>
  <br>
  <div class="card">
    <pv-card class="p-cardcontent" style="width: 30em;height: 55em" >
      <template #header>
        <router-link to="/Register-tenant"><pv-button id="btn" label="Arrendatario"/></router-link>
        <router-link to="/Register-owner"> <pv-button id="btn" label="Propietario"  style="margin-left: 1em" /></router-link>

      </template>
      <template #title >
          <span style="color:black;font-family: Poppins,serif ">
            Regístrate
          </span>
      </template>

      <template #content>

        <div class="inputp flex justify-content-center">
            <span>
              <label for="email" style="font-family: Poppins,serif ;color:black">Correo electrónico  </label>
              <pv-inputtext id="labels" v-model="email" aria-describedby="Ingrese su correo" class="inputp" type="text"/>
              <small id="email-help" style="color:black;font-family: Poppins,serif ;font-size: 10px">Enter your email.</small>
            </span>


        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">Contraseña</label>
                <pv-inputtext id="labels" v-model="password" aria-describedby="Ingrese su contraseña" class="inputp" type="password" />
                <small id="password-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your password.</small>

              </span>
        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="name" style="font-family: Poppins,serif;color:black">Nombre</label>
                <pv-inputtext id="labels" v-model="name"  aria-describedby="Ingrese su nombre" class="inputp" type="text" />
                <small id="name-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your name.</small>

              </span>
        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="lastname" style="font-family: Poppins,serif;color:black">Apellido</label>
                <pv-inputtext id="labels" v-model="lastname"  aria-describedby="Ingrese su apellido" class="inputp" type="text" />
                <small id="lastname-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your lastname.</small>

              </span>
        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="phone" style="font-family: Poppins,serif;color:black">Teléfono</label>
                <pv-inputtext id="labels" v-model="phone"  aria-describedby="Ingrese su telefono" class="inputp" type="number" />
                <small id="phone-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your phone.</small>

              </span>
        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="country" style="font-family: Poppins,serif;color:black">Country</label>
                <pv-inputtext id="labels" v-model="country"  aria-describedby="Ingrese su país" class="inputp" type="text" />
                <small id="country-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your country.</small>

              </span>
        </div>

      </template>
      <template #footer>
        <pv-button id="btnprimary" label="REGÍSTRATE COMO PROPIETARIO"  /><br><br>
        <label style="font-family: Poppins,serif;color:black">¿Ya tienes una cuenta? </label> <router-link to="/login-owner"><a href="#"  class="ov-btn-slide-left" style="color:#40019A"><b> Inicia sesión</b></a></router-link><br><br>
        <label style="font-family: Poppins,serif;color:black">No eres Propietario </label> <router-link to="/Register-tenant"><a href="#"  class="ov-btn-slide-left" style="color:#40019A"><b> Regístrate como Arrendatario</b></a></router-link>



      </template>
    </pv-card>
  </div>

</template>


<script>
import UseApiService from "@/services/use-api-services";

export default {
  name: "Register-owner-component",
  data() {
    return {
      email: "",
      password: "",
      name:"",
      lastname:"",
      phone:"",
      country:"",
      useApiService: new UseApiService(),
    };
  },
};

</script>


<style scoped>
.toolbar-1{
  background-color: #14131B;
  padding:9px;
  border: none;
  position: sticky;
  top: 0;
}
.card{
  display: flex;
  justify-content: center;
  text-align: center;


}
.p-cardcontent{
  background-color: white;

}
.inputp{
  display: flex;
  min-width: 300px;
  max-width: 100%;
  text-align: start;
  justify-content: center;
}

#labels{
  background-color: #D9D9D9;
  box-shadow: none;
  border: none;
  font-family: 'Poppins',sans-serif;
  color:black;
}
#btn{
  margin-top: 2em;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: black;
  transition: .2s ease-in-out all;
  font-family: 'Poppins',sans-serif;
  box-shadow: none;
}
#btn:focus{
  color:#40019A;
}


.card{
  display: flex;
  justify-content: center;
  text-align: center;


}
.p-cardcontent{
  background-color: white;

}
.inputp{
  display: flex;
  min-width: 300px;
  max-width: 100%;

  text-align: start;
  justify-content: center;
}
#btn{
  margin-top: 2em;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: black;
  font-family: 'Poppins',sans-serif;
  box-shadow: none;
}
#btn:hover{
  color:#40019A;
  background-color: transparent;
  border:rebeccapurple;
  box-shadow: none;

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
</style>
