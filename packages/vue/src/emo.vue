<script lang="ts">
import Vue from 'vue';

export default /*#__PURE__*/ Vue.extend({
  name: 'Emo', // vue component name
  props: ['emoji'], // props
  methods: {
    parse: (emoji: string): string => {
      if (emoji.length === 1) {
        return emoji.charCodeAt(0).toString(16);
      }
      const comp =
        (emoji.charCodeAt(0) - 0xd800) * 0x400 +
        (emoji.charCodeAt(1) - 0xdc00) +
        0x10000;
      return (comp < 0 ? emoji.charCodeAt(0) : comp).toString(16);
    },
  },
});
</script>

<template>
  <img
    :src="`https://twemoji.maxcdn.com/v/latest/svg/${parse(emoji)}.svg`"
    :alt="emoji"
  />
</template>

<style scoped>
img {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.1em;
  background-image: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
