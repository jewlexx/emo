import jsx from 'acorn-jsx';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  treeshake: true,
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  acornInjectPlugins: [jsx()],
  plugins: [typescript(), terser()],
  external: ['react', 'twemoji-parser'],
};

export default config;
