import resolve from 'rollup-plugin-node-resolve';
export default {
  input: 'esm/index.js',
  plugins: [
    resolve()
  ],
  output: {
    exports: 'named',
    file: 'index.js',
    format: 'iife',
    name: 'saferDOM'
  }
};
