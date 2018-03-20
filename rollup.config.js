import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/mp-promisify.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}
