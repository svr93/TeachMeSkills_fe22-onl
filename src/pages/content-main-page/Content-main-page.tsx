import { ContentTemplate } from "../../components/content/ContentTemplate";
import { Header } from "../../features/header/Header";
import { Card } from "../../ui/card/Card";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";
import styles from "./Content-main-page.module.css";

type ContentMainPageProps = {};
export const ContentMainPage: React.FC<ContentMainPageProps> = () => {
  return (
    <div>
      <Header>
        <UserButton>{UserIcon}Username</UserButton>
      </Header>
      <ContentTemplate title="Selected Post">
       
        <Card
		  id = {1}
          className={styles.mainCard}
          text={"lorem jbjbbjjvkjb bjbbkjbkb"}
          date={"20-05-2022"}
          titleCard={"What is Lorem ipsum?"}
        ></Card>
      </ContentTemplate>
    </div>
  );
};
