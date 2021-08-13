<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <app-listing></app-listing>
      <app-form
        v-on:formInput="generatePreview"
        v-on:formSubmit="insertTodo"
      ></app-form>
    </div>
  </div>
</template>

<script>
import appForm from './form.vue';
import appListing from './listing.vue';
export default {
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      preview: {
        title: '',
        desc: '',
      },
      darkMode: false,
    };
  },
  components: {
    appForm,
    appListing,
  },
  methods: {
    generatePreview(emitdata) {
      this.preview = emitdata;
    },
    insertTodo(emitdata) {
      this.todos.push(emitdata);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
};
</script>
