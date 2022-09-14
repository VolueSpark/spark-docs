import React from "react";
import styles from "./styles.module.css";
import { Box, Link } from "@volue/wave-react";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Box>
            Go to <Link href="/docs/api">API documentation</Link>.
          </Box>
        </div>
      </div>
    </section>
  );
}
