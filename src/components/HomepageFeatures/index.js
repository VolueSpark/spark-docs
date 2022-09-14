import React from "react";
import styles from "./styles.module.css";
import { Flex, Box } from "@volue/wave-react";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Flex as="ul" gap="spacingM" flow="column">
            <Box
              as="li"
              css={{ padding: "$spacingS", backgroundColor: "$colorGray5" }}
            >
              Docosaurus ser ut til å fungere
            </Box>
            <Box
              as="li"
              css={{ padding: "$spacingS", backgroundColor: "$colorGray5" }}
            >
              ganske godt med
            </Box>
            <Box
              as="li"
              css={{ padding: "$spacingS", backgroundColor: "$colorGray5" }}
            >
              komponentbiblioteket
            </Box>
          </Flex>
        </div>
      </div>
    </section>
  );
}
