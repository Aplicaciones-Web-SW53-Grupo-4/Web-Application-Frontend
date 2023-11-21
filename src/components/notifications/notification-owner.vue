<template>
  <div class="template-mayor">
    <toolbar-bar></toolbar-bar>
    <br>
    <div id="titulo-seccion">
      <label>NOTIFICACIONES</label>
    </div>
    <div style="text-align: end ">
      <label style="font-family: 'Poppins',sans-serif;">Notificaciones Disponibles </label><br>
    </div>
    <div v-for="request in requests">
      <pv-message :closable="false" icon="pi pi-send"
                  style="color: #14131B;font-family: 'Poppins',sans-serif;background-color: whitesmoke">
        <b>{{ request.tenant.name }} {{ request.tenant.lastname }}</b> te
        envio una solicitud de alquiler del
        vehículo {{ request.automobile.brand }} {{ request.automobile.model }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a style="color: #40019A;text-decoration: none;font-weight: bold;display:inline-block;"
           @click="navigateToProfileTenant(request)">Ver Solicitud</a>
      </pv-message>
    </div>
  </div>
</template>


<script>


import UseApiService from "@/services/use-api-services";
import ToolbarBar from "@/components/toolbar/toolbar-bar-owner-component.vue";
import {RentService} from "@/services/rentService";
import GlobalData from "@/services/eventBus";


export default {
  name: "notifications-owner",
  components: {ToolbarBar},
  mounted() {
    new RentService().getRequestsByOwnerId(GlobalData.getUserId()).then((response) => {
      console.log(response.data)
      this.requests = response.data;
    });
  },
  data() {
    return {
      useApiService: new UseApiService(),
      requests: []
    };
  },
  methods: {
    navigateToProfileTenant(tenantData) {
      this.$router.push({
        path: "/profile-request",
        query: {tenantData: btoa(JSON.stringify(tenantData))},
      });
    }
  }
};

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

#titulo-seccion {
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  color: #40019A;
  margin-left: 20px;
  font-weight: bold;
  display: inline-block;
}
a:hover{
  cursor: pointer;
}
@media all and (max-width: 840px) {

  #titulo-seccion {
    font-size: 30px;
  }
}

</style>
