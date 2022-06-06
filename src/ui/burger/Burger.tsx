import styles from "./Burger.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type BurgerProps = {
  onClick: () => void;
};
export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <button className={styles.burger} onClick={() => onClick()}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};
