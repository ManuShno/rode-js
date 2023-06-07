'use client'

import { useState, useCallback, useMemo } from 'react'

import * as Inputs from './Inputs'
import { ToolTip } from '../ToolTip'

import styles from './input.module.css'

export const Input = ({
    id,
    type,
    errors,
    handleChange,
    ...rest
}: FormInput & InputParams) => {
    const Component = Inputs[type]
    let additionalProps = {}

    const [ displayToolTip, setDisplayToolTip ] = useState<string>()

    const inputErrors = useMemo(() => {
        return errors?.filter(error => error.id === id) || []
    }, [ id, errors ])

    const handleMouseOver = useCallback(e => {
        e.preventDefault()
        setDisplayToolTip(id)
    }, [ id ])
    
    const handleMouseOut = useCallback(e => {
        e.preventDefault()
        setDisplayToolTip(undefined)
    }, [])
    
    return (
        <div id={id} className={styles.input}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            {Component && <Component {...rest} {...additionalProps} 
                id={id}
                errors={errors}
                showToolTip={ToolTip}
                handleChange={handleChange}/>}
            {displayToolTip && inputErrors.length > 0 && 
                <ToolTip values={inputErrors}/>}
        </div>
    )
}
