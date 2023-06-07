import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Indicator as IndicatorComponent } from './Indicator'

const meta: Meta<typeof IndicatorComponent> = {
    title: 'Indicator',
    component: IndicatorComponent,
    argTypes: {
        status: {
            options: [ 'success', 'warning', 'failure' ],
            control: { type: 'radio' },
        },
        size: {
            options: [ 'small', 'medium', 'large' ],
            control: { type: 'radio' },
        },
    },
}

export default meta
type Story = StoryObj<typeof IndicatorComponent>

export const Indicator: Story = {
    args: {
        status: 'warning',
        size: 'large'
    }
}