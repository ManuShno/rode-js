import React from 'react'

import type { InputProps } from '../Input'
import type { ErrorProps } from '../Error'

import styles from './Form.module.css'

declare type FormProps = {
    children: React.ReactNode
    label: string
    errors?: ErrorProps[]
    inputs?: InputProps[]
    values?: (string | number)[]
}

export const Form = ({
    children,
    label,
    errors=undefined,
    inputs=[],
    values=[],
}: FormProps) => {
    return (
        <form className={styles.form}>
            <h2 className={styles.head}>{label}</h2>
            <div className={styles.error}>{
                (errors && errors.length > 0) ? 'Errors on form' : ''
            }</div>
            <div className={styles.input}>
                {children}
            </div>
            <div className={styles.button}>
            </div>
        </form>
    )
}