import listTodo from './components/listing.vue';
import form from './components/form.vue';
import singleTodo from './components/singleTodo.vue';
export default [
  {
    path: '/',
    component: listTodo,
  },
  {
    path: '/add',
    component: form,
  },
  {
    path: '/todo/:id',
    component: singleTodo,
  },
];
