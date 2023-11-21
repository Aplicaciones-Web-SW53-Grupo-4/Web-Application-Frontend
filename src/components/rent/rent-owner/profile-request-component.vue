<!--ESTOY MODIFICANDO ESTA PARTE -ERICKRUIZ-->
<template>
  <div class="template-mayor">
    <toolbar-bar></toolbar-bar>
    <br>
    <div id="titulo-seccion">
      <label>ALQUILER</label>
    </div>
    <div style="text-align: start">
      <h3 style="font-family: 'Poppins',sans-serif;" class="text-center"> Solicitante</h3><br>
    </div>
  </div>

  <div class="card">

    <pv-card class="p-cardcontent" style="width: 58em;height: 33em">
      <template #header>

        <div class="grid">
          <div class="col1">
            <label class="textinfo">Nombres: {{ tenantData.tenant.name }} </label><br><br>
            <label class="textinfo">Apellidos:{{ tenantData.tenant.lastname }} </label><br><br>
            <label class="textinfo">Celular: {{ tenantData.tenant.phone }}</label><br><br>
          </div>
          <div class="col2">
            <center><img src="https://i.postimg.cc/FFqf7CRJ/usuario-1.png" alt="logo" class="img"/></center>
          </div>
        </div>
        <div class="grid2">
          <div class="col3">
            <label style="font-family: 'Poppins',sans-serif;color: #40019A"><b>Solicito Alquilar:</b>
              {{ tenantData.automobile.brand }} {{ tenantData.automobile.model }} </label><br>
            <label class="textinfo"><b>Fecha de inicio:</b> {{ formatearFecha(new Date(tenantData.startRent)) }}</label><br>
            <label class="textinfo"><b>Fecha de fin:</b> {{ formatearFecha(new Date(tenantData.endRent)) }}</label><br>
            <label class="textinfo"><b>Solicitado hace: </b>
              {{ formatearTiempoTranscurrido(new Date(tenantData.dateCreated)) }} </label><br>
          </div>
          <div class="col4">
            <div class="card flex flex-wrap gap-3  justify-content-center">

<!--                <pv-button label="VERIFICAR"
                           style="margin-left: 10px;  font-family: 'Poppins',sans-serif;background-color: #40019A;border: none" />-->

                <pv-button :label="states[tenantData.statusRequest]"
                           style="margin-left: 10px;  font-family: 'Poppins',sans-serif;border: none"
                          :class="stylesStatusRequests[tenantData.statusRequest]"
                />

            </div>
            <div style="margin-top:10px">
                <pv-button label="Aceptar Alquiler"
                           style="margin-left: 10px;  font-family: 'Poppins',sans-serif;background-color: deepskyblue;border: none" @click="acceptRequest"/>
                <pv-button label="Rechazar Alquiler"
                           style="margin-left: 10px;  font-family: 'Poppins',sans-serif;background-color: red;border: none" @click="rejectRequest"/>
            </div>
          </div>
        </div>

      </template>

    </pv-card>
  </div>


</template>


<script>


import UseApiService from "@/services/use-api-services";
import ToolbarBar from "@/components/toolbar/toolbar-bar-owner-component.vue";
import {RentService} from "@/services/rentService";


export default {
  name: "profile-request",
  components: {ToolbarBar},

  data() {
    return {
      tenantData: JSON.parse(atob(this.$route.query.tenantData)),
      useApiService: new UseApiService(),
      states: ["Pendiente", "Aceptado", "Rechazado"],
      stylesStatusRequests:["waiting","accepted","rejected"]
    };
  },
  methods: {
    formatearFecha(fecha) {
      console.log(this.tenantData)
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // Para usar el formato de 24 horas
      };
      return fecha.toLocaleString('es-PE', options);
    },
    formatearTiempoTranscurrido(fechaSolicitud) {
      const ahora = new Date();
      const tiempoTranscurrido = ahora - fechaSolicitud;

      const minutos = Math.floor(tiempoTranscurrido / (1000 * 60));
      const horas = Math.floor(minutos / 60);

      if (horas > 0) {
        return `${horas} ${horas === 1 ? 'hora' : 'horas'}`;
      } else {
        return `${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
      }
    },
    updateStatusRequest(status) {
      const body = {
        statusRequest: status,
      };
      new RentService().updateRequestStatusById(this.tenantData.id, body).then(() => {
        alert('Se actualizó el estado de la solicitud a '+ this.states[body.statusRequest]);
      });
    },
    acceptRequest() {
      const accepted = 1
      this.updateStatusRequest(accepted);
    },
    rejectRequest() {
      const rejected = 2
      this.updateStatusRequest(rejected);
    }
  }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
.waiting{
  background-color:orange;
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
#titulo-seccion {
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  color: #40019A;
  margin-left: 20px;
  font-weight: bold;
  display: inline-block;
}

.textinfo {
  color: black;
  font-family: Poppins, serif;
  -webkit-justify-content: flex-start;

}

.img {
  width: 270px;
  align-content: center;

}

.grid {
  display: flex;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;

}

.col1 {
  width: 10em;
}

.col2 {
  display: flex;
  text-align: center;
  margin-left: 20px;
  flex-direction: column;
  width: 40em;
  justify-items: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
}

.grid2 {
  display: flex;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
}

.col3 {
  width: 10em;
  flex-wrap: wrap;
  align-content: flex-start;
}

.col4 {
  display: flex;
  text-align: center;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  width: 40em;
  justify-items: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
}


.card {
  display: flex;
  justify-content: center;


}

.p-cardcontent {
  background-color: whitesmoke;
  padding: 30px;

}

@media all and (max-width: 840px) {
  #titulo-seccion {
    font-size: 30px;
  }

  .img {
    width: 100px;
  }

  .grid {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    width: 20em;
  }

  .col1 {
    width: 20em;
  }

  .col2 {
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 18em;
    justify-items: flex-end;
    justify-content: flex-end;
    align-content: flex-end;
  }

  .grid2 {
    display: flex;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    width: 20em;
  }

  .col3 {
    width: 10em;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  .col4 {
    display: flex;
    text-align: center;
    margin: 10px;
    padding: 5px;
    flex-direction: column;
    width: 30em;
  }


}

</style>
