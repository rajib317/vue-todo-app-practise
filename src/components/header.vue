<template>
  <nav v-bind:class="navClasses">
    <!-- <nav v-if="siteName.darkmode" class="navbar navbar-expand-lg navbar-light bg-light"> -->
    <div class="container-fluid">
      <a v-on:click.prevent="changeTitle" class="navbar-brand" href="#">{{
        sitename.name
      }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link" exact>Add Todo</router-link>
          </li>
        </ul>
        <div class="form-check form-switch">
          <input
            v-on:click="darkmodeswitch"
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label
            v-bind:class="{
              'form-check-label': true,
              'text-dark': !sitename.darkmode,
            }"
            for="flexSwitchCheckDefault"
            >Dark Mode</label
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import { globalState } from '../main';
export default {
  props: {
    sitename: {
      name: String,
      year: Number,
      darkmode: Boolean,
    },
  },
  methods: {
    changeTitle() {
      this.sitename.name = 'Changed';
    },
    darkmodeswitch() {
      this.$emit('darkmodeswitch');
    },
  },
  computed: {
    navClasses() {
      return {
        navbar: true,
        'navbar-expand-lg': true,
        'navbar-light': !this.sitename.darkmode,
        'navbar-dark': this.sitename.darkmode,
        'bg-light': !this.sitename.darkmode,
        'bg-dark': this.sitename.darkmode,
      };
    },
  },
};
</script>
<style scoped>
#header {
  background-color: aqua;
  color: black;
  text-align: center;
  padding: 20px;
}
.router-link-active {
  color: #000 !important;
}
</style>
