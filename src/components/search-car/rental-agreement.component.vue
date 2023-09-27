<template>
  <toolbar-bar-tenant></toolbar-bar-tenant>
  <div class="flex flex-wrap xl:flex-row lg:flex-row  sm:flex-column md:flex-column  sm:justify-content-center md:justify-content-center">
    <div class=" flex-1 flex- container flex-column xl:pr-6 lg:pr-6" >
      <h1 class="text1">Contrato de uso</h1>
      <p>Reciba un contrato de arrendamiento digital de su arrendaor, este contrato le será enviado como invitación
      por correo electrónico y por este medio para que pueda ver y firmar su contrato de arrendamiento
      </p>
      <div class="flex flex-column">
        <h3>Vehículo a compartir</h3>
        <img alt="" src="https://cdn.impel.io/swipetospin-viewers/autolandperu/bup372/20230921175035.A1AHPLNQ/closeups/cu-0.jpg">
        <p>Marca/Modelo: Toyota/Prius</p>
        <p>Propietario: Erick Ruiz Torres</p>
        <p>Celular: 992828828</p>
      </div>
    </div>
    <div class="flex-1 result-container">
      <div class=" flex flex-justify-content-center contract-container">
      <img src="https://imgv2-1-f.scribdassets.com/img/document/393602309/original/b296abab9b/1695144581?v=1"/>
    </div>
      <p>Declaro bajo juramento que yo <b>Piero Torres Arias</b> , acepto los requisitos mencionados anteriormente</p>
      <div class="flex flex-row signature-container">
        <pv-button label="Generar firma digital" @click="generateSignature"></pv-button>
        <p>{{this.firma}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";


export default{
  name: "rental-agrrement.component",
  components: {ToolbarBarTenant},
  data(){
    return {
      firma:""
    }
  },
  methods:{
    generateSignature(){
      this.firma = "Piero Torres Arias ID:343434343434 Agosto 30 del 2023/19:00"
    }
  }
}
</script>
<style scoped>
.container{

}
.text1{
  font-weight: bold;
  font-size: 6vh ;
  margin-top:10px;
  color: #40019A;
  margin-bottom: 10px;
}
.result-container {
  width:90%;
}
.contract-container img{
  width:80%;
  margin:auto;
}
.signature-container{

}
.contract-container{
  background-color:white;
  border-radius:20px;
  box-shadow:1px -2px 2px
}
.signature-container{

}
div img{
  width:50%
}
</style>