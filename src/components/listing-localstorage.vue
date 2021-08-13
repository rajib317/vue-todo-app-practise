<template>
  <div class="col-6">
    <h2>Tasks</h2>

    <div
      v-if="preview.title || preview.desc"
      class="card"
      style="width: 18rem;"
    >
      <div class="card-header">Task Preview</div>
      <div class="card-body">
        <h5 class="card-title">{{ preview.title }}</h5>
        <p class="card-text">
          {{ preview.desc }}
        </p>
      </div>
    </div>
    <div>
      <div
        v-for="(todo, index) in todos"
        :key="index"
        class="card text-white bg-primary"
        style="width: 18rem;"
      >
        <div class="card-body">
          <h5 class="card-title">{{ todo.title }}</h5>
          <p class="card-text">
            {{ todo.desc }}
          </p>
          <p v-if="todo.time">{{ todo.time.join(', ') }}</p>
          <p>Author: {{ todo.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    preview: {
      title: String,
      desc: String,
    },
    todos: {
      title: String,
      desc: String,
    },
  },
  created() {
    this.$http
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
};
</script>
<style>
.card {
  margin-bottom: 20px;
}
</style>
