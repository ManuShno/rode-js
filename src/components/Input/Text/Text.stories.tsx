import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

const meta: Meta<typeof Text> = {
    title: 'Text',
    component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Labelled: Story = {
    args: {
        label: 'First Name',
        id: 'id-1',
        value: '',
        placeholder: '',
        readOnly: true,
        // handleChange={e => void},
    }
}

export const Unlabelled: Story = {
    args: {
        label: undefined,
        id: 'id-1',
        value: '',
        placeholder: '',
        readOnly: true,
        // handleChange={e => void},
    }
}
