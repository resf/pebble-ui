import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [external(), postcss(), del()],
  external: Object.keys(pkg.peerDependencies || {}),
};
