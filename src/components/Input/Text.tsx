'use client'

import { useEffect } from 'react'

import styles from './input.module.css'

export const Text = ({ 
    id,
    label,
    placeholder,
    default_value,
    handleChange,
    value,
    errors,
    editable,
}: FormInput & InputParams) => {
    useEffect (() => {
        if (!value && default_value && handleChange) {
            handleChange({
                target: {
                    id: id,
                    value: default_value,
                }
            })
        } 
    }, [ id, default_value, value, handleChange ])

    return (
        <>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input value={value || ''} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='text'
                onChange={handleChange} 
                onKeyDown={handleChange} 
                placeholder={placeholder} 
                readOnly={!editable}
                autoComplete='on'/>
        </>
    )
}