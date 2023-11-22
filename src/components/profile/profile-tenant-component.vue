<script>
import ToolbarBarOwner from "@/components/toolbar/toolbar-bar-owner-component.vue";
import FooterComponent from "@/components/footer/footer-component.vue";
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";
import GlobalData from "@/services/eventBus";
import UseApiService from "@/services/use-api-services";
export default {
  components: {ToolbarBarTenant, FooterComponent, ToolbarBarOwner },
  data() {
    return {
      user: {
        rol: '',
        name: '',
        vhal: '',
        lastname: '',
        email: '',
        phone: '',
        imageUrl: 'https://via.placeholder.com/150',
      },
      userId:""
    };
  },
  mounted() {
    console.log("Entró");
    this.userId = GlobalData.gettenantId();
    console.log("Userid: ",this.userId);
    new UseApiService().getProfileByUserId(this.userId).then((response) => {
      this.user.name = response.data.name;
      this.user.role = "Propietario";
      this.user.lastname = response.data.lastname;
      this.user.email = response.data.username;
      this.user.phone = response.data.phone;
      this.user.vhal = response.data.automobiles.length;
      this.user.imageUrl = response.data.image;
    });
  },
  methods: {
    openImageInput() {
      this.$refs.imageInput.click();
    },
    handleImageChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.user.imageUrl = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
      }
    },
    editProfile() {
    },
  },
};
</script>

<template>
  <toolbar-bar-tenant></toolbar-bar-tenant>
  <div class="user-profile">
    <div class="user-details">
      <h1>Perfil de Usuario</h1>
      <div class="user-info">
        <p><strong>Rol:</strong>Arrendatario</p>
        <p><strong>Nombres:</strong> {{ user.name }}</p>
        <p><strong>Apellidos:</strong> {{ user.lastname }}</p>
        <p><strong>Celular:</strong> {{ user.phone }}</p>
        <p><strong>Correo:</strong> {{ user.email }}</p>
      </div>
      <div class="user-buttons">
        <router-link to="/login-tenant"><pv-button  id="btn" :label="$t('logout')"  /></router-link>
      </div>
    </div>
    <div class="profile-image">

      <input type="file" accept="image/*" @change="handleImageChange" style="display: none" ref="imageInput" />
      <img :src="user.imageUrl" alt="Perfil del usuario" @click="openImageInput" /><br>
      <button @click="openImageInput">Cambiar foto de perfil</button>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<style scoped>
.user-profile {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}

.user-details {
  flex: 0.3;
  text-align: left;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.user-info {
  flex: 1;
  margin-bottom: 20px;
  font-family: 'Poppins',sans-serif;
}

.user-info p {
  font-size: 20px;

}

.user-buttons {
  display: flex;
  flex-direction: column;
  max-width:60em;
}

.user-buttons button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

.profile-image {
  flex: 0.8;
  text-align: center;
  background-color: #F5F5F5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-image img {
  width: 350px;
  border-radius: 50%;
  cursor: pointer;
}

h2 {
  font-size: 24px;
  margin: 0;
}

button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
  width: 50%;
}

button:hover {
  background-color: #0056b3;
}
</style>
