import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Form } from './Form'

const meta: Meta<typeof Form> = {
    title: 'Form',
    component: Form,
}

export default meta
type Story = StoryObj<typeof Form>

export const Login: Story = {
    args: {
        label: 'Login',
    }
}