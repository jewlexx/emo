import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import jsx from 'acorn-jsx';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  treeshake: true,
  input: 'src/index.tsx',
  output: {
    sourcemap: true,
    exports: 'default',
    dir: 'dist',
    format: 'cjs',
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({
      sourceMap: true,
    }),
    terser({
      compress: true,
    }),
  ],
  external: ['react'],
};

export default config;
