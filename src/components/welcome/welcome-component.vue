<script>

</script>

<template>
  <div class="welcome-section">
    <div class="welcome-background"></div>
    <div class="welcome-content">
      <h1>Bienvenido a Automovile Unit</h1>
      <h1>¡Gracias por visitarnos!</h1>
      <router-link to="/login-tenant"><pv-button  class="combobox"  id="btn" label="~ Iniciar ~"/></router-link>
    </div>
  </div>
</template>

<style scoped>
.welcome-section {
  background-image: url(https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg);
  background-size: cover;
  background-position: center;
  min-height: 97vh;
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

.welcome-content {
  text-align: center;
  color: white;
}

button {
  padding: 10px 20px;
  background-color: #40019A;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
}
</style>

