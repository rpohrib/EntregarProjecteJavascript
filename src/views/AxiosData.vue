<template>
    <div>
      <h2>Dades dels Usuaris (via Axios)</h2>
      <ul>
        <!-- Mostrar els usuaris de l'API -->
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AxiosData", // Nom del component
  
    data() {
      return {
        users: [], // Array per emmagatzemar els usuaris obtinguts de l'API
      };
    },
  
    // Quan el component es crea, es fa la petició a l'API
    async created() {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        this.users = response.data.users; // Assignem les dades d'usuaris a la variable 'users'
      } catch (error) {
        console.error("Error en obtenir les dades", error);
      }
    },
  };
  </script>
  
  <style scoped>
  /* Estils específics per a la pàgina AxiosData */
  h2 {
    color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
  }
  </style>
  