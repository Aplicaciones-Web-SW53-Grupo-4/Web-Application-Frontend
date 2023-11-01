

<template>
  <div class="template-mayor">
  <div class="toolbar-1">
    <pv-toolbar class=" toolbar-1 text-white font-bold m-0 flex flex-wrap " role="navigation" aria-label="Toolbar">
      <template #start >
        <pv-images src="https://i.postimg.cc/rF47Qr56/ai-de-logo-Mesa-de-trabajo-1.png" alt="logo" width="100"/>
      </template>
    </pv-toolbar >
  </div>


  <div >
    <!--      <pv-images src="https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg" alt="Image" width="1000" />-->
  </div>
  <br>
  <div class="card">
    <pv-card class="p-cardcontent" style="width: 30em;height: 72em" >
      <template #header>
        <router-link to="/register-tenant"><pv-button id="btn" :label="$t('tenant')"/></router-link>
        <router-link to="/register-owner"> <pv-button id="btn" :label="$t('owner')"  style="margin-left: 1em" /></router-link>

      </template>
      <template #title >
          <span style="color:black;font-family: Poppins,serif ">
            Regístrate
          </span>
      </template>

      <template #content>

        <div class="inputp flex justify-content-center">
            <span>
              <label for="email" style="font-family: Poppins,serif ;color:black">{{$t("email")}} </label>
              <pv-inputtext id="labels" v-model="username" aria-describedby="Ingrese su correo" class="inputp" type="text"/>
              <small id="email-help" style="color:black;font-family: Poppins,serif ;font-size: 10px">Enter your email.</small>
            </span>


        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">{{$t("password")}}</label>
                <pv-inputtext id="labels" v-model="password" aria-describedby="Ingrese su contraseña" class="inputp" type="password" />
                <small id="password-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your password.</small>

              </span>
        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="name" style="font-family: Poppins,serif;color:black">{{$t("names")}}</label>
                <pv-inputtext id="labels" v-model="name"  aria-describedby="Ingrese su nombre" class="inputp" type="text" />
                <small id="name-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your name.</small>

              </span>
        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="lastname" style="font-family: Poppins,serif;color:black">{{$t("lastname")}}</label>
                <pv-inputtext id="labels" v-model="lastname"  aria-describedby="Ingrese su apellido" class="inputp" type="text" />
                <small id="lastname-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your lastname.</small>

              </span>
        </div>
        <div class="inputp flex justify-content-center">
              <span >
                <label for="phone" style="font-family: Poppins,serif;color:black">{{$t("phone")}}</label>
                <pv-inputtext id="labels" v-model="phone"  aria-describedby="Ingrese su telefono" class="inputp" type="number" />
                <small id="phone-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your phone.</small>

              </span>
        </div>
      
          <div class="inputp flex justify-content-center">
                <span >
                  <label for="" style="font-family: Poppins,serif;color:black">Departamento</label>
                  <pv-inputtext id="labels" v-model="address.department"  aria-describedby="Ingrese su país" class="inputp" type="text" />
                  <small id="country-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your department.</small>

                </span>
          </div>
            <div class="inputp flex justify-content-center">
                <span >
                  <label for="" style="font-family: Poppins,serif;color:black">Distrito</label>
                  <pv-inputtext id="labels" v-model="address.district"  aria-describedby="Ingrese su distrito" class="inputp" type="text" />
                  <small id="country-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your district.</small>

                </span>
          </div>
            <div class="inputp flex justify-content-center">
                <span >
                  <label for="" style="font-family: Poppins,serif;color:black">Provincia</label>
                  <pv-inputtext id="labels" v-model="address.province"  aria-describedby="Ingrese su provincia" class="inputp" type="text" />
                  <small id="country-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your province.</small>
                </span>
          </div>
        <div class="inputp flex justify-content-center">
                <span >
                  <label for="" style="font-family: Poppins,serif;color:black">Dirección</label>
                  <pv-inputtext id="labels" v-model="address.street"  aria-describedby="Ingrese su dirección" class="inputp" type="text" />
                  <small id="country-help" style="color:black;font-family: Poppins,serif;font-size: 10px ">Enter your street.</small>

                </span>
          </div>
      </template>
      <template #footer>
        <pv-button id="btnprimary" @click="register" :label="$t('register_login_owner')"  /><br><br>
        <label style="font-family: Poppins,serif;color:black">{{$t("question_tell")}} </label> <router-link to="/login-owner"><a href="#"  class="ov-btn-slide-left" style="color:#40019A"><b> {{$t("login")}}</b></a></router-link><br><br>
        <label style="font-family: Poppins,serif;color:black">{{$t("Non_owner")}} </label> <router-link to="/register-tenant"><a href="#"  class="ov-btn-slide-left" style="color:#40019A"><b>{{$t("register_login_tenant")}}</b></a></router-link>



      </template>
    </pv-card>
  </div>
  </div>
</template>


<script>
import UseApiService from "@/services/use-api-services";
import {UserValidationRegisterService} from "@/services/user-validation-register.service";
export default {
 
  name: "register-owner-component",
  data() {
    return {
      username: "",
      password: "",
      name:"",
      lastname:"",
      phone: "",
      address: {
        department: "",
        province: "",
        district: "",
        street: "",
      },
      country: "",
      userType:1,
      useApiService: new UseApiService(),
      security: new UserValidationRegisterService(),

    };
  },
   methods: {
    register() {
      //TOD
       this.security.register(this.username, this.password,
         this.userType, this.name, this.lastname, this.address,this.phone).then((response) => {
        if (response.data) {
          this.$router.push("/home-owner");
        } else {
          alert('invalid user');
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};

</script>


<style scoped>
.template-mayor{
  background-image: url("https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1300px;
}
.toolbar-1{
  background-color: #14131B;
  padding:9px;
  border: none;
  position: sticky;
  top: 0;
}
.card{
  display: flex;
  justify-content: center;
  text-align: center;


}
.p-cardcontent{
  background-color: white;

}
.inputp{
  display: flex;
  min-width: 300px;
  max-width: 100%;
  text-align: start;
  justify-content: center;
}

#labels{
  background-color: #D9D9D9;
  box-shadow: none;
  border: none;
  font-family: 'Poppins',sans-serif;
  color:black;
}
#btn{
  margin-top: 2em;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: black;
  transition: .2s ease-in-out all;
  font-family: 'Poppins',sans-serif;
  box-shadow: none;
}
#btn:focus{
  color:#40019A;
}


.card{
  display: flex;
  justify-content: center;
  text-align: center;


}
.p-cardcontent{
  background-color: white;

}
.inputp{
  display: flex;
  min-width: 300px;
  max-width: 100%;

  text-align: start;
  justify-content: center;
}
#btn{
  margin-top: 2em;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: black;
  font-family: 'Poppins',sans-serif;
  box-shadow: none;
}
#btn:hover{
  color:#40019A;
  background-color: transparent;
  border:rebeccapurple;
  box-shadow: none;

}
#btnprimary{
  background-color: #40019A;
  color: white;
  box-shadow: transparent;
  border: transparent;
  width: 19em;
  height: 2.5em;
}
#btnprimary:hover{
  background-color:#310077;
}
</style>
