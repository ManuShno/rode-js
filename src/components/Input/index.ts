import type { ErrorProps } from '../Error'

export declare type InputProps = {
    id: string
    label?: string
    value?: string | number
    placeholder?: string
    errors?: ErrorProps[]
    readOnly: boolean
    handleChange: (e: React.ChangeEvent | React.KeyboardEvent) => void
    ind_zero: boolean
    domain?: string
}

export { Text } from './Text'