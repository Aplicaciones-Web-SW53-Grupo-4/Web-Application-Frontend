
<template>
  <div>
    <toolbar-bar-tenant></toolbar-bar-tenant>
    <h1 style="font-family: 'Arial Black', sans-serif; color: #00BFFF;">Solicitudes de Autos</h1>
    <div class="request-list">
      <div v-for="request in carRequests" :key="request.id" class="request-card">
        <div class="avatar">
          <img :src="request.image" alt="Car Avatar" />
        </div>
        <div class="request-details">
          <h3 style="font-family: 'Arial Black', sans-serif; color: #00BFFF;">{{ request.car }}</h3>
          <p> Estado de Solicitud: {{ request.status }}</p>
          <p>Propietario: {{ getRandomOwnerName() }}</p>
          <p>Fecha de Solicitud: {{ request.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarBarTenant from "@/components/toolbar/toolbar-bar-tenant-component.vue";

export default {
  name: "RequestTenantComponent",
  components: { ToolbarBarTenant },
  data() {
    return {
      carRequests: [
        { id: 1, car: "Toyota Prius", status: "Aceptado", image: "car1.jpg", date: "2023-09-15" },
        { id: 2, car: "Honda Civic", status: "Rechazado", image: "car2.jpg", date: "2023-09-14" },
        { id: 3, car: "Ford Mustang", status: "En Espera", image: "car3.jpg", date: "2023-09-13" },
        { id: 4, car: "Chevrolet Camaro", status: "En Espera", image: "car4.jpg", date: "2023-09-12" },
        { id: 5, car: "BMW X5", status: "Aceptado", image: "car5.jpg", date: "2023-09-11" },
        { id: 6, car: "Mercedes-Benz C-Class", status: "Rechazado", image: "car6.jpg", date: "2022-09-10" },
        { id: 7, car: "Audi A4", status: "En Espera", image: "car7.jpg", date: "2023-09-09" },
      ],
      ownerNames: ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Davis", "Robert Wilson"],
    };
  },
  methods: {
    getRandomOwnerName() {
      const randomIndex = Math.floor(Math.random() * this.ownerNames.length);
      return this.ownerNames[randomIndex];
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arial+Black&display=swap');

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