
<template>
  <div>
    <toolbar-bar-tenant></toolbar-bar-tenant>
    <h1 style="font-family: 'Arial Black', sans-serif; color: #00BFFF;">Solicitudes de Autos</h1>
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
</template>

<script>
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
import {RentService} from "@/services/rentService";
import GlobalData from "@/services/eventBus";

export default {
  name: "RequestTenantComponent",
  components: { ToolbarBarTenant },
  mounted() {
    new RentService().getRequestsByTenantId(GlobalData.getUserId()).then((response) => {
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
@import url('https://fonts.googleapis.com/css2?family=Arial+Black&display=swap');

.waiting{
  background-color:yellow;
  text-align:center;
  border-radius: 5px;
}
.accepted{
  background-color:green;
  text-align:center;
}
.rejected{
  background-color:red;
  text-align:center;

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
  width: 50px;
  height: 50px;
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
</style>
