import Heading from "../../atoms/Headings/Heading";
import * as styles from "./styles.module.scss";
export const Page = ({ heading, children }) => {
  return (
    <div>
      <Heading>{heading}</Heading>
      <section className={styles.wrapper}>{children}</section>
    </div>
  );
};
