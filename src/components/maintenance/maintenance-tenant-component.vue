<template>
  <toolbar-bar-tenant></toolbar-bar-tenant>
  <div class="container-cards-maintenance">
    <pv-card class="card-maintenance">
      <template #title>
        <span class="title">
          MANTENIMIENTO
        </span>
      </template>
      <template #content>
        <p class="content">
          Cree una solicitud para su arrendador en minutos con información detallada sobre el problema y fotografías relevantes. Además, puede comunicarse con el arrendador cuando sea necesario.
        </p>
      </template>
      <template #footer>
        <span class="footer-text">
          <p>
            Vea la respuesta del propietario en su correo electrónico.
          </p>
        </span>
      </template>
    </pv-card>
    <pv-card class="card-evidence">
      <template #content>

        <div class="input-container">
          <label for="name-owner" class="label">Ingrese el nombre del propietario del auto alquilado</label>
          <pv-inputtext id="name-owner" v-model="ownerName" class="input" type="text" placeholder="Nombre del propietario" />
          <pv-button id="button-dates-owner" label="BUSCAR" class="button" />
        </div>

        <pv-divider/>

        <div class="input-container">
          <label for="type-problem" class="label">Tipo de problema</label>
          <pv-inputtext id="type-problem" v-model="typeProblem" class="input" type="text" placeholder="Tipo de problema" />
        </div>

        <br>


        <br>

        <div class="input-container">
          <label for="description-problem" class="label">Descripción del problema</label>
          <pv-textarea id="description-problem" autoResize class="input" type="text" placeholder="Descripción del problema"></pv-textarea>
        </div>
        <br>
        <div class="button-container">
          <pv-fileupload
              ref="fileUpload"
              mode="basic"
              name="demo[]"
              url="./upload.php"
              accept="image/*"
              :maxFileSize="1000000"
              @upload="onUpload"
              :choose-label="'AGREGAR FOTOS'"
              :cancel-icon="'cancelIcon'"
          />
          <pv-button id="btn" label="ENVIAR" class="button" />
        </div>
      </template>
    </pv-card>
  </div>
  <footer-component></footer-component>
</template>

<script>
import FooterComponent from "@/components/footer/footer-component.vue";
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
export default {
  name: "maintenance-tenant-component",
  components: { FooterComponent, ToolbarBarTenant },
  data() {
    return {
      ownerName: "",
      typeProblem: "",
      titleProblem: "",
    };
  },
  mounted() {

    const fileUploadElement = this.$refs.fileUpload.$el;
    const chooseButton = fileUploadElement.querySelector(".p-button");
    if (chooseButton) {
      chooseButton.style.backgroundColor = "#40019A";
      chooseButton.style.color = "white";
      chooseButton.style.borderColor = "#0069d9";
    }
  },
}
</script>

<style scoped>
.container-cards-maintenance {
  display: flex;
  min-height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card-maintenance,
.card-evidence {
  flex: 1;
  margin: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}


footer-component {
  margin-top: auto;
}

@media (max-width: 768px) {

  .card-maintenance,
  .card-evidence {
    width: 100%;
  }
}

.title {
  color: #40019A;
  font-family: Poppins, serif;
}

.content {
  color: black;
  margin-bottom: 50px;
}

.footer-text {
  color: rebeccapurple;
}

.input-container {
  text-align: center;
}

.label {
  font-family: Poppins, serif;
  color: black;
  display: block;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  max-width: none;
}

.button-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  padding: 10px 20px;
  background-color: #40019A;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 10px;
}


</style>

