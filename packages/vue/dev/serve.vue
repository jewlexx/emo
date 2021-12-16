<script lang="ts">
import Vue from 'vue';
import Emo from '../src/emo.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Emo,
  },
});
</script>

<template>
  <div id="app">
    <emo text="Yooo 😃 it is working!!!" />
  </div>
</template>
