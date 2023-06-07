import React from 'react'

import { Wrapper } from '../_Wrapper/Wrapper'
import type { InputProps } from '../../Input'
import styles from './input.module.css'

export const Address = ({
    id,
    label,
    placeholder,
    handleChange,
    value,
    errors,
    readOnly,
}: InputProps) => {
    return (
        <Wrapper label={label} id={id}>
            <input value={value || ''} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='text'
                onChange={handleChange} 
                onKeyDown={handleChange} 
                placeholder={placeholder} 
                readOnly={readOnly}
                autoComplete='on'/>
        </Wrapper>
    )
}