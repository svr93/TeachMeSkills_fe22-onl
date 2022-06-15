import styles from "./InformationPage.module.css";
import { ContentTemplate } from "../../components/content/ContentTemplate";
import { Header } from "../../features/header/Header";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";
import { TabsInfo } from "../../features/tabsInfo/TabsInfo";
import { Button } from "../../ui/button/Button";
import { useState } from "react";

export const InformationPage: React.FC = () => {
	const [activeTabId, setActiveTabId] = useState(null)
  return (
    <div>
      <Header>
        <UserButton>{UserIcon}Username</UserButton>
      </Header>

      <ContentTemplate title="Information">
        <div className={styles.buttonBlock}>
          <Button
            onClick={() => setIsTab1Shown(isTab1Shown)}
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
        <TabsInfo data="123"></TabsInfo>
      </ContentTemplate>
    </div>
  );
};
