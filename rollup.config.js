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
    exports: 'default',
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({
      sourceMap: false,
    }),
    terser(),
  ],
  external: ['react'],
};

export default config;
