import React, { Children } from 'react'

import style from './flex.module.css'

type FlexProps = {
    id: string
    children: React.ReactNode[]
}

export default function Flex({ id, children }: FlexProps) {
    return (
        <div className={style.container}>
            {Children.toArray(children).length === 1
                ? children
                : children.map((child, index) => (
                      <div key={`${id}-${index}`} className={style.item}>
                          {child}
                      </div>
                  ))}
        </div>
    )
}
