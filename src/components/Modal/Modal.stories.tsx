import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { Login } from '../Form/Form.stories'

const meta: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
    args: {
        children: <Login />
    }
}
