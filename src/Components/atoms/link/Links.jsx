import React from "react";
import Link from "next/link";
import * as styles from "./styles.module.scss";
export const Links = ({ to, children, variant, icon, alt, location }) => {
  if (variant == "withIcon") {
    return (
      <div
        className={styles.navLink}
        style={{ borderLeft: location == to ? "5px solid  #1d9bf0 " : "none" }}
      >
        <Link href={to} passHref>
          <a className={styles.link}>
            <div className={styles.icon}>
              <img src={icon} alt={alt} />
            </div>
            <strong>{children}</strong>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <Link href={to} passHref>
      <a className={styles.linkPrimary}>{children}</a>
    </Link>
  );
};
export default Link;
