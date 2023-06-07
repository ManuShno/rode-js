import React from 'react'

export declare type TooltipProps = {
    children: React.ReactNode
}

export const Tooltip = ({
    children
}: TooltipProps) => {
    return (
        <div>
            {children}
        </div>
    )
}