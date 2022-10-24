import React from 'react'
import styles from './styles.module.css'
import { Card, Grid, GridItem } from '@volue/wave-react'

import dashboard from '../../../static/img/Dashboard.png'
import documentation from '../../../static/img/Documentation.png'

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <Grid columns={3} gap="spacingXl">
                <GridItem colSpan={1}>
                    <Card css={{ color: '#000 !important' }}>
                        <Card.Header>Spark Dashboard</Card.Header>
                        <Card.Body>
                            {/* TODO: place img inside of link, or have a target link location such that you can click image to open */}
                            <a href="https://kind-meadow-0a300a703.2.azurestaticapps.net">
                                <img
                                    src={dashboard}
                                    alt="Image of Spark Dashboard Application"
                                />
                                <p>Go to Dashboard</p>
                            </a>
                        </Card.Body>
                    </Card>
                </GridItem>
                <GridItem colSpan={1}>
                    <Card css={{ color: '#000 !important' }}>
                        <Card.Header>Api Documentation</Card.Header>
                        <Card.Body>
                            <a href="/docs/api">
                                <img
                                    src={documentation}
                                    alt="Image of Spark API Documentation"
                                />
                                <p>Read documentation</p>
                            </a>
                        </Card.Body>
                    </Card>
                </GridItem>
            </Grid>
        </section>
    )
}
