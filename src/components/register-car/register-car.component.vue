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
      <div class="flex flex-wrap gap-3">
        <label for="">Class</label>
        <div class="flex align-items-center">
          <pv-radiobutton v-model="classType" inputId="ingredient1" name="economic" value=0 />
          <label for="ingredient1" class="ml-2">Economic</label>
        </div>
        <div class="flex align-items-center">
          <pv-radiobutton v-model="classType" inputId="ingredient2" name="medium" value=1 />
          <label for="ingredient2" class="ml-2">Medium</label>
        </div>
        <div class="flex align-items-center">
          <pv-radiobutton v-model="classType" inputId="ingredient2" name="luxury" value=2 />
          <label for="ingredient2" class="ml-2">Luxury</label>
        </div>
      </div>

        <div class="flex flex-wrap gap-3 mt-4">
          <label for="">Transmision</label>
          <div class="flex align-items-center">
            <pv-radiobutton v-model="transmissionType" inputId="ingredient1" name="automatic" value=0 />
            <label for="ingredient1" class="ml-2">Automatic</label>
          </div>
          <div class="flex align-items-center">
            <pv-radiobutton v-model="transmissionType" inputId="ingredient2" name="manual" value=1 />
            <label for="ingredient2" class="ml-2">Manual</label>
          </div>
      </div>
      <h3>Adicionales</h3>
      <div class ="flex flex-wrap container-camp ">
        <div class="field">
          <label for="firstname1">Tiempo de alquiler</label>
          <input v-model="timeRent" id="firstname1"  type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Costo de alquiler al día</label>
          <input v-model="price" id="lastname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field">
          <label for="lastname1">Lugar del recojo del vehículo</label>

          <input v-model="place" id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
      </div>
        <pv-button  @click="getregister" class="btn-register" type="button" label="Registrar"></pv-button>

    </div>

    <div >
      <form ref="form">
        <input type="file" @change="handleImageChange" multiple tabindex="-1">
      </form>


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
import GlobalData from "@/services/eventBus";
import storage from "@/firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
export default{
  name: "register-car.component",
  components: {ToolbarBarOwner},
  data(){
    return {
      security: new AutomovileService(),
      loading:false,
      selectedtransmission:null,
      selectedclase: null,
      brand:"Toyota",
      price:200,
      model:"Yaris",
      color:"rojo",
      quantitySeat:4,
      transmissionType:0,
      classType:0,
      selectedFile: null,
      place:"",
      timeRent:"2 dias",
      userId:"",
      imageurl:"",
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
  mounted() {
    this.userId = GlobalData.getUserId()
    console.log("User id: ",this.userId)
  },
  methods:{
    addImage(){
      const inputFile = document.getElementById("input-image");
      inputFile.click();
    },
    async handleImageChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const storage = getStorage();
        const storageRef = ref(storage, `uploads/${selectedFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on('state_changed',
            // ... tus eventos de progreso y manejo de errores ...
            async () => {
              // La carga se completó exitosamente, ahora puedes obtener la URL de descarga
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log('File available at', downloadURL);
              this.imageurl = downloadURL; // Guarda la URL en data
            }
        );
      }
    },
    getregister() {
      //TOD
      this.security.getregister(this.brand,this.price,this.model,this.color,this.quantitySeat,parseInt(this.transmissionType),
      parseInt(this.classType),this.place,this.timeRent,this.userId,   this.imageurl   ).then((response) => {
        if (response.data) {
          alert("se ha registrado su vehiculo");
          // this.$router.push("/home-owner");
        } else {
          alert('invalid user');
        }
      }).catch((error) => {
        alert("Error al crear el vehículo")
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
