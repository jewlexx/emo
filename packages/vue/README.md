# emo

> Universal emojis that appear the same on every device

[![NPM](https://img.shields.io/npm/v/emo-vue.svg?style=flat-square)](https://www.npmjs.com/package/emo-vue)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![BundlePhobia Minified Size](https://badgen.net/bundlephobia/min/emo-vue?style=flat-square)](https://bundlephobia.com/package/emo-vue)
[![BundlePhobia Minzipped Size](https://badgen.net/bundlephobia/minzip/emo-vue?style=flat-square)](https://bundlephobia.com/package/emo-vue)
[![BundlePhobia Dependency Count](https://badgen.net/bundlephobia/dependency-count/emo-vue?style=flat-square)](https://bundlephobia.com/package/emo-vue)

## Install

```bash
npm install --save emo-vue
## Or with Yarn
yarn add emo-vue
```

## Usage

```vue
<script lang="ts">
import Vue from 'vue';
import Emo from 'emo-vue';

export default Vue.extend({
  name: 'Demo',
  components: {
    Emo,
  },
});
</script>

<template>
  <emo text="🕊️" />
</template>
```

Would return:

[![🕊️](https://twemoji.maxcdn.com/v/latest/72x72/1f54a.png)](#)

On any and every device

## License

MIT © [jamesinaxx](https://github.com/jamesinaxx)
