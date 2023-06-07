'use client'

import { useState, useCallback, useEffect } from 'react'

import styles from './input.module.css'

export const Select = ({ 
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
        if (handleChange && editable) handleChange(e)
    }, [ editable, handleChange ])

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

    useEffect(() => {

    }, [])

    return (
        <>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <select value={value || ''} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                onChange={handleChange} 
                placeholder={placeholder} 
                autoComplete='on'>
                <option value={''} disabled>-- Select an option --</option>
                {options && options.map((option: InputSelectOption) => 
                    <option key={option.id || option.code} 
                        value={option.id || option.code}>
                        {option.label}
                    </option>
                )}
                </select>
        </>
    )
}

//     values, 
//     id,
//     label=undefined,
//     handleChange, 
//     placeholder='',
//     default_value='',
//     domain=undefined,
//     error
// }: FormInput  & InputParams) => {
//     const { SelectDomains } = useDomainsContext()
//     const Domain = domain && SelectDomains ? SelectDomains[domain].sort(SortAlphabetical) : []

//     console.log(Domain)
//     return (
//         <select id={id}
//             className={`${styles.field}${error ? ` ${styles.error}`: ''}`}
//             value={values[id] || (values[id] === 0 ? '0' : default_value)} 
//             onChange={e => handleChange(e)} 
//             onKeyDown={e => handleChange(e)} >
//             <option value='' disabled>{placeholder}</option>
//             {Domain && Domain.map((a,index) => 
//                 <option key={index}
//                     value={`${a.code}`} >
//                     {a.value ? a.value : a.label}
//                 </option>
//             )}
//         </select>
//     )
// }