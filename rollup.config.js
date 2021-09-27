import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [typescript()],
};

export default config;
