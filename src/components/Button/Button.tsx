import React from 'react'

import styles from './Button.module.css'

export declare type ButtonProps = {
    label: string
    type?: string
    onClick: (e: React.MouseEvent) => void
}

export const Button = ({
    label,
    type = 'button',
    onClick = e => console.log(e.target),
}: ButtonProps) => {
    return (
        <button className={styles[type]} 
            onClick={onClick}>
            {label}
        </button>
    )
}
