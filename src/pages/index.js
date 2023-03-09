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
                <Link className={style.link_read_more} href="/about">
                    Read more about Spark
                </Link>
            </header>
            <main>
                <div className={style.body}>
                    <div className={style.button_link_container}>
                        <div className={style.button}>
                            <Link>Get started</Link>
                        </div>
                        <div className={style.button}>
                            <Link>Explore eamples</Link>
                        </div>
                    </div>
                    <div className={style.grid_container}>
                        <div className={style.card_link}>
                            <Link>
                                <p>Quick start</p>
                                <p>Something about getting started quickly</p>
                            </Link>
                        </div>
                        <div className={style.card_link}>
                            <Link>
                                <p>Demo APP</p>
                                <p>Somethingsomething about Ladeassistenten</p>
                            </Link>
                        </div>
                        <div className={style.card_link}>
                            <Link>
                                <p>Design library</p>
                                <p>
                                    Check out our example components in
                                    Storybook.
                                </p>
                            </Link>
                        </div>
                        <div className={style.card_link}>
                            <Link>
                                <p>API documentation</p>
                                <p>Dig into the API details</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
