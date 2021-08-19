// import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import autoExternal from 'rollup-plugin-auto-external';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'bundle',
      file: 'dist/bundle.js',
      format: 'umd'
    },
    plugins: [
      autoExternal(),

      typescript({ sourceMap: !production }),

      commonjs(),

      // If dev mode, serve and livereload
      !production && serve(),
      !production && livereload('dist'),

      // If prod mode, minify
      production && terser()
    ],
    watch: {
      clearScreen: true
    }
  }
];

function serve() {
  return {
    writeBundle() {}
  };
}
