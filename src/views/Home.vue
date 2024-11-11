<template>
  <div class="container">
    <h1 class="title">Benvingut a la meva pàgina web</h1>
    <p class="description">
      Explora les funcionalitats i descobreix tot el que fa cadascuna de les pàgines
    </p>

    <div class="card-container">
      <div class="card" @click="navigateTo('/calculator')">
        <i class="icon calculator-icon">🧮</i>
        <h3>Calculadora</h3>
        <p>Fes càlculs ràpidament amb la nostra eina integrada.</p>
      </div>

      <div class="card" @click="navigateTo('/fetch-data')">
        <i class="icon fetch-icon">📊</i>
        <h3>Dades de Comments</h3>
        <p>Consulta dades externes amb la nostra API Fetch.</p>
      </div>

      <div class="card" @click="navigateTo('/axios-data')">
        <i class="icon axios-icon">📋</i>
        <h3>Dades d'Usuaris</h3>
        <p>Accedeix a les dades dels usuaris a través de l'API Axios.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
/* Contenidor amb un estil de fons amb gradient */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  color: #fff;
  text-align: center;
  padding: 20px;
}

/* Títol amb animació */
.title {
  font-size: 2.5em;
  margin: 0;
  animation: fadeInDown 1s ease-out;
}

/* Descripció amb estil i opacitat */
.description {
  font-size: 1.2em;
  margin-top: 10px;
  max-width: 600px;
  opacity: 0.9;
}

/* Contenidor de targetes */
.card-container {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Targetes amb estils atractius */
.card {
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Icones de les targetes */
.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
}

/* Animacions */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
