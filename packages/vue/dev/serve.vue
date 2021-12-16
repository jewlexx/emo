<script lang="ts">
import Vue from 'vue';
import Emo from '@/emo.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Emo
  }
});
</script>

<template>
  <div id="app">
    <emo />
  </div>
</template>
