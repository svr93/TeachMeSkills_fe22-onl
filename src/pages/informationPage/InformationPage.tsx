import styles from "./InformationPage.module.css";
import { ContentTemplate } from "../../components/content/ContentTemplate";
import { Header } from "../../features/header/Header";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";
import { TabsInfo } from "../../features/tabsInfo/TabsInfo";
import { Button } from "../../ui/button/Button";
import { useState } from "react";

export const InformationPage: React.FC = () => {
  const [isTab1Shown, setIsTab1Shown] = useState(true);
  const [isTab2Shown, setIsTab2Shown] = useState(false);
  const [isTab3Shown, setIsTab3Shown] = useState(false);


  return (
    <div>
      <Header>
        <UserButton>{UserIcon}Username</UserButton>
      </Header>

      <ContentTemplate title="Information">
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
        <TabsInfo
          data={[
            {
              id: 1,
              text: "In the spring, seeds take root and vegetation begins to grow. The weather is warmer and often wetter. Animals wake or return from warmer climates, often with newborns. Melting snow from the previous season, along with increased rainfall, can cause flooding along waterways, according to the Federal Emergency Management Agency(opens in new tab) (FEMA).",
            },
            {
              id: 2,
              text: "In the summer, temperatures may increase to the hottest of the year. If they spike too high, heat waves or droughts may cause trouble for people, animals, and plants. For example, in the summer of 2003, the high temperatures claimed more than 30,000 lives, according to Encyclopedia Britannica(opens in new tab). Rainfall may increase in some areas, as well. Others may receive less water, and forest fires may become more frequent. ",
            },
            {
              id: 3,
              text: "In the autumn, or fall, temperatures cool again. Plants may begin to grow dormant. Animals might prepare themselves for the upcoming cold weather, storing food or traveling to warmer regions. Various cultures have celebrated bountiful harvests with annual festivals. Thanksgiving is a good example. Thanksgiving in the United States is a historical commemoration but it has a spiritual dimension strongly associated with homecoming and giving praise for what has been bestowed upon us, Cristina De Rossi, an anthropologist at Barnet and Southgate College in London, told Live Science.",
            },
          ]}
        ></TabsInfo>
      </ContentTemplate>
    </div>
  );
};
