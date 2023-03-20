import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Card from '../components/card'
import Lightning from '@site/static/icons/lightning.svg'
import Network from '@site/static/icons/network.svg'
import Puzzle from '@site/static/icons/puzzle.svg'
import Rocket from '@site/static/icons/rocket.svg'

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
                The SmartCharging API from Spark provides you with smart charging recommendations that are optimized for cost and efficiency. Independent of your customer's power supplier, our API is also optimized for a week-long price forecast, helping your customers save money on their EV charging.

                Our API is designed to be flexible and easy to integrate into your existing platform, making it easy for you to add value to your EV charging services.
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
                    <div className={style.grid_container}>
                        <Card
                            icon={<Rocket />}
                            title="Get started"
                            description="Step-by-step guide for setting up your system and getting started"
                            baseUrl="/docs/GettingStarted"
                        />
                        <Card
                            icon={<Network />}
                            title="API specification"
                            description="Dig into the API details"
                            baseUrl="/specification"
                        />
                        <Card
                            icon={<Puzzle />}
                            title="Design Library"
                            description="Check out and play around with our example components in Storybook"
                            url="https://storybook.sandbox.ladeassistent.no"
                        />
                        <Card
                            icon={<Lightning />}
                            title="Demo App"
                            description="Ladeassistenten"
                            url="https://sandbox.ladeassistent.no"
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}
