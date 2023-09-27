<template>
<toolbar-bar-tenant></toolbar-bar-tenant>
  <div class="flex flex-wrap xl:flex-row lg:flex-row  sm:flex-column md:flex-column  sm:justify-content-center md:justify-content-center">
      <div class=" form-container flex-column xl:pr-6 lg:pr-6" >
        <h1 class="text1">Busca un auto</h1>
        <div class="field">
          <label for="firstname1">Ubicación</label>
          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
          <pv-button class="" type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load"></pv-button>
        </div>
        <div class="field">
          <label for="lastname1">Precio</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="firstname1">Tiempo de alquiler</label>
          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Marca</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div> <div class="field">
        <label for="firstname1">Modelo</label>
        <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>
        <div class="field">
          <label for="lastname1">Clase</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div> <div class="field">
        <label for="firstname1">Transmision</label>
        <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>
      </div>
      <div class="flex-1 result-container">
        <pv-card>
          <template #header>
            <div class ="img-container">
            <img class="card-image" alt="user header" src="https://cdn.impel.io/swipetospin-viewers/autolandperu/bup372/20230921175035.A1AHPLNQ/closeups/cu-0.jpg" />
            </div>
          </template>
          <template #content>
            <router-link to="/rental-agreement"><pv-button   label="Ver contrato de alquiler" /></router-link>
            <pv-button  label="Disponible" severity="secondary" style="margin-left: 0.5em" />
          </template>
          <template #footer>
            <div class="flex flex-wrap justify-content-between">
                <pv-card class="flex-1">
                  <template #title class="card-title"> Prestaciones </template>
                  <template #content>
                    <p>
                      Velocidad máx   170 km/h
                    </p>
                    <p>
                      Consumo   9.71/100 km
                    </p>
                  </template>
                </pv-card>
              <pv-card class="flex-1">
                <template #title class="card-title"> Propietario </template>
                <template #content>
                  <p>
                    Nombre  Erick Hernan
                  </p>
                  <p>
                    Apellido  Ruiz Torres
                  </p>
                  <p>
                    Telefono  9902229191
                  </p>
                  <p>
                    Correo  ericks1301@gmail.com
                  </p>
                </template>
              </pv-card>

              <pv-card class="flex-1 md:mt-3 sm:mt-3">
                <template #title class="card-title"> Dimensiones </template>
                <template #content>
                  <p>
                    Largo/Ancho/Alto     5.325/1.855/1.855 mm
                  </p>
                  <p>
                    Peso                 2100 kg
                  </p>
                </template>
              </pv-card>

              <pv-card class="flex-1 md:mt-3 sm:mt-3">
                <template #title class="card-title"> Costo de alquiler </template>
                <template #content>
                  <p>
                    Costo por mes    S/800
                  </p>
                </template>
              </pv-card>
      </div>
          </template>
        </pv-card>

      </div>
  </div>
</template>
<script>
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";


export default{
  name: "search-car.component",
  components: {ToolbarBarTenant},
  data(){
    return {
      value:"",
      loading:false,
    }
  },
  methods(){
    return{
      load : () => {
        this.loading.value = true;
        setTimeout(() => {
          this.loading.value = false;
        }, 2000);
      },
    }
  }
}
</script>
<style scoped>
.container{

}
.field{
  width: 300px;
}
.form-container{
  margin-left:20px;
}
.card-image{
  width:100%;
}
.card{
  width: 100%
}
.text1{
  font-weight: bold;
  font-size: 6vh ;
  margin-top:10px;
  color: #40019A;
  margin-bottom: 10px;
}
.card-title{
  background-color:violet;
}
.result-container{
  margin-right:30px;
  margin:auto;
}
.img-container{
  width:30%;
  margin:auto;
}
</style>