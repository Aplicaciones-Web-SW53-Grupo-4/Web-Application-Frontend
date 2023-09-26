<script setup>
import ToolbarBarOwner from "@/components/toolbar/toolbar-bar-owner-component.vue";
import FooterComponent from "@/components/footer/footer-component.vue";
</script>

<template>
  <div>
    <toolbar-bar-owner></toolbar-bar-owner>
    <div class="welcome-section">
      <div class="welcome-background"></div>
      <div class="welcome-content">
        <h1 class="texto1">Convierte tu auto</h1>
        <h1 class="texto2">en dinero extra</h1>
        <div class="location-input">
          <label for="location" class="location-label">Ubicación:</label>
          <input type="text" id="location" class="location-field" placeholder="Ingrese su ubicación">
        </div>
        <div><router-link to=""><pv-button class="combobox" id="btn" label="COMPARTE TU AUTO" /></router-link></div>
      </div>
    </div>
    <p class="texto3">Notificaciones</p>
    <div class="notification-section">
      <div class="notification">
        <div class="notification-message">Piero Torres Arias envio una solicitud de alquiler del vehículo Toyota Prius</div>
        <div class="notification-button">
          <pv-button class="notification-button" label="Ver mensaje" />
        </div>
      </div>
      <div class="notification">
        <div class="notification-message">Jorge Paredes Cano envio una solicitud de alquiler del vehículo Toyota Prius</div>
        <div class="notification-button">
          <pv-button class="notification-button" label="Ver mensaje" />
        </div>
      </div>
      </div>
  </div>
  <footer-component></footer-component>
</template>

<style scoped>

.notification-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.notification {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.notification-message {
  font-size: 18px;
  margin-bottom: 10px;
}

.notification-button {
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.location-input {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.location-label {
  font-size: 18px;
  margin-right: 10px;
  width: 100px;
}

.location-field {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 15px;
}

.texto3 {
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 34px;
  margin-top: 30px;
}

.welcome-section {
  background-image: url(https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg);
  background-size: cover;
  background-position: center;
  min-height: 67vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}

.welcome-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.texto1{
  font-weight: bold;
  font-size: 64px ;
  margin-top:10px;
  color: #40019A;
  margin-bottom: 10px;
}
.texto2{
  font-weight: bold;
  font-size: 64px ;
  margin-top:10px;
  margin-bottom: 20px;
}


.welcome-content {
  text-align: center;
  color: black;
  width: 750px;
  border-radius: 20px;
  background-color: white;
  padding: 20px;
}

button {
  padding: 10px 20px;
  background-color: #40019A;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 5px;
}
</style>



