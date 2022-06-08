import { Button } from "../../ui/button/Button";
import styles from "./TabsInfo.module.css";

type TabsInfoProp = {
  data: Array<{
    id: string | number;
    text: string;
  }>;
};
export const TabsInfo: React.FC<TabsInfoProp> = ({ data }) => {

  const result = data.find((item) => item.id === Button.id);

  return (
    <div>
      <div className={styles.buttonBlock}>
        <Button className={styles.tabButton} id="1">
          Tab 1
        </Button>
        <Button className={styles.tabButton} id="2">
          Tab 2
        </Button>
        <Button className={styles.tabButton} id="3">
          Tab 3
        </Button>
      </div>
      {result ? (
        <div>
          <p className={styles.tabInfo} id={result.id} text={result.text}></p>
        </div>
      ) : null}
    </div>
  );
};
