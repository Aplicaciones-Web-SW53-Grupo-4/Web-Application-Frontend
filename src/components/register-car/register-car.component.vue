<template>
  <toolbar-bar-owner></toolbar-bar-owner>
  <h1 class="text1">Registro de vehículo</h1>
  <div class="flex flex-column xl:flex-row lg:flex-row  sm:flex-column md:flex-column  sm:justify-content-center md:justify-content-center">
    <div class="flex flex-1 form-container flex-column xl:pr-6 lg:pr-6" >
      <div class ="flex xl:flex-row lg:flex-row md:flex-column sm:flex-column flex-column container-camp ">
        <div class="field">
          <label for="firstname1">Marca</label>
          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Modelo</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>
      <h3>Prestaciones</h3>
      <div class ="flex xl:flex-row lg:flex-row md:flex-column sm:flex-column flex-column container-camp">
        <div class="field">
          <label for="firstname1">Velocidad máx</label>
          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Consumo</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>
      <h3>Dimensiones</h3>

      <div class ="flex xl:flex-row lg:flex-row md:flex-column sm:flex-column flex-column container-camp">
        <div class="field">
          <label for="firstname1">Largo/alto/ancho</label>
          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Peso</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>
      <h3>Adicionales</h3>
      <div class ="flex xl:flex-row lg:flex-row md:flex-column sm:flex-column flex-column container-camp">
        <div class="field">
          <label for="firstname1">Clase</label>
          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Transmisión</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>
      <h3>Adicionales</h3>
      <div class ="flex flex-wrap container-camp ">
        <div class="field">
          <label for="firstname1">Tiempo de alquiler</label>
          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Costo de alquiler al mes</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Lugar del recojo del vehículo</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>
        <pv-button class="btn-register" type="button" label="Registrar"></pv-button>

    </div>
    <div class="flex flex-1  result-container flex-column align-items-center justify-content-around">
      <input type="file" id="input-image"/>
      <div class = "btn flex input-photos  justify-content-center align-items-center" @click="addImage()">
          Subir fotos<i class="pi pi-plus"></i>
      </div>
      <RouterLink to="/generate-contract">
      <div class = "btn flex btn-contract flex justify-content-center align-items-center">
        Crear contrato de alquiler
      </div>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
import ToolbarBarOwner from "@/components/toolbar/toolbar-bar-owner-component.vue";


export default{
  name: "register-car.component",
  components: {ToolbarBarOwner, ToolbarBarTenant},
  data(){
    return {
      loading:false,
    }
  },
  methods:{
    addImage(){
      const inputFile = document.getElementById("input-image");
      inputFile.click();
    }
  }
}
</script>
<style scoped>
#input-image{
  display:none;
}
.field{
  width: 300px;
}
.form-container{
  margin-left:20px;
}
.text1{
  font-weight: bold;
  font-size: 6vh ;
  margin-top:10px;
  color: #40019A;
  margin-bottom: 10px;
}
.result-container{
  background-color:#eeeeee;
  border-radius:10px;
  width: 100%;
  margin:10px auto;
  height: 500px;
  box-shadow:1px 1px;
}
.btn-contract{
  background-color:#40019A;
  border-radius:10px;
  color:white;
  width:250px;
  height:50px;
}
.input-photos{
  background-color:#01A1FF;
  border-radius:10px;
  color:white;
  width:250px;
  height:50px;

}
.btn:hover{
  cursor: pointer;
  opacity: 0.8;
}
.btn-register{
  background-color:#40019A;
  color:white;
  border-radius:20px;

}
*{
  font-family:"Poppins";
}
</style>