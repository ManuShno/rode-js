import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button as ButtonCommponent } from './Button'

const meta: Meta<typeof ButtonCommponent> = {
    title: 'Button',
    component: ButtonCommponent,
    argTypes: {
        type: {
            options: [ 'button', 'submit', 'cancel', 'inactive', 'boolean' ],
            control: { type: 'radio' },
        },
    },
}

export default meta
type Story = StoryObj<typeof ButtonCommponent>

export const Button: Story = {
    args: {
        label: 'Button',
        type: 'button'
    }
}