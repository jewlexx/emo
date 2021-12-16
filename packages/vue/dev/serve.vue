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
  <div>
    <h1>
      <emo text="❄️ Things are looking kinda icy outside ❄️" />
    </h1>
    <h1>
      <emo
        text="🎉 Thank god these emojis are going to display the same everywhere 🎉"
      />
    </h1>
    <h1>
      <emo text="🥲 I don't know what I would do otherwise 🥲" />
    </h1>
    <h2>
      <emo text="Developed with ❤️ by" />
      <a href="https://github.com/jamesinaxx" target="_blank" rel="noreferrer">
        jamesinaxx
      </a>
    </h2>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: #fafafa;
}

a {
  color: rgb(13, 212, 212);
  text-decoration: none;
  transition: all 100ms ease-in-out;
  -webkit-transition: all 100ms ease-in-out;
  -moz-transition: all 100ms ease-in-out;
  -ms-transition: all 100ms ease-in-out;
  -o-transition: all 100ms ease-in-out;
}

a:hover {
  color: rgb(32, 238, 238);
}

a:active {
  color: rgb(25, 153, 153);
}
</style>
