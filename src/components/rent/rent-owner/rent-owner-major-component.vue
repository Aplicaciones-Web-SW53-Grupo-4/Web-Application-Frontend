

<template  >
  <div class="template-mayor">
    <toolbar-bar></toolbar-bar>
    <br>
    <div id="titulo-seccion">
      <label >ALQUILER</label>
      <div>
        <router-link to="/register-car"><pv-button   label="AGREGAR AUTO"  /></router-link>
      </div>

    </div>



      <pv-card  >
        <template #content>
          <div class="card_carousel">
            <pv-carousel :value="products" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" >
              <template #item="slotProps">
                <div class="flex flex-column align-items-center   text-center  ">
                  <div class="align-items-center justify-content-center w-6  ">
                    <img :src="['https://i.pinimg.com/564x/33/38/5e/33385e250c8208664b2f58b26e978a0f.jpg']" :alt="slotProps.data.brand" class="h-full w-full" />
                  </div>

                  <div class=" align-items-center justify-content-center ">
                    <br>
                    <h4 >BRAND: {{ slotProps.data.brand }}</h4>
                    <h4 >PRICE: S/{{ slotProps.data.price }} por día</h4>
                    <h4 >MODEL: {{ slotProps.data.model }}</h4>
                    <h4 >COLOR: {{ slotProps.data.color }}</h4>
                    <h4 >STATUS RENT: {{ slotProps.data.statusRequestString }}</h4>
                  </div>
                </div>
              </template>
            </pv-carousel >
          </div>
        </template>
      </pv-card>


  </div>
</template>




<script>


import UseApiService from "@/services/use-api-services";
import ToolbarBar from "@/components/toolbar/toolbar-bar-owner-component.vue";
import {AutomovileService} from "@/services/automovile.service";


export default {
  name: "rent-owner-major",
  components: {ToolbarBar},

  data() {
    return {
      email: "",
      password: "",
      products: null,
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ],
      useApiService: new UseApiService(),
    };
  },
  mounted() {
    new AutomovileService().getProductsSmall().then((response) => {
      (this.products = response.data)
    });
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
  display:inline-block;
}
.card{
  display: flex;
}
.p-cardcontent{
  background-color: whitesmoke;
  box-shadow: 3px 4px 4px #14131B;
  -webkit-justify-content: center;
  width: 30em;
  height: 33em;
  align-content: flex-start;
  display: flex;
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
.card_carousel{
  width: 100%;

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
