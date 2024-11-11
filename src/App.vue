<template>
    <div id="app">
      <AppHeader /> <!-- Header único -->
      <main>
        <router-view /> <!-- Aquí se mostrará el contenido de cada página según la ruta -->
      </main>
      <AppFooter /> <!-- Footer único -->
    </div>
  </template>
  
  <script>
  import AppHeader from "@/components/Header.vue";
  import AppFooter from "@/components/Footer.vue";
  
  export default {
    name: "App",
    components: {
      AppHeader,
      AppFooter,
    },
  };
  </script>
  
  <style>
  /* Estilos globales */
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    padding: 2rem;
    background-color: #f0f0f0;
  }
  
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #f8f8f8;
  }
  
  /* Estilos para hacer que la página sea responsive */
  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }
  }
  </style>