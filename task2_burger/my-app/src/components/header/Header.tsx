import { Burger } from "../burger/Burger";
import { BurgerIsOpen } from "../burgerIsOpen/BurgerIsOpen";
import { Button } from "../button/Button";
import { UserIcon } from "../userIcon/UserIcon";
import styles from "./Header.module.css";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className={isShown ? `${styles.removed}` : `${styles.header}`}>
        <Burger onClick={() => setIsShown(!isShown)}></Burger>
        <Button>{UserIcon}Username</Button>
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
          <a href="/">All Posts</a>
          <a href="/">My Posts</a>
        </div>
      </div>
    </div>
  );
};
