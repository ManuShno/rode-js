import React from 'react'

import { Wrapper } from '../_Wrapper/Wrapper'
import type { InputProps } from '../../Input'
import styles from './input.module.css'

export const Amount = ({
    id,
    label,
    placeholder='',
    domain='0|100',
    ind_zero,
    handleChange,
    value,
    errors,
    readOnly,
}: InputProps) => {
    return (
        <Wrapper label={label} id={id}>
            <input value={ind_zero ? value === 0 ? 0 : value || '' : value || ''} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='text'
                min={domain.split('|')[0]}
                max={domain.split('|')[1]}
                onChange={handleChange} 
                placeholder={placeholder} 
                readOnly={readOnly}
                autoComplete='on'/>
        </Wrapper>
    )
}