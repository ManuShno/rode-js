'use client'

import { useEffect } from 'react'

import styles from './input.module.css'

export const Boolean = ({
    id,
    label,
    default_value,
    handleChange,
    handleBoolean,
    value = 0,
    editable,
}: FormInput & InputParams) => {
    useEffect (() => {
        if (!value && default_value && handleChange) {
            handleChange({
                target: {
                    id: id,
                    value: parseInt(default_value),
                }
            })
        } 
    }, [ id, default_value, value, handleChange ])

    return (
        <>
            <button id={id}
                value={value}
                className={`${styles.field}${value ? ` ${styles.selected}` : ''}`}
                onClick={editable ? handleBoolean : () => null}>
                {label}
            </button>
        </>
    )
}