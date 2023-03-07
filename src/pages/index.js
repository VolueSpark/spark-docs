import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import style from './index.module.css'

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />"
        >
            <header className={style.header}>
                <h1>This is Spark</h1>
                <p>
                    Text goes here. [Provide your users with an even greater
                    value. Independent of power supplier and frictionless. Our
                    white-label solution provides smart charging optimised for a
                    week-long price forecast.]
                </p>
                <Link href="/about">Read more about Spark</Link>
            </header>
            <main>
                <div className={style.body}>
                    <div className={style.grid_container}>
                        <div className={style.button_link_container}>
                            <div>
                                <Link>Get started</Link>
                                <Link>Explore eamples</Link>
                            </div>
                        </div>
                        <div className={style.card_link}>
                            <Link>
                                <p>Quick start</p>
                                <p>Something about getting started quickly</p>
                            </Link>
                        </div>
                        <div className={style.card_link}>
                            <Link></Link>
                        </div>
                        <div className={style.card_link}>
                            <Link></Link>
                        </div>
                        <div className={style.card_link}>
                            <Link></Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
