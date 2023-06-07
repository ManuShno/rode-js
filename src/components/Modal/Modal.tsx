import React from 'react'

import styles from './Modal.module.css'

export declare type ModalProps = {
    children: React.ReactNode
}

export const Modal = ({
    children
}: ModalProps) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}