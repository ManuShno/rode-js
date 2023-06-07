import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
    title: 'Tooltip',
    component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
    args: {
        // children: <DefaultForm />
    }
}
