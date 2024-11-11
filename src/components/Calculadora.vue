<template>
    <div class="calculator">
      <input type="text" v-model="display" readonly />
      <div class="buttons">
        <button @click="clear">C</button>
        <button @click="appendValue('7')">7</button>
        <button @click="appendValue('8')">8</button>
        <button @click="appendValue('9')">9</button>
        <button @click="operate('/')">/</button>
        <button @click="appendValue('4')">4</button>
        <button @click="appendValue('5')">5</button>
        <button @click="appendValue('6')">6</button>
        <button @click="operate('*')">*</button>
        <button @click="appendValue('1')">1</button>
        <button @click="appendValue('2')">2</button>
        <button @click="appendValue('3')">3</button>
        <button @click="operate('-')">-</button>
        <button @click="appendValue('0')">0</button>
        <button @click="appendValue('.')">.</button>
        <button @click="calculate">=</button>
        <button @click="operate('+')">+</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CalculadoraPage",
    data() {
      return {
        display: "",
      };
    },
    methods: {
      appendValue(value) {
        this.display += value;
      },
      operate(op) {
        this.display += ` ${op} `;
      },
      clear() {
        this.display = "";
      },
      calculate() {
        try {
          this.display = eval(this.display).toString();
        } catch {
          this.display = "Error";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .calculator {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0;
    text-align: center;
  }
  
  input[type="text"] {
    width: 98%;
    padding: 4px;
    font-size: 1.5em;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
    text-align: right;
    background-color: #fff;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  
  button {
    padding: 20px;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:active {
    background-color: #003f7f;
  }
  </style>