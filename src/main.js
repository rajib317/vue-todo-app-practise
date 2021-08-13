import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
// import Ninjas from './components/Ninjas.vue';
import routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history' });
// Custom Directives
Vue.directive('theme', {
  update(el, binding) {
    if (binding.value) {
      console.log(binding.value);
      el.style.backgroundColor = '#000';
      el.style.color = '#fff';
    } else {
      el.style.backgroundColor = '#fff';
      el.style.color = '#000';
    }
  },
});
// Done locally now.
// Vue.directive('rainbow', {
//   // life-cycle hook
//   // bind(el, binding, vnode) {
//   bind(el) {
//     el.style.backgroundColor =
//       '#' +
//       Math.random()
//         .toString()
//         .slice(2, 8);
//   },
// });

// Filters
// registered locally now
// Vue.filter('toUppercase', function(val) {
//   return val.toUpperCase();
// });
//Registered Globally here, but we can do it locally on listing.vue
Vue.filter('snippet', function(val) {
  return val.slice(0, 99) + '...';
});

export const globalState = new Vue();

Vue.config.productionTip = false;
// Vue.component('hote', Ninjas);
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
