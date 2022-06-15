import { Burger } from "../../ui/burger/Burger";
import { BurgerIsOpen } from "../../ui/burgerIsOpen/BurgerIsOpen";

import styles from "./Header.module.css";
import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";

type HeaderProps = {
  children?: React.ReactNode;
};
export const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isShown, setIsShown] = useState(false);
  const appRef = useContext(AppContext);
  return (
    <div className={styles.container}>
      <div className={isShown ? `${styles.removed}` : `${styles.header}`}>
        <Burger onClick={() => setIsShown(!isShown)}></Burger>
        <div>{children}</div>
      </div>
      <div
        className={
          !isShown
            ? `${styles.removed}`
            : `${styles.header} ${styles.headerIsOpen}`
        }
      >
        <BurgerIsOpen onClick={() => setIsShown(!isShown)}></BurgerIsOpen>
        <div className={styles.links}>
          <a className={styles.link} href="/">
            All Posts
          </a>
          <Link className={styles.link} to={AppPages.POSTS}>
            My Posts
          </Link>
        </div>
      </div>
      <label className={styles.switchLabel}>
        <input
          className={styles.switchInput}
          type="checkbox"
          onChange={(event) => {
            const style = appRef?.current!.style!;

            if (event.target.checked) {
              style.setProperty("--primary-text-color", " rgb(255, 255, 255)");
              style.setProperty(
                "--secondary-text-color",
                " rgb(127, 127, 138)"
              );
              style.setProperty("--blue-backgraund-color", "rgb(31, 31, 80)");
              style.setProperty("--backgraund-color", "rgb(89, 89, 142)");
            } else {
              style.removeProperty("--primary-text-color");
              style.removeProperty("--secondary-text-color");
              style.removeProperty("--blue-backgraund-color");
              style.removeProperty("--backgraund-color");
            }
          }}
        />
        Switch
      </label>
    </div>
  );
};
