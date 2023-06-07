'use client'

import { useState, useCallback, useEffect } from 'react'

import styles from './input.module.css'

export const Search = ({
    id,
    label,
    placeholder,
    default_value,
    handleChange,
    value,
    errors,
    editable,
}: FormInput & InputParams) => {
    const [ options, setOptions ] = useState<InputSelectOption[]>()

    const handleSelect = useCallback((e) => {
        console.log(e.target)

        if (handleChange) handleChange({
            target: {
                id: id,
                value: e.target.id,
            }
        })
    }, [ id, handleChange ])

    const handleSearch = useCallback((e) => {
        if (id) {
            const value = e.target.value
            let options = []
            setOptions(options)
        }
    }, [ id ])

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
                onChange={handleSearch} 
                placeholder={placeholder} 
                readOnly={!editable}
                autoComplete='on'/>
            {/* {options && <Dropdown
                options={options}
                handleSelect={handleSelect}/>} */}
        </>
    )
}