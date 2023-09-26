<template>
  <footer class="footer">
    <div class="copyright">
      &copy; {{ currentYear }} SpeedDriving. Todos los derechos reservados
    </div>
    <div class="links">
      Política de Privacidad | Términos y Condiciones
    </div>
    <div class="updated">
    </div>
    <div class="contact">
      Para obtener permisos o consultas, comuníquese con <a href="mailto:contacto@example.com">contacto@example.com</a>.
    </div>
    <div class="disclaimer">
      Tenga en cuenta que la información proporcionada en este sitio web es solo para fines educativos y no constituye asesoramiento legal.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
}

.copyright {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.updated {
  font-style: italic;
  font-size: 12px;
  margin-bottom: 10px;
}

.disclaimer {
  font-size: 12px;
  margin-top: 10px;
}

.contact a {
  color: #fff;
  text-decoration: underline;
}
</style>
