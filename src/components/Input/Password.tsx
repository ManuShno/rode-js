'use client'

import { useState } from 'react'
import Image from 'next/image'

import styles from './input.module.css'

export const Password = ({
    id,
    label,
    placeholder,
    handleChange, 
    value,
    errors,
    editable,
}: FormInput & InputParams) => {
    const [ show, setShow ] = useState<boolean>(false)
    
    return (
        <>
            <label className={styles.label}
                htmlFor={id}>
                {label}
            </label>
            <input id={id}
                value={value || ''}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                onChange={handleChange}
                placeholder={placeholder}
                type={show ? 'text' : 'password'}
                autoComplete='on'
                readOnly={!editable}/>
            <Image className={styles.icon}
                src={`/icon/${show ? 'hide' : 'show'}.drawio.svg`}
                alt={''}
                onClick={() => editable ? setShow(prev => !prev) : null} />
        </>
    )
}