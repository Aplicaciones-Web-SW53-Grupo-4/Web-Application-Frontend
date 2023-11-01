<template>
  <toolbar-bar-owner></toolbar-bar-owner>
  <h1 class="text1">Registro de vehículo</h1>
  <div class="flex flex-column xl:flex-row lg:flex-row  sm:flex-column md:flex-column  sm:justify-content-center md:justify-content-center">
    <div class="flex flex-1 form-container flex-column xl:pr-6 lg:pr-6" >
      <div class ="flex xl:flex-row lg:flex-row md:flex-column sm:flex-column flex-column container-camp ">
        <div class="field">
          <label for="firstname1">Marca</label>
          <input v-model="brand" id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Modelo</label>
          <input v-model="model" id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>

      <h3>Propiedades</h3>
      <div class ="flex xl:flex-row lg:flex-row md:flex-column sm:flex-column flex-column container-camp">

        <div class="field">
          <label for="lastname1">Cantidad de asientos</label>
          <input v-model="quantitySeat" id="lastname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Color</label>
          <input v-model="color" id="lastname1" type="string" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>


      <h3>Adicionales</h3>
      <div class ="flex xl:flex-row lg:flex-row md:flex-column sm:flex-column flex-column container-camp">
        <div class="field">
          <label for="firstname1">Class</label>
          <input v-model="classType" id="firstname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">

        </div>

        <div class="field">
          <label for="firstname1">Transmision</label>
          <input v-model="transmissionType" id="firstname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">

        </div>

      </div>
      <h3>Adicionales</h3>
      <div class ="flex flex-wrap container-camp ">
        <div class="field">
          <label for="firstname1">Tiempo de alquiler</label>
          <input v-model="timeRent" id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Costo de alquiler al mes</label>
          <input v-model="price" id="lastname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Lugar del recojo del vehículo</label>
          <input v-model="place" id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>
        <pv-button  @click="getregister" class="btn-register" type="button" label="Registrar"></pv-button>

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
import {AutomovileService} from "@/services/automovile.service";
import {UserValidationRegisterService} from "@/services/user-validation-register.service";

export default{
  name: "register-car.component",
  components: {ToolbarBarOwner, ToolbarBarTenant},
  data(){
    return {
      security: new AutomovileService(),
      loading:false,
      selectedtransmission:null,
      selectedclase: null,
      brand:"",
      price:0,
      model:"",
      color:"",
      quantitySeat:"",
      transmissionType:0,
      classType:0,
      place:"",
      timeRent:0,
      userId:1,
      transmisionType_:[
        {name:'Automatic'},
        {name:'Manual'},
      ],
      class_vehicules:[
        {name:'Economica'},
        {name:'Promedio'},
        {name:'Lujo'},
      ],
    }
  },
  methods:{
    addImage(){
      const inputFile = document.getElementById("input-image");
      inputFile.click();
    },
    getregister() {
      //TOD
      this.security.getregister(this.brand,this.price,this.model,this.color,this.quantitySeat,this.transmissionType,
      this.classType,this.place,this.timeRent,this.userId).then((response) => {
        if (response.data) {
          alert("se ha registrado su vehiculo");
          // this.$router.push("/home-owner");
        } else {
          alert('invalid user');
        }
      }).catch((error) => {
        console.log(error);
      });
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
