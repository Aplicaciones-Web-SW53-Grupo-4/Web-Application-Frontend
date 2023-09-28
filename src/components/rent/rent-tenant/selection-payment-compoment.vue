

<template  >
  <div class="template-mayor">
    <toolbar-bar-tenant></toolbar-bar-tenant>
    <br>
    <div id="titulo-seccion">
      <label >Pago de Alquiler</label>
    </div>
    <div class="card">
      <pv-card class="p-cardcontent" >
        <template #title>
          Datos de Alquiler:
        </template>
        <template #content>
          <p class="text-content">
            Precio de Alquiler:  <br>
            Tiempo de Alquiler: <br>
            Fecha de inicio de contrato: <br>
            Fecha de fin de contrato:<br>
            Lugar de recojo y entrega de vehículo:
          </p>
          <pv-images src="https://i.postimg.cc/Xqj4zfvb/RT-V-0c7166c16ff74073b65851f7f0b360ed.jpg"  width="400" />
        </template>
      </pv-card>
    </div><br><br>
    <div class="footerpag">
      <div id="titulo-footer">
        <label > ¿Cómo desea pagar el Alquiler? </label>
      </div>
      <br><br>
      <label style="margin-left: 60px;font-family: 'Poppins',sans-serif;margin-right: 60px">Indicar hora del recojo del vehiculo: </label><br><br>
      <router-link to="/cash-payment"><pv-button label="Pago en EFECTIVO" style="justify-content: flex-end;background-color: #40019A;margin-right: 60px;margin-left: 60px"/> </router-link>
      <router-link to="/online-payment"><pv-button label="Pago Online" style="justify-content: flex-end;background-color: #40019A"/><br><br><br></router-link>
    </div>
  </div>
</template>





<script>
import UseApiService from "@/services/use-api-services";
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
export default {
  name: "selection-payment",
  components: {ToolbarBarTenant},
  data() {
    return {
      hour: "",
      useApiService: new UseApiService(),
    };
  },
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
#titulo-seccion{
  font-size: 35px;
  font-family: 'Poppins',sans-serif;
  color:#14131B;
  margin-left:20px;
  font-weight: bold;
}
.card{
  display: flex;
  -webkit-justify-content: center;
}
.p-cardcontent{
  box-shadow: 3px 4px 4px #14131B;
  -webkit-justify-content:flex-start;
  width: 90em;
  height: 30em;
  background-color: whitesmoke;
  align-content: flex-start;
  display: flex;
}
.text-content{
  font-size: 30px;
  display:inline-block;
  margin-right: 100px;
}
#titulo-footer{
  font-size: 20px;
  font-family: 'Poppins',sans-serif;
  color:#14131B;
  margin-left:20px;
  text-align: center;
  margin-right: 20px;
}
@media all and (max-width: 840px) {

  #titulo-seccion{
    font-size: 30px;
  }
  .p-cardcontent{
    width: 40em;height: 50em;
  }
}

</style>
