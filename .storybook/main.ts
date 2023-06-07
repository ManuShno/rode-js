import { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: [
        '../public',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-css-modules',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            fastRefresh: true
        },
    },
    babel: async (options) => ({
        ...options,
    }),
    webpackFinal: async (config, { configType }) => {
        return config
    }
}

export default config