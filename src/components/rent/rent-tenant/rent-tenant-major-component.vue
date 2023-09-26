

<template  >
  <div class="template-mayor">

   <toolbar-bar-tenant></toolbar-bar-tenant>
    <br>
    <div id="titulo-seccion">
      <label >ALQUILER</label>
    </div>
    <div class="card">
      <pv-card class="p-cardcontent" >
        <template #content>
          <router-link to="/online-payment"><pv-button  id="btnprimary" label="ALQUILAR NUEVO AUTO"  /></router-link>
        </template>
      </pv-card>
    </div>
  </div>
</template>


<script>
import UseApiService from "@/services/use-api-services";
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
export default {
  name: "rent-tenant-major",
  components: {ToolbarBarTenant},

  data() {
    return {
      email: "",
      password: "",
      useApiService: new UseApiService(),
    };
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
.p-cardcontent{
  width: 30em;
  height: 33em;

  align-content: flex-start;
  display: flex;
}
.card{
  display: flex;
}
.p-cardcontent{
  background-color: white;
  box-shadow: 3px 4px 4px #14131B;
  -webkit-justify-content: center;
}
#btnprimary{
  background-color: #40019A;
  color: white;
  box-shadow: transparent;
  border: none;

  margin-top: 150px;
  align-content: center;
}
#btnprimary:hover{
  background-color:#310077;
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
