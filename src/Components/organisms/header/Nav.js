import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Links } from "../../atoms/link/Links";
import * as styles from "./styles.module.scss";

export default function Nav() {
  const router = useRouter();
  const navLinks = [
    {
      name: "Home",
      variant: "withIcon",
      url: "/",
      icon: "/Search.png",
      alt: "search icon",
    },
    {
      name: "Favorites",
      variant: "withIcon",
      url: "/favorites",
      icon: "/Union.png",
      alt: "hearts icon",
    },
  ];
  return (
    <nav>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="brand logo" />
        </Link>
      </div>
      <ul>
        {Array.isArray(navLinks) &&
          navLinks.map((link, index) => (
            <Links
              key={index}
              to={link.url}
              alt={link.alt}
              variant={link.variant}
              icon={link.icon}
              location={router.pathname}
            >
              {link.name}
            </Links>
          ))}
      </ul>
    </nav>
  );
}
