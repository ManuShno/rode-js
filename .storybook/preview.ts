import { Preview } from '@storybook/react'

import '../public/stylesheet.css'

const preview: Preview = {
    parameters: {
        actions: {
            argTypesRegex: '^on[A-Z].*'
        }
    }
}

export default preview