<template>
  <div>
    <!-- <form v-on:keyup="emitPreview"> -->
    <form>
      <div class="mb-3">
        <label for="todo-title" class="form-label">Title</label>
        <input
          v-model.lazy="todo.title"
          type="email"
          id="todo-title"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="todomassage" class="form-label">Message</label>
        <textarea
          v-model.lazy="todo.desc"
          class="form-control"
          id="todo-massage"
          rows="3"
        ></textarea>
      </div>
      <div class="mb-3">
        Need to do During <br />
        <div class="form-check-inline">
          <input
            v-model="todo.time"
            class="form-check-input"
            type="checkbox"
            value="Morning"
            id="Morning"
            checked
          />
          <label class="form-check-label" for="Morning">
            Morning
          </label>
        </div>
        <div class="form-check-inline">
          <input
            v-model="todo.time"
            class="form-check-input"
            type="checkbox"
            value="Afternoon"
            id="Afternoon"
          />
          <label class="form-check-label" for="Afternoon">
            Afternoon
          </label>
        </div>
        <div class="form-check-inline">
          <input
            v-model="todo.time"
            class="form-check-input"
            type="checkbox"
            value="Night"
            id="Night"
          />
          <label class="form-check-label" for="Night">
            Night
          </label>
        </div>
      </div>

      <div>
        <label>Author</label>
        <select v-model="todo.author">
          <option
            v-for="author in authors"
            :key="author"
            v-bind:value="author"
            >{{ author }}</option
          >
        </select>
      </div>

      <button v-on:click.prevent="submitTodo" class="btn btn-primary mt-2">
        Add Todo
      </button>
      <div v-if="submitted" class="alert alert-success" role="alert">
        Todo Added !
      </div>
    </form>

    <div
      v-if="todo.title || todo.desc"
      class="card m-auto mt-5"
      style="width: 18rem;"
    >
      <div class="card-header">Task Preview</div>
      <div class="card-body">
        <h5 class="card-title">{{ todo.title }}</h5>
        <p class="card-text">
          {{ todo.desc }}
        </p>
        <p>During: {{ todo.time.join(', ') }}</p>
        <p>Author: {{ todo.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: '',
        desc: '',
        status: false,
        time: [],
        author: '',
      },
      authors: ['Rajib', 'Dilip'],
      submitted: false,
    };
  },
  methods: {
    emitPreview(e) {
      const target = e.target;
      if (target.id === 'todo-title') this.preview.title = target.value;
      if (target.id === 'todo-massage') this.preview.desc = target.value;
      this.$emit('formInput', this.preview);
    },
    submitTodo() {
      this.$http
        .post(
          'https://nn-vue-playlist-90ca6-default-rtdb.firebaseio.com/todos.json',
          this.todo
        )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.submitted = true;
          setTimeout(() => (this.submitted = false), 2000);
        });
      this.$emit('formSubmit', this.todo);
    },
  },
};
</script>
