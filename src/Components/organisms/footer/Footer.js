import { useContext } from "react";
import { AppContext } from "../../../base/Context/AppContext";
import Dropdown from "../../atoms/dropdowns/Dropdown";
import * as styles from "./styles.module.scss";
const Footer = () => {
  const { state, dispatch } = useContext(AppContext);
  
  return (
    <footer className={styles.foot}>
      <p>© 2022 DevHire</p>
      <Dropdown />
    </footer>
  );
};

export default Footer;
