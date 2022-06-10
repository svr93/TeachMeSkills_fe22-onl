import { useState } from "react";
import { Button } from "../../ui/button/Button";
import styles from "./TabsInfo.module.css";

type TabsInfoProp = {
  data: Array<{
    id: string | number;
    text: string;
  }>;
};
export const TabsInfo: React.FC<TabsInfoProp> = ({ data }) => {
  const [isTab1Shown, setIsTab1Shown] = useState(true);
  const [isTab2Shown, setIsTab2Shown] = useState(false);
  const [isTab3Shown, setIsTab3Shown] = useState(false);

  const result = data.find((item) => item.id === Button.id);

  return (
    <div>
      <div className={styles.buttonBlock}>
        <Button
          onClick={() => setIsTab1Shown(!isTab1Shown)}
          className={styles.tabButton}
          id="1"
        >
          Tab 1
        </Button>
        <Button
          onClick={() => setIsTab2Shown(!isTab2Shown)}
          className={styles.tabButton}
          id="2"
        >
          Tab 2
        </Button>
        <Button
          onClick={() => setIsTab3Shown(!isTab3Shown)}
          className={styles.tabButton}
          id="3"
        >
          Tab 3
        </Button>
      </div>
      {result ? (
        <div className={isTabShown ? `${styles.removed}` : `${styles.shown}`}>
          <p className={styles.tabInfo} id={result.id} text={result.text}></p>
        </div>
      ) : null}
    </div>
  );
};
