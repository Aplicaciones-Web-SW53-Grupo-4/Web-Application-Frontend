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

          <label for="lastname1">Price</label>
          <input v-model="price" id="lastname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
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
        </div>
        <div class="field">
        <label for="firstname1">Modelo</label>
        <input v-model="model" id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>

        <div class="field">
          <label for="firstname1">Cant.Asientos</label>
          <input v-model="quantity" id="firstname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>

        <div class="field">
    <label for="lastname1">Class Vehicule</label>
    <input v-model="classvehicules" id="lastname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>

        <div class="field">

     <label for="firstname1">Transmision</label>
     <input v-model="transmision" id="firstname1" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
     <pv-button class="btn" type="button" label="Search" icon="pi pi-search" :loading="loading" @click=""></pv-button>

      </div>
      </div>

    <div class="mt-7" v-if="!searched">
      <div class="card_carousel">
        <pv-carousel :value="products" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" >
          <template #item="slotProps">

            <div class="flex flex-column align-items-center ">
              <div class="align-items-center justify-content-center w-8 " >
                <img :src="slotProps.data.image" :alt="slotProps.data.brand" class="h-full w-full" />
              </div>

              <div class=" align-items-center justify-content-center   text-center  ">
                <h4 class="">BRAND: {{ slotProps.data.brand }}</h4>
                <h4 class="">PRICE: S/{{ slotProps.data.price }} por día</h4>
                <h4 class="">MODEL: {{ slotProps.data.model }}</h4>

                <div class="mt-5 flex align-items-center justify-content-center gap-2">
                  <pv-button icon="pi pi-search" rounded @click="search(slotProps.data)" />
                  <pv-button icon="pi pi-star-fill" rounded severity="secondary" />
                </div>
                <div class="mt-3">
                  <pv-button  label="Alquilar Vehículo"/>
                </div>
              </div>
            </div>
          </template>
        </pv-carousel >
      </div>

    </div>
      <div class="flex-1 result-container">
        <template v-if="searched">
        <pv-card>
          <template #header>
            <pv-button icon="pi pi-backward" rounded severity="secondary" @click="()=>searched=false " />
            <div class ="img-container">
            <img class="card-image" alt="user header" :src="carSelected.image" />
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
                      Marca:  {{carSelected.brand}}
                    </p>
                    <p>
                      Modelo:  {{carSelected.model}}
                    </p>
                  </template>
                </pv-card>
              <pv-card class="flex-1">
                <template #title class="card-title"> Propietario </template>
                <template #content>
                  <p>
                    Nombre:  {{profileUser.name}}
                  </p>
                  <p>
                    Apellidos:  {{profileUser.lastname}}
                  </p>
                  <p>
                    Telefono: {{profileUser.phone}}
                  </p>
                  <p>
                    Correo: {{profileUser.username}}
                  </p>
                </template>
              </pv-card>

              <pv-card class="flex-1 md:mt-3 sm:mt-3">
                <template #title class="card-title"> Propiedades </template>
                <template #content>
                  <p>
                    Numero de asientos:   {{carSelected.quantitySeat}}
                  </p>
                </template>
              </pv-card>

              <pv-card class="flex-1 md:mt-3 sm:mt-3">
                <template #title class="card-title"> Costo de alquiler </template>
                <template #content>
                  <p>
                    Costo por día:  S/{{carSelected.price}}
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
import {AutomovileService} from "@/services/automovile.service";
import useApiServices from "@/services/use-api-services";

export default{
  name: "search-car.component",
  components: {ToolbarBarTenant},
  data(){
    return {
      value:"",
      quantity:"",
      carSelected:{},
      model:"",
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
      price:0,
      profileUser:{},
      selectedbrand: null,
      brand: [
        { name: 'Toyota', code: 'TO' },
        { name: 'KIA', code: 'kI' },
        { name: 'Nissan', code: 'NI' },
        { name: 'JAC', code: 'JA' },
        { name: 'Huyndai', code: 'HY' },
        { name: 'Tesla', code: 'TE' },

      ],

      classvehicules:0,

      transmision:0,
      products: null,
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ],
      imagesCars:[
          "https://i.pinimg.com/564x/33/38/5e/33385e250c8208664b2f58b26e978a0f.jpg",
          "https://i.pinimg.com/236x/31/12/2b/31122b56bcaea2eb36b51138e1f840ac.jpg",
          "https://i.pinimg.com/236x/98/04/16/980416b7504965bbfc8070348a6c7d40.jpg",
          "https://i.pinimg.com/236x/f2/a8/c0/f2a8c0fcc225c182762f642891fbf1a7.jpg",
          "https://i.pinimg.com/236x/50/f0/6f/50f06ff5176f0ca863849b59cdd47d60.jpg",
          "https://i.pinimg.com/236x/29/52/5b/29525b9f645a05602959c73230773765.jpg",
          "https://i.pinimg.com/236x/f8/8a/90/f88a90c9240a9250d0dab9956471f8e2.jpg",
          "https://i.pinimg.com/236x/5e/75/6b/5e756b154b85deb5f6e8f7b61917ea44.jpg",
          "https://i.pinimg.com/236x/7d/ac/a8/7daca897daa2036f7171a5e3d10d3f0f.jpg",
          "https://i.pinimg.com/236x/80/d5/e5/80d5e51dcf3fec1182968c251d8d2a65.jpg," +
          "https://i.pinimg.com/236x/52/e5/4c/52e54ce0320d4f89bea439bcb3a97d8e.jpg"

      ]

    };

  },
  mounted() {
    new AutomovileService().getProductsSmall().then((response) => {
      (this.products = response.data)
      for(let i=0;i<this.imagesCars.length;i++){
        this.products[i].image=this.imagesCars[i];
      }
    });
  },
  methods:{
    load(){
      this.loading.value = true;
      setTimeout(() => {
        this.loading.value = false;
      }, 2000)
    },
    search(carData){
      this.searched=true;
      this.carSelected = carData;
      this.getProfileUser(carData.userId);
    },
    getSeverity(status) {
      switch (status) {
        case 'INSTOCK':
          return 'success';

        case 'LOWSTOCK':
          return 'warning';

        case 'OUTOFSTOCK':
          return 'danger';

        default:
          return null;
      }
    },
    getProfileUser(userId){
      new useApiServices().getProfileByUserId(userId).then((response) => {
        this.profileUser = response.data;
      });
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
.card_carousel{
  width: 100%;

}
.img-center{
  margin:auto;
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
