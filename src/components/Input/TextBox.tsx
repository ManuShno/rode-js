'use client'

import { useEffect } from 'react'

import styles from './input.module.css'

export const TextBox = ({
    id,
    label,
    placeholder = '',
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
            <textarea value={value || ''} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                onChange={handleChange} 
                placeholder={placeholder} 
                readOnly={!editable}
                autoComplete='on'>
                {value || placeholder}
            </textarea>
        </>
    )
}

// export const TextBox = (props: FormInput) => (
//     <div className={`item--0${props.indent ? `--indent${props.indent}` : ''}`}>
//         <div className='item__label--1'>{`${props.label} :`}</div>
//         <textarea className='item__input--2--w400' id={props.id} value={props.value || ''} onChange={props.handleChange} />
//     </div>
// )