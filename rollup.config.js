import path from 'path';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.cjs.js',
      format: 'cjs',
    },
    {
      file: './lib/index.ems.js',
      format: 'es',
    },
  ],
  plugins: [
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
    }),
  ]
}