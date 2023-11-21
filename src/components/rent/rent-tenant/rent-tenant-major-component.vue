

<template  >
  <div class="template-mayor">

   <toolbar-bar-tenant></toolbar-bar-tenant>
    <br>
    <div id="titulo-seccion">
      <label >ALQUILER</label>
    </div>
    <div>
      <div class="request-list">
        <div v-for="request in carRequests" :key="request.id" class="request-card">
          <div class="avatar">
            <img :src="request.automobile.imageurl" alt="Car Avatar" />
          </div>
          <div class="request-details">
            <h3 style="font-family: 'Arial Black', sans-serif; color: #00BFFF;">{{ request.automobile.brand}} {{request.automobile.model}}</h3>
            <p> <b>Estado de Solicitud: </b> <div :class="stylesStatusRequests[request.statusRequest]">{{ statusRequest[request.statusRequest] }}</div></p>
            <p> <b>Propietario:</b> {{ request.owner.name }} {{request.owner.lastname}}</p>
            <p> <b>Fecha de Solicitud:</b> {{ formatearFecha(new Date(request.dateCreated)) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import UseApiService from "@/services/use-api-services";
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
import {RentService} from "@/services/rentService";
import GlobalData from "@/services/eventBus";
export default {
  name: "rent-tenant-major",
  components: {ToolbarBarTenant},

  mounted() {
    new RentService(). getRequestsByTenantIdRent(GlobalData.getUserId()).then((response) => {
      if (response.status === 200) {
        console.log(response)
        this.carRequests = response.data;
        console.log(this.carRequests)
      }
    }).catch((error) => {
      console.log(error)
      alert("Error al obtener solicitudes de alquiler");
    });
  },
  data() {
    return {
      carRequests: [],
      statusRequest:["Pendiente","Aceptado","Rechazado"],
      stylesStatusRequests:["waiting","accepted","rejected"]
    };
  },
  methods: {
    formatearFecha(fecha) {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // Para usar el formato de 24 horas
      };

      return new Intl.DateTimeFormat('es-ES', options).format(fecha);
    }
  },
};

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

#titulo-seccion{
  font-size: 40px;
  font-family: 'Poppins',sans-serif;
  color:#40019A;
  margin-left:20px;
  font-weight: bold;
}
h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.request-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.request-card {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.request-details {
  flex: 1;
}

h3 {
  font-size: 20px;
  margin-bottom: 5px;
}
@media all and (max-width: 840px) {
  #titulo-seccion{
    font-size: 30px;
  }
  .p-cardcontent{
    width: 20em;height: 30em;
  }

  #btnprimary{
    background-color: #40019A;
    color: white;
    box-shadow: transparent;
    border: transparent;
    width: 20em;
    font-size: 10px;
    height: 2.5em;
  }
}
</style>
