<script lang="ts">
import Vue from 'vue';
import { parseString, getUrlEmoji } from 'emo-lib';

export default /* #__PURE__ */ Vue.extend({
  name: 'Emo', // vue component name
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      parsedText: parseString(this.text),
    };
  },
  methods: {
    getUrlEmoji,
  },
});
</script>

<template>
  <span>
    <template v-for="text in parsedText">
      <!--eslint-disable-next-line-->
      <img
        v-if="text.type === 'emoji'"
        :src="getUrlEmoji(text.value)"
        :alt="text.value"
      />
      <template v-else>{{ text.value }}</template
      >&nbsp;</template
    >
    <!-- Ignore the weird formatting above, it wouldn't work otherwise -->
  </span>
</template>

<style scoped>
span {
  display: inline-block;
}

img {
  height: 1em;
  width: 1em;
}
</style>
