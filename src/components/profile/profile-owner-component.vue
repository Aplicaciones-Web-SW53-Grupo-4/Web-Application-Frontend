<script>
import ToolbarBarOwner from "@/components/toolbar/toolbar-bar-owner-component.vue";
import FooterComponent from "@/components/footer/footer-component.vue";

export default {
  components: { FooterComponent, ToolbarBarOwner },
  data() {
    return {
      user: {
        rol: 'Propietario',
        name: 'John Doe',
        vhal: '1',
        apellidos: 'Quispe Mamani',
        email: 'johndoe@example.com',
        phone: '+12 34567890',
        imageUrl: 'https://via.placeholder.com/150',
      },
    };
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
  <toolbar-bar-owner></toolbar-bar-owner>
  <div class="user-profile">
    <div class="user-details">
      <h1>Perfil de Usuario</h1>
      <div class="user-info">
        <p><strong>Rol:</strong> {{ user.rol }}</p>
        <p><strong>Nombres:</strong> {{ user.name }}</p>
        <p><strong>Apellidos:</strong> {{ user.apellidos }}</p>
        <p><strong>Celular:</strong> {{ user.phone }}</p>
        <p><strong>Correo:</strong> {{ user.email }}</p>
        <p><strong>Contraseña:</strong> ********</p>
        <p><strong>Cantidad de vehiculos compartidos:</strong> {{ user.vhal }}</p>
      </div>
      <div class="user-buttons">
        <button @click="editProfile">Actualizar datos</button>
        <button @click="editProfile">Cerrar sesión</button>
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
}

.user-info p {
  font-size: 20px;
}

.user-buttons {
  display: flex;
  flex-direction: column;
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
