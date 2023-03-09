import React from 'react'
import { RedocStandalone } from 'redoc'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

export default function Specification() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />"
        >
            <main>
                <RedocStandalone
                    specUrl="https://sandbox-spark-smartcharging.azurewebsites.net/swagger/v1/swagger.json"
                    options={{
                        nativeScrollbars: true,
                        theme: {
                            colors: {
                                primary: { main: '#000' },
                            },
                        },
                    }}
                />
            </main>
        </Layout>
    )
}
