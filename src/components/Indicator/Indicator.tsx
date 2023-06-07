import React from 'react'

export declare type IndicatorProps = {
    status?: string // failure, success, warning
    size?: string // small, medium, large
}

const BaseDimension: number = 30

const Size: { [key: string]: number } = {
    small: BaseDimension * 1,
    medium: BaseDimension * 2,
    large: BaseDimension * 3,
}

const Colour: {
    [key: string]: string
} = {
    highlight: '#ffffff',
    failure: '#ff2400',
    warning: '#ffbf00',
    success: '#1fc600',
    frame: '#d3d3d3',
    outline: 'rgb(128,128,128,0.5)',
}

export const Indicator = ({
    status='failure',
    size='small',
}: IndicatorProps) => {
    return (
        <svg viewBox={`0 0 ${Size[size]} ${Size[size]}`}
            xmlns='http://www.w3.org/2000/svg' 
            style={{
                width: Size[size],
                height: Size[size],
                position: 'relative',
                margin: '50%',
            }}>
            <circle cx={Size[size] / 2}
                cy={Size[size] / 2}
                r={(Size[size] / 2) - Size[size] / 7.5}
                style={{
                    opacity: '0.5',
                    fill: Colour[status],
                    margin: '50%',
                    filter: `blur(${Size[size] / 7.5}px)`,
                }}></circle>
            <circle cx={Size[size] / 2}
                cy={Size[size] / 2}
                r={Size[size] / 2 - Size[size] / 20}
                style={{
                    fill: Colour.frame,
                    stroke: Colour.outline,
                    strokeWidth: Size[size] / 100,
                    margin: '50%',
                }}></circle>
            <circle cx={Size[size] / 2}
                cy={Size[size] / 2}
                r={(Size[size] / 2) - Size[size] / 7.5}
                style={{
                    fill: Colour[status],
                    stroke: Colour.outline,
                    strokeWidth: Size[size] / 100,
                    margin: '50%',
                }}></circle>
            <circle cx={Size[size] * 3/5}
                cy={Size[size] * 2/5}
                r={Size[size] * 1/6}
                style={{
                    opacity: '0.5',
                    fill: Colour.highlight,
                    filter: `blur(${Size[size] / 15}px)`,
                }}></circle>
            <circle cx={Size[size] * 2/5}
                cy={Size[size] * 3/5}
                r={Size[size] * 1/10}
                style={{
                    opacity: '0.3',
                    fill: Colour.highlight,
                    filter: `blur(${Size[size] / 15}px)`,
                }}></circle>
        </svg>
    )
}