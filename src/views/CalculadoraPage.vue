<template>
  <div>
    <h2>Calculadora</h2>
    <Calculadora />
  </div>
</template>

<script>
import Calculadora from "@/components/Calculadora.vue";

export default {
  name: "CalculadoraPage",
  components: { Calculadora },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}
</style>