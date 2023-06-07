'use client'

import { useMemo, useEffect, useCallback } from 'react'

import styles from './input.module.css'

export const DateInput = ({
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

            e.target.value = new Date().toISOString().split('T')[0]

            handleChange(e)
        }
    }, [ handleChange ])

    useEffect (() => {
        if (default_value === 'NOW' && !value && handleChange) {
            handleChange({
                target: {
                    id: id,
                    value: new Date().toISOString().split('T')[0],
                }
            })
        } 
    }, [ id, default_value, value, handleChange ])

    const displayValue = useMemo(() => {
        if (!value) return ''
        const valueTime = new Date(`${value}T00:00:00.0Z`).getTime()
        const timezoneMs = new Date().getTimezoneOffset() * 60 * 1000
        const localDate = new Date(valueTime - timezoneMs)

        return localDate.toISOString().split('T')[0]
    }, [ value ])

    return (
        <>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input value={displayValue} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='date'
                onChange={handleDatetime} 
                readOnly={!editable}
                autoComplete='on'/>
            <button className={styles.button} 
                id={id}
                onClick={handleNow}>
                TODAY
            </button>
        </>
    )
}

//     id, 
//     label, 
//     domain,
//     handleUpdate, 
//     value, 
// }: FormInput  & InputParams) => {
//     const handleNow = () => { 
//         let now = new Date()
//         let newDate = ('0' + now.getDay()).slice(-2) + '/' + ('0' + now.getMonth()).slice(-2) + '/' + now.getFullYear()
//         let newTime = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2)
//         handleUpdate(id, `${newDate} ${newTime}`)
//     }

//     const handleKey = e => {
//         let val = e.target.value
//         if (e.keyCode === 8 && ['/',':'].includes(val[val.length - 1])) {
//             let newVal = val.substring(0,val.length - 1)
//             if (e.target.id.includes('Date')) {
//                 handleUpdate(id, `${newVal} ${value.split(' ')[1]}`)
//             }
//             else if (e.target.id.includes('Time')) {
//                 handleUpdate(id, `${value.split(' ')[0]} ${newVal}`)
//             }
//         }
//     }

//     const handleEntry = e => {
//         var val = e.target.value
//         if (val.length === 2 || val.length === 5) {
//             if (e.target.id.includes('Time')) {
//                 handleUpdate(id, `${value.split(' ')[0]} ${val += ':'}`)
//             }
//             else if (e.target.id.includes('Date')) {
//                 handleUpdate(id, `${val += '/'} ${value.split(' ')[1]}`)
//             }
//         } else {
//             if (e.target.id.includes('Time')) {
//                 handleUpdate(id, `${value.split(' ')[0]} ${val}`)
//             }
//             else if (e.target.id.includes('Date')) {
//                 handleUpdate(id, `${val} ${value.split(' ')[1]}`)
//             }
//         }
//     }

//     return (
//         <div className='input'>
//             <div className=''>{label} :</div>
//             {domain === 'now' && <div className='tile_form--0--w30' onClick={handleNow} >NOW</div>}
//             <input className='item__input--2--w100' 
//                 type='date' id={`${id}Date`} value={value ? value.split(' ')[0] : ''} placeholder='DD/MM/YYYY' onChange={handleEntry} onKeyDown={handleKey} />
//             <input className='item__input--2--w100' type='time' id={`${id}Time`} value={value && value.split(' ').length > 1 ? value.split(' ')[1] : ''} placeholder='HH:MM:SS' onChange={handleEntry} onKeyDown={handleKey} />
//         </div>
//     )
// }
