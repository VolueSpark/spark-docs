import React from "react";
import styles from "./styles.module.css";
import { Flex, Box, Link } from "@volue/wave-react";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Flex as="ul" gap="spacingL" flow="column">
            <Box as="li">
              Go to{" "}
              <Link href="https://spark-dashboard-volue-spark.vercel.app">
                Dashboard
              </Link>
            </Box>
            <Box as="li">
              Go to <Link href="/docs/api">API documentation</Link>
            </Box>
          </Flex>
        </div>
      </div>
    </section>
  );
}
