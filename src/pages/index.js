import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Chip from '../components/chip'
import Card from '../components/Card'

import style from './index.module.css'

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />"
        >
            <header className={style.header}>
                <h1 className={style.header_title}>This is Spark</h1>
                <p className={style.header_description}>
                    Text goes here. [Provide your users with an even greater
                    value. Independent of power supplier and frictionless. Our
                    white-label solution provides smart charging optimised for a
                    week-long price forecast.]
                </p>
                <Link
                    href="https://www.volue.com/spark"
                    className={`${style.link_primary} ${style.link_read_more}`}
                >
                    Read more about Spark
                </Link>
            </header>
            <main>
                <div className={style.body}>
                    <div className={style.link_container}>
                        <Chip type="secondary">
                            <Link
                                href="/docs/GettingStarted"
                                className={style.link_secondary}
                            >
                                Get started
                            </Link>
                        </Chip>
                        <Chip>
                            <Link
                                href="https://storybook.sandbox.ladeassistent.no"
                                className={style.link_primary}
                            >
                                Explore eamples
                            </Link>
                        </Chip>
                    </div>
                    <div className={style.grid_container}>
                        <Card
                            title="Quick Start"
                            description="Follow this guide to make your first API call to Spark"
                            url="/docs/GettingStarted"
                        />
                        <Card
                            title="Demo App"
                            description="View our demo application 'Ladeassistenten' to see features in action"
                            url="https://sandbox.ladeassistent.no"
                        />
                        <Card
                            title="Design Library"
                            description="Check out our example components in Storybook"
                            url="https://storybook.sandbox.ladeassistent.no"
                        />
                        <Card
                            title="API Documentation"
                            description="Dig into the API documentation to read up on features of the API"
                            url="/docs/documentation/Authentication"
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}
