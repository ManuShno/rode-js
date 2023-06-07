import React from 'react'

import { Wrapper } from '../_Wrapper/Wrapper'
import type { InputProps } from '../../Input'

import styles from '../Input.module.css'

declare type TextInputProps = InputProps & {
    
}

export const Text = ({
    id,
    label,
    value='',
    placeholder='Enter Value',
    readOnly=true,
    handleChange
}: TextInputProps) => {
    return (
        <Wrapper id={id} label={label}>
            <input id={id}
                type={'text'}
                key={id}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                readOnly={readOnly}
                className={styles.input}/>
        </Wrapper>
    )
}