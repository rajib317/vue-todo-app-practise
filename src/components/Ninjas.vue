<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Ninjas',
  data: function() {
    return {
      title: 'The perks of being a wallflower!',
    };
  },
  props: {
    author: String,
  },
};
</script>
<style scoped>
h3 {
  color: green;
}
</style>
