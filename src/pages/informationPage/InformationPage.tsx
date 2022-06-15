import styles from "./InformationPage.module.css";
import { ContentTemplate } from "../../components/content/ContentTemplate";
import { Header } from "../../features/header/Header";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";
import { TabsInfo } from "../../features/tabsInfo/TabsInfo";
import { Button } from "../../ui/button/Button";
import { useState } from "react";

export const InformationPage: React.FC = () => {
	const [activeTabId, setActiveTabId] = useState("") //null выдаёт ошибки
  return (
    <div>
      <Header>
        <UserButton>{UserIcon}Username</UserButton>
      </Header>

      <ContentTemplate title="Information">
        <div className={styles.buttonBlock}>
          <Button
            onClick={() => setActiveTabId("1")}
            className={styles.tabButton}
            id="1"
          >
            Tab 1
          </Button>
          <Button
            onClick={() => setActiveTabId("2")}
            className={styles.tabButton}
            id="2"
          >
            Tab 2
          </Button>
          <Button
            onClick={() => setActiveTabId("3")}
            className={styles.tabButton}
            id="3"
          >
            Tab 3
          </Button>
        </div>
        <TabsInfo id={activeTabId}></TabsInfo>
      </ContentTemplate>
    </div>
  );
};
