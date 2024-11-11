<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Inici</router-link></li>
          <li><router-link to="/calculator">Calculadora</router-link></li>
          <li><router-link to="/fetch-data">Dades Fetch</router-link></li>
          <li><router-link to="/axios-data">Dades Axios</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
  
  nav li {
    margin: 0;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
  }
  
  nav a:hover {
    background-color: #555;
  }
  </style>
  