<script setup>
import FooterComponent from "@/components/footer/footer-component.vue";
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
</script>

<template>
  <div>
    <toolbar-bar-tenant></toolbar-bar-tenant>
    <div class="welcome-section">
      <div class="welcome-background"></div>
      <div class="welcome-content">
        <h1 class="texto1">Alquila autos</h1>
        <h1 class="texto2">Cercanos facilmente</h1>
        <div class="location-input">
          <label for="location" class="location-label">Ubicación:</label>
          <input type="text" id="location" class="location-field" placeholder="Ingrese su ubicación">
        </div>
        <div><router-link to=""><pv-button class="combobox" id="btn" label="BUSCAR UN COCHE" /></router-link></div>
      </div>
    </div>
    <p class="texto3">El auto perfecto para tí está más cerca que nunca</p>
    <p class="texto4">Marcas de autos disponibles</p>
    <div class="card-container">
      <div class="card">
        <img src="https://suzukiderco.vteximg.com.br/arquivos/ids/156621-520-292/suzuki-baleno-glx-at-rojo.png?v=638224635493700000" alt="Hyundai" class="card-image">
        <p>Hyundai</p>
      </div>
      <div class="card">
        <img src="https://suzukiderco.vteximg.com.br/arquivos/ids/156621-520-292/suzuki-baleno-glx-at-rojo.png?v=638224635493700000" alt="Nissan" class="card-image">
        <p>Nissan</p>
      </div>
      <div class="card">
        <img src="https://suzukiderco.vteximg.com.br/arquivos/ids/156621-520-292/suzuki-baleno-glx-at-rojo.png?v=638224635493700000" alt="Toyota" class="card-image">
        <p>Toyota</p>
      </div>
      <div class="card">
        <img src="https://suzukiderco.vteximg.com.br/arquivos/ids/156621-520-292/suzuki-baleno-glx-at-rojo.png?v=638224635493700000" alt="KIA" class="card-image">
        <p>KIA</p>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<style scoped>
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-top: 30px;
}

.texto4 {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #40019A;
  margin-top: 20px;
  margin-bottom: 10px;
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
.card-container {
  display: flex;
  justify-content: space-between;
}

.card {
  background-color:#F5F5F5;
  flex: 0 0 calc(25% - 20px);
  text-align: center;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  max-width: 80%;
  height: auto;
  border-radius: 10px;
}
</style>



