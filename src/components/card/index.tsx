import React from 'react'
import Link from '@docusaurus/Link'

import style from './card.module.css'

type CardProps = {
    icon: React.ReactNode
    title: string
    description: string
    url?: string
}

export default function Card({ icon, title, description, url }: CardProps) {
    return (
        <div className={style.card_link}>
            <Link href={url}>
                <div className={style.card_link_flex}>
                    {icon}
                    <h3 className={style.title}>{title}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    )
}
