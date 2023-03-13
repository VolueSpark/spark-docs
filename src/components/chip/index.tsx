import React from 'react'

import style from './chip.module.css'

type ChipProps = {
    children: React.ReactNode
    type?: 'primary' | 'secondary'
}

export default function Chip({ children, type = 'primary' }: ChipProps) {
    return (
        <div className={`${style.main} ${style[type]}`} aria-labe>
            {children}
        </div>
    )
}
