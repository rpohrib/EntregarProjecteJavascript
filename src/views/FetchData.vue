<template>
    <div>
      <h2>Dades de Comments API (fetch)</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.body }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: [],
      };
    },
    async created() {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      this.comments = await response.json();
    },
  };
  </script>
  