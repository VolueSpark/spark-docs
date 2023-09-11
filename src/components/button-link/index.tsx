import React from 'react'
import style from './button-link.module.css'

type ButtonLinkProps = {
    href: string
    children: React.ReactNode
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
    return (
        <div className={style.container}>
            <a className={style.content} href={href}>
                {children}
            </a>
        </div>
    )
}
