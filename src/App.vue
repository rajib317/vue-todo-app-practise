<template>
  <div v-theme="siteName.darkmode">
    <app-header
      v-on:darkmodeswitch="siteName.darkmode = !siteName.darkmode"
      v-bind:sitename="siteName"
    ></app-header>
    <!-- <app-body></app-body> -->
    <div class="col-8 m-auto">
      <router-view></router-view>
    </div>
    <app-footer v-bind:sitename="siteName"></app-footer>
  </div>
</template>

<script>
import appHeader from './components/header.vue';
import appFooter from './components/footer.vue';

export default {
  data: function() {
    return {
      siteName: { name: 'Todo App', year: 2021, darkmode: false },
    };
  },
  components: {
    appHeader,
    appFooter,
  },
};
</script>
