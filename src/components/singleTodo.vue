<template>
  <div id="single-todo">
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.desc }}</p>
    <p>Author: {{ todo.author }}</p>
    <p>Time: {{ todo.time.join(', ') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      todo: {},
    };
  },
  created() {
    this.$http
      .get(
        'https://nn-vue-playlist-90ca6-default-rtdb.firebaseio.com/todos/' +
          this.id +
          '.json'
      )
      .then((res) => res.json())
      .then((data) => (this.todo = data))
      .catch((err) => console.error(err));
  },
};
</script>
