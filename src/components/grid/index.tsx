import React from 'react'

import style from './grid.module.css'

type GridProps = {
    children: React.ReactNode
}

export default function Grid({ children }: GridProps) {
    return <div className={style.container}>{children}</div>
}
