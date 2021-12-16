# emo

> Universal emojis that appear the same on every device

[![NPM](https://img.shields.io/npm/v/emo-react.svg?style=flat-square)](https://www.npmjs.com/package/emo-react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![BundlePhobia Minified Size](https://badgen.net/bundlephobia/min/emo-react?style=flat-square)](https://bundlephobia.com/package/emo-react)
[![BundlePhobia Minzipped Size](https://badgen.net/bundlephobia/minzip/emo-react?style=flat-square)](https://bundlephobia.com/package/emo-react)
[![BundlePhobia Dependency Count](https://badgen.net/bundlephobia/dependency-count/emo-react?style=flat-square)](https://bundlephobia.com/package/emo-react)

## Install

```bash
npm install --save emo-react
## Or with Yarn
yarn add emo-react
```

## Known Issues

- (React): There is currently a bug with SSR, that means in the development version, the images are not interpolated, and text does not match from client to server. However, in production, it is not an issue. As far as is currently known, this only affects NextJS, but may affect other frameworks too.

## Usage

```jsx
import React from 'react';
import Emoji from 'emo-react';

const Example = () => <Emo>🕊️</Emo>;
```

Would return:

[![🕊️](https://twemoji.maxcdn.com/v/latest/72x72/1f54a.png)](#)

On any and every device

## License

MIT © [jamesinaxx](https://github.com/jamesinaxx)
