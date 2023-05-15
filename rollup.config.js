import { defineConfig } from 'rollup'
import iconPlugin from 'unplugin-icons/rollup'
import typescriptPlugin from '@rollup/plugin-typescript'

const config = defineConfig({
  input: ['src/index.tsx'],
  output: {
    format: 'es',
    dir: 'dist',
    preserveModules: true,
  },
  plugins: [
    typescriptPlugin(),
    iconPlugin({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  external: [
    'react/jsx-runtime',
    'react',
  ],
})

export default config
