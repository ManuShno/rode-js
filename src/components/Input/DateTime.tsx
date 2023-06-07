'use client'

import { useEffect, useMemo, useCallback } from 'react'

import styles from './input.module.css'

export const DateTime = ({
    id,
    label,
    default_value,
    handleChange,
    handleDatetime,
    value,
    errors,
    editable,
}: FormInput & InputParams) => {
    const handleNow = useCallback((e) => {
        if (handleChange) {
            e.preventDefault()

            e.target.value = new Date().toISOString().split('.')[0]

            handleChange(e)
        }
    }, [ handleChange ])

    useEffect (() => {
        if (default_value === 'NOW' && !value && handleChange) {
            handleChange({
                target: {
                    id: id,
                    value: new Date().toISOString().split('.')[0],
                }
            })
        } 
    }, [ id, default_value, value, handleChange ])

    const displayValue = useMemo(() => {
        if (!value) return ''
        const valueTime = new Date(`${value}.0Z`).getTime()
        const timezoneMs = new Date().getTimezoneOffset() * 60 * 1000
        const localDate = new Date(valueTime - timezoneMs)

        return localDate.toISOString().split('.')[0]
    }, [ value ])

    return (
        <>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input value={displayValue} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='datetime-local'
                onChange={handleDatetime} 
                readOnly={!editable}
                autoComplete='on'/>
            <button className={styles.button} 
                id={id}
                onClick={handleNow}>
                NOW
            </button>
        </>
    )
}