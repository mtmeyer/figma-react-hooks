import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import autoExternal from 'rollup-plugin-auto-external';

const production = !process.env.ROLLUP_WATCH;
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      // autoExternal(),
      peerDepsExternal(),

      resolve(),

      commonjs(),

      typescript({ sourceMap: !production }),

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
