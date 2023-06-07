import React from 'react'
import { render } from '@testing-library/react'

import { Indicator } from './Indicator'

describe('Indicator', () => {
    test('renders a small warning', () => {
        render(<Indicator status='warning' size={'small'}/>)
    })

    test('renders a large failure', () => {
        render(<Indicator status='failure' size={'small'}/>)
    })
    
    test('renders a medium ', () => {
        render(<Indicator status='success' size={'small'}/>)
    })

    test('renders a default', () => {
        render(<Indicator />)
    })
})