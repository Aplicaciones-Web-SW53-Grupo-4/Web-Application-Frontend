<template  >
  <div class="template-mayor">

  <div class="toolbar-1">
    <pv-toolbar class=" toolbar-1 text-white font-bold m-0 flex flex-wrap " role="navigation" aria-label="LOGIN">
      <template #start >
        <div class="imglogo">
        <pv-images src="https://i.postimg.cc/rF47Qr56/ai-de-logo-Mesa-de-trabajo-1.png" alt="logo" width="100"/>
        </div>
      </template>
    </pv-toolbar >
  </div>

  <br>
  <div class="card">
    <pv-card class="p-cardcontent"  >
      <template #header>
        <router-link to="/login-tenant"><pv-button  class="combobox"  id="btn" :label="$t('tenant')" aria-label="login tenant"/></router-link>
        <router-link to="/login-owner"> <pv-button class="combobox" id="btn" :label="$t('owner')" style="margin-left: 1em" aria-label="login owner" /></router-link>
      </template>
      <template #title >
          <span style="color:black;font-family: Poppins,serif ">
            {{ $t("welcome_login")  }}
          </span>
      </template>


      <template #content>

        <div class="inputp flex justify-content-center">
            <span>
              <label for="email" style="font-family: Poppins,serif ;color:black">{{ $t("email")  }} </label>
              <pv-inputtext id="email" v-model="username" aria-describedby="username-help" class="inputp" type="text"/>
              <small id="email-help" style="color:black;font-family: Poppins,serif ">Enter your email.</small>
            </span>
        </div>

        <br>

        <div class="inputp flex justify-content-center">
              <span >
                <label for="password" style="font-family: Poppins,serif;color:black">{{ $t("password")}}</label>
                <pv-inputtext id="password" v-model="password"  aria-describedby="username-help" class="inputp" type="password" />
                <small id="password-help" style="color:black;font-family: Poppins,serif ">Enter your password.</small>
              </span>
        </div>

      </template>
      <template #footer>
        <pv-button id="btnprimary" @click="login" style="text-align: center" :label="$t('access_login_tenant')"></pv-button> <br><br>
        <label style="font-family: Poppins,serif;color:black">No tienes una cuenta </label><router-link to="/Register-tenant"><a href="#"  class="ov-btn-slide-left" style="color:#40019A"><b> {{ $t("sign_up")}}</b></a></router-link>


      </template>
    </pv-card>
  </div>


  </div>
</template>

<script>
import {UserValidationRegisterService} from "@/services/user-validation-register.service";
import GlobalData from "@/services/eventBus";

export default {
  name: "login-Tenant-component",
  data() {
    return {
      username: "",
      password: "",
      security:new UserValidationRegisterService(),
    };
  },
  methods: {
    login() {
      //TODO
      this.security.login(this.username, this.password).then((response) => {
        //TODO buscar manera de pasar el id a otros componentes
        GlobalData.setUserId(response.id);
        console.log("ID user: ", response);
        this.$router.push("/home-tenant");
      }).catch((error) => {
        alert('invalid user');
      });
    }
  }
};

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
.template-mayor{
  background-image: url("https://i.postimg.cc/cCbb1f2m/pexels-pixabay-417192.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 98vh;
}
.toolbar-1{
  background-color: #14131B;
  padding:9px;
  border: none;
}
.p-cardcontent{
  width: 30em;height: 33em
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
#email{
  background-color: #D9D9D9;
  box-shadow: none;
  font-family: 'Poppins',sans-serif;
  border: none;
  color:black;
}
#password{
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
  font-family: 'Poppins',sans-serif;
  box-shadow: none;
}
#btn:focus{
 color:#40019A;
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

@media all and (max-width: 840px) {
  .imglogo{
    place-content: center;
  }
  .p-cardcontent{
    width: 20em;height: 35em;
  }
  .inputp{
    display: flex;
    min-width: 100px;

    text-align: start;
    justify-content: center;
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
