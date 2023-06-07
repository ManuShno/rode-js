import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

import packageJson from './package.json' assert { type: 'json' }

export default [
    {
        input: 'src/index.ts',
        external: [
            ...Object.keys(packageJson.peerDependencies || {})
        ],
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                // preserveModules: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
                // preserveModules: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss(),
            terser(),
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [
            { file: 'dist/index.d.ts', format: 'esm' }
        ],
        plugins: [
            dts()
        ],
        external: [
            /\.css$/
        ],
    }
]