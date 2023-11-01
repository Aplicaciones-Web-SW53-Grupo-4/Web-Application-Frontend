<template>
<toolbar-bar-tenant></toolbar-bar-tenant>
  <div class="flex flex-wrap xl:flex-row lg:flex-row  sm:flex-column md:flex-column  sm:justify-content-center md:justify-content-center">
      <div class=" form-container flex-column xl:pr-6 lg:pr-6" >
        <h1 class="text1">Busca un auto</h1>
        <div class="field">
          <label for="firstname1">Departamento</label> <br>
          <div class="card flex justify-content-center">

            <pv-dropdown v-model="selectedCity" :options="department" showClear optionLabel="name" placeholder="Select a Departament" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
<!--          <label for="firstname1">Departamento</label>-->
<!--          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">-->
        </div>
        <div class="field">
          <label for="firstname1">Price</label> <br>
          <div class="card flex justify-content-center">

            <pv-dropdown v-model="selectedprice" :options="price" showClear optionLabel="name" placeholder="Select a Price" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
<!--          <label for="lastname1">Precio</label>-->
<!--          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">-->
        </div>
        <div class="field">
          <label for="firstname1">Time the rent</label> <br>
          <div class="card flex justify-content-center">
            <pv-dropdown v-model="selectedtime" :options="time" showClear optionLabel="name" placeholder="Select a Time Rent" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
<!--          <label for="firstname1">Tiempo de alquiler (mes o dia)</label>-->
<!--          <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">-->
        </div>
        <div class="field">
          <label for="firstname1">Marca</label> <br>
          <div class="card flex justify-content-center">
            <pv-dropdown v-model="selectedbrand" :options="brand" filter optionLabel="name" placeholder="Select a Brand" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                  <img :alt="slotProps.value.label"  :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="flex align-items-center">
                  <img :alt="slotProps.option.label"  :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </pv-dropdown>
          </div>
<!--          <label for="lastname1">Marca</label>-->
<!--          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">-->
        </div> <div class="field">
        <label for="firstname1">Modelo</label>
        <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>

        <div class="field">
          <label for="firstname1">Class</label> <br>
          <div class="card flex justify-content-center">
            <pv-dropdown v-model="selectedclase" :options="class_vehicules" showClear optionLabel="name" placeholder="Select a Class of Vehicule" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
<!--          <label for="lastname1">Clase</label>
          <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
   -->     </div>

        <div class="field">
          <label for="firstname1">Transmision</label> <br>
          <div class="card flex justify-content-center">
            <pv-dropdown v-model="selectedtransmision" :options="transmision" showClear optionLabel="name" placeholder="Select a Transmision of Vehicule" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
<!--        <label for="firstname1">Transmision</label>-->
<!--        <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">-->
        <pv-button class="btn" type="button" label="Search" icon="pi pi-search" :loading="loading" @click="search()"></pv-button>

      </div>
      </div>





      <div class="flex-1 result-container">
        <template v-if="searched">
        <pv-card>
          <template #header>
            <div class ="img-container">
            <img class="card-image" alt="user header" src="https://cdn.impel.io/swipetospin-viewers/autolandperu/bup372/20230921175035.A1AHPLNQ/closeups/cu-0.jpg" />
            </div>
          </template>
          <template #content>
            <router-link to="/rental-agreement"><pv-button class="btn"  label="Ver contrato de alquiler" /></router-link>
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
                <template #title class="card-title"> Propiedades </template>
                <template #content>
                  <p>
                    Numero de asientos    4 asientos
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
        </template>

      </div>

  </div>
</template>
<script>
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";


export default{
  name: "search-car.component",
  components: { ToolbarBarTenant},
  data(){
    return {
      value:"",
      loading:false,
      searched:false,
      selectedCity: null,
      selectedprice: null,
      selectedtime:null,
      time:[
        {name:'1 Día'},
        {name:'2 Día'},
        {name:'3 Día'},
        {name:'4 Día'},
        {name:'5 Día'},
        {name:'6 Día'},
        {name:'7 Día'},
        {name:'1 SEMANA'},
        {name:'2 SEMANA'},
        {name:'3 SEMANA'},
        {name:'1 MES'},
        {name:'2 MESES'},
        {name:'3 MESES'},
      ],
      department: [
        { name: 'Lima' },
        { name: 'Ica'},
        { name: 'Arequipa'},
        { name: 'Cajamarca' },
        { name: 'Moquegua' },
        { name: 'Tacna' },
        { name: 'Tumbes' },
        { name: 'Loreto' },
        { name: 'Madre de Dios' },
      ],
      price:[
        {name:'100'},
        {name:'200'},
        {name:'300'},
        {name:'400'},
        {name:'500'},
        {name:'600'},
        {name:'700'},
        {name:'800'},
        {name:'900'},
        {name:'1000'},
      ],
      selectedbrand: null,
      brand: [
        { name: 'Toyota', code: 'TO' },
        { name: 'KIA', code: 'kI' },
        { name: 'Nissan', code: 'NI' },
        { name: 'JAC', code: 'JA' },
        { name: 'Huyndai', code: 'HY' },
        { name: 'Tesla', code: 'TE' },

      ],
      selectedclase: null,
      class_vehicules:[
        {name:'Economica'},
        {name:'Promedio'},
        {name:'Lujo'},
      ],
      selectedtransmision: null,
      transmision:[
        {name:'Automatic'},
        {name:'Manual'},

      ]

    }

  },
  methods:{
      load(){
        this.loading.value = true;
        setTimeout(() => {
          this.loading.value = false;
        }, 2000)
    },
    search(){
        this.searched=true;
    }
  }
}
</script>
<style scoped>
.btn{
  background-color:#40019A;
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
*{
  font-family:"Poppins";
}
</style>
