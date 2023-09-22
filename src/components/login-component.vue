

<template >
  <div class="toolbar">
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
    <pv-card class="p-cardcontent" style="width: 30em;height: 33em" >
      <template #header>
        <pv-button id="btn" label="Arrendatario"  />
        <pv-button id="btn" label="Propietario"  style="margin-left: 1em" />
      </template>
      <template #title >
          <span style="color:black;font-family: Poppins,serif ">
            Bienvenidos a Automovile Unit
          </span>
      </template>

      <template #content>

        <div class="inputp flex justify-content-center">
            <span>
              <label for="email" style="font-family: Poppins,serif ;color:black">Correo electrónico  </label>
              <pv-inputtext id="email" v-model:form="text" aria-describedby="username-help" class="inputp" type="text"/>
              <small id="email-help" style="color:black;font-family: Poppins,serif ">Enter your email.</small>
            </span>


        </div>

        <br>

        <div class="inputp flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">Contraseña</label>
                <pv-inputtext id="password" v-model=value  aria-describedby="username-help" class="inputp" type="password" />
                <small id="password-help" style="color:black;font-family: Poppins,serif ">Enter your password.</small>

              </span>
        </div>

      </template>
      <template #footer>
        <pv-button  id="btnprimary" label="ACCEDER"  /><br><br>
        <label style="font-family: Poppins,serif;color:black">No tienes una cuenta <a href="#"  class="ov-btn-slide-left" style="color:#40019A">Inscríbete</a></label>

      </template>
    </pv-card>
  </div>

</template>


<script setup>
import { ref } from 'vue';
const value = ref(null);
</script>


<script >
export default {
  name: "login.component",
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.toolbar-1{
  background-color: #14131B;
  padding:9px;
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
#email{
  background-color: #D9D9D9;
  box-shadow: none;
  font-family: 'Poppins',sans-serif;
  border: none;
  color:black;
}
#password{
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
</style>
