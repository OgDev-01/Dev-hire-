import React from "react";
import * as styles from "./styles.module.scss";
function Heading({ children }) {
  return <h1 className={styles.h1}>{children}</h1>;
}

export default Heading;
