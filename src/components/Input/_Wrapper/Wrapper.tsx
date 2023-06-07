import React from 'react'

import styles from '../Input.module.css'

declare type InputWrapperProps = {
    id: string
    label?: string
    children: React.ReactNode
}

export const Wrapper = ({
    id,
    label=undefined,
    children
}: InputWrapperProps) => {
    return (
        <div className={styles.item} style={{
                gridTemplateColumns: label ? 'auto 1fr' : '1fr',
            }}>
            {label ? <label htmlFor={id} className={styles.label}>
                    {label}
                </label> : null
            }
            {children}
        </div>
    )
}