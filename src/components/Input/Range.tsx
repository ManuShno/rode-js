'use client'

import { useEffect } from 'react'

import styles from './input.module.css'

export const Range = ({
    id,
    label,
    default_value,
    ind_zero,
    handleChange,
    domain = '0|100',
    errors,
    value,
    editable,
}: FormInput & InputParams) => {
    useEffect (() => {
        if (!value && handleChange && (
            (ind_zero && parseInt(default_value) === 0) || default_value)
        ) {
            handleChange({
                target: {
                    id: id,
                    value: parseInt(default_value),
                }
            })
        } 
    }, [ id, ind_zero, default_value, value, handleChange ])

    return (
        <>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input value={ind_zero ? value === 0 ? 0 : value || '' : value || ''}
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='range'
                min={domain.split('|')[0]}
                max={domain.split('|')[1]}
                onChange={handleChange}
                readOnly={!editable}
                autoComplete='on'/>
            <span className={styles.button}>
                {ind_zero ? value === 0 ? 0 : value || '' : value || ''}
            </span>
        </>
    )
}