<template>
  <toolbar-bar-owner></toolbar-bar-owner>
  <h1 class="text1">Contrato de alquiler</h1>
  <div class="flex flex-column xl:flex-row lg:flex-row justify-content-center sm:flex-column md:flex-column  sm:justify-content-center md:justify-content-between">
      <div class="flex flex-1 flex-column">
        <p>Cree el contrato de alquiler que mejor le parezca</p>
        <pv-button class="btn-register mb-3" type="button" label="Generar contrato predeterminado" @click="enableContract()"></pv-button>
        <input type="file" id="input-contract"/>
        <pv-button class="btn-register" type="button" label="Subir contrato manual en pdf" @click="addContract()"></pv-button>
        <div class="flex flex-column ">
          <h3>Vehículo a compartir</h3>
          <img class="img-car-contract" src="https://cdn.impel.io/swipetospin-viewers/autolandperu/bup372/20230921175035.A1AHPLNQ/closeups/cu-0.jpg" alt="">
          <p>Marca/Modelo: Toyota/Prius</p>
        </div>
    </div>
        <div class="flex-1 result-container">
          <div class=" flex flex-justify-content-center contract-container flex-column" v-if="enabledContract">
            <img src="https://imgv2-1-f.scribdassets.com/img/document/393602309/original/b296abab9b/1695144581?v=1"/>
          </div>
          <pv-button class="btn-register" type="button" label="Subir contrato" v-if="enabledContract"></pv-button>
        </div>
    </div>
</template>
<script>
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
import ToolbarBarOwner from "@/components/toolbar/toolbar-bar-owner-component.vue";


export default{
  name: "generate-contract.component",
  components: {ToolbarBarOwner, ToolbarBarTenant},
  data(){
    return {
      enabledContract:false,
      loading:false,
    }
  },
  methods:{
    addImage(){
      const inputFile = document.getElementById("input-image");
      inputFile.click();
    },
    enableContract(){
      this.enabledContract = true;
    },
    addContract(){
      const inputFile = document.getElementById("input-contract");
      inputFile.click();
    }
  }
}
</script>
<style scoped>
#input-contract{
  display:none;
}
.img-car-contract{
  width:40%;
}
.text1{
  font-weight: bold;
  font-size: 6vh ;
  margin-top:10px;
  color: #40019A;
  margin-bottom: 10px;
}

result-container {
  width:90%;
}
.btn-register{
  background-color:#40019A;
  color:white;
  width:50%;
  border-radius:20px;
}
.contract-container img{
  width:80%;
  margin:auto;
}

.contract-container{
  background-color:white;
  width:70%;
  border-radius:20px;
  box-shadow:1px -2px 2px;
}
*{
  font-family:"Poppins";
}
</style>