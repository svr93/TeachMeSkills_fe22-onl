import styles from "./InformationPage.module.css"
import { ContentTemplate } from "../../components/content/ContentTemplate";
import { Header } from "../../features/header/Header";
import { Button } from "../../ui/button/Button";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";

export const InformationPage: React.FC = () => {
	
	return (
	  <div>
		 <Header>
			<UserButton>{UserIcon}Username</UserButton>
		 </Header>
 
		 <ContentTemplate title="Information">
			 <div className={styles.buttonBlock}>
			 <Button className={styles.tabButton}>Tab 1</Button>
			 <Button className={styles.tabButton}>Tab 2</Button>
			 <Button className={styles.tabButton}>Tab 3</Button>
			</div>
		 </ContentTemplate>
	  </div>
	);
 };