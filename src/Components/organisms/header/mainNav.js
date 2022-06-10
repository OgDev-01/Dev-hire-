import React from "react";
import Nav from "./Nav";

import * as styles from "./styles.module.scss";

export default function MainNav() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
}
