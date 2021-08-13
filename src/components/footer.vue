<template>
  <footer>Copyright &copy; {{ sitename.year }} | {{ sitename.name }}</footer>
</template>

<script>
export default {
  props: {
    sitename: {
      name: String,
      year: Number,
    },
  },
};
</script>
<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  color: #fff;
  padding: 10px;
}
</style>
