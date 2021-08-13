<template>
  <div>
    <h2>Tasks</h2>
    <input
      v-model="search"
      type="search"
      class="form-control mb-3"
      placeholder="Search Todos..."
      aria-label="Search Todos"
    />

    <!-- <pre>{{ todos }}</pre> -->
    <div>
      <div
        v-for="(todo, index) in filteredTodo"
        :key="index"
        v-rainbow
        class="card text-white"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ todo.title | toUppercase }}
          </h5>
          <p class="card-text">
            {{ todo.desc | snippet }}
            <router-link v-bind:to="'todo/' + todo.id">details</router-link>
          </p>
          <!-- <p v-if="todo.time">{{ todo.time.join(', ') }}</p>
          <p>Author: {{ todo.author }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: [],
      search: '',
    };
  },
  computed: {
    filteredTodo() {
      return this.todos.filter((todo) => todo.title.match(this.search));
    },
  },
  created() {
    this.$http
      .get(
        'https://nn-vue-playlist-90ca6-default-rtdb.firebaseio.com/todos.json'
      )
      .then((res) => res.json())
      .then((data) => {
        for (let key in data) {
          this.todos.push({ ...data[key], id: key });
        }
        this.todos = data.slice(0, 10);
      });
  },
  filters: {
    toUppercase(val) {
      return val.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.backgroundColor =
          '#' +
          Math.random()
            .toString()
            .slice(2, 8);
      },
    },
  },
};
</script>
<style>
.card {
  margin-bottom: 10px;
}
</style>
