

<template  >
  <div class="template-mayor">
    <toolbar-bar-tenant></toolbar-bar-tenant>
    <br>
    <div id="titulo-seccion">
      <label >Solicitud de Alquiler</label>
    </div>
    <div class="card">
      <pv-card class="p-cardcontent" >
        <template #title>
          Datos de Alquiler:
        </template>
        <template #content>
          <p class="text-content">
            Precio de Alquiler (por día): S/.{{carSelected.price}} <br>
            Tiempo de Alquiler Máximo: {{carSelected.timeRent}}<br>
            Fecha de inicio de contrato: <pv-calendar v-model="startDate" showIcon />
            <br>
            Fecha de fin de contrato:<pv-calendar v-model="finishDate" showIcon  /> <br>
            Lugar de recojo y entrega de vehículo: {{carSelected.place}}
          </p>
          <pv-images :src="carSelected.imageurl"  width="400" />
        </template>
      </pv-card>
    </div><br><br>
    <div class="footerpag">
      <br><br>
      <label style="margin-left: 60px;font-family: 'Poppins',sans-serif;margin-right: 60px">Indicar hora del recojo del vehiculo: </label> <pv-calendar id="calendar-timeonly" v-model="time" timeOnly show-icon/>
      <br><br>
<!--      <pv-button label="Pago en EFECTIVO" style="justify-content: flex-end;background-color: #40019A;margin-right: 60px;margin-left: 60px" @click="createRent"/>
      <router-link to="/online-payment"><pv-button label="Pago Online" style="justify-content: flex-end;background-color: #40019A"/><br><br><br></router-link>-->
      <pv-button label="Enviar solicitud de alquiler" style="justify-content: flex-end;background-color: #40019A;margin-right: 60px;margin-left: 60px" @click="createRent"/>
      <router-link to="/search-car"><pv-button label="Cancelar solicitud" style="justify-content: flex-end;background-color: #40019A"/><br><br><br></router-link>-->
    </div>
  </div>
</template>


<script>
import UseApiService from "@/services/use-api-services";
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
import GlobalData from "@/services/eventBus";
import {RentService} from "@/services/rentService";
export default {
  name: "selection-payment",
  components: {ToolbarBarTenant},
  data() {
    return {
      hour: "",
      useApiService: new UseApiService(),
      carSelected: JSON.parse(atob(this.$route.query.product)),
      startDate:new Date(),
      finishDate:new Date(),
      requestDate:null,
      time:new Date()
    };
  },
  methods: {
     createRent(){
      let rent = {
          carId: this.carSelected.id,
        tenantId: GlobalData.getUserId(),
        startRent: this.startDate,
        endRent: this.finishDate,
          timeCollect:this.time.getTime(),
        ownerId: this.carSelected.userId,
        automobileId: this.carSelected.id,
      }
      console.log(rent);

      new RentService().createRequestRent(rent).then((response) => {
        if (response.status === 200) {
          alert ("Solicitud de alquiler enviada");
        }
      }).catch((error) => {
        console.log(error)
        alert("Error al enviar solicitud de alquiler");
      });
    }
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
