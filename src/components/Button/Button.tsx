import React from 'react'

declare type ButtonProps = {
    label: string
}

const Button = (props: ButtonProps) => {
    return (
        <button>
            {props.label}
        </button>
    )
}

export default Button