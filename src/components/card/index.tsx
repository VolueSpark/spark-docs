import React from 'react'
import Link from '@docusaurus/Link'
import ArrowForward from '@site/static/icons/arrow_forward_ios.svg'

import style from './card.module.css'

type CardProps = {
    title: string
    description: string
    url?: string
}

export default function Card({ title, description, url }: CardProps) {
    return (
        <div className={style.card_link}>
            <Link href={url}>
                <div className={style.card_link_flex}>
                    <div>
                        <h3 className={style.title}>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <ArrowForward />
                </div>
            </Link>
        </div>
    )
}
