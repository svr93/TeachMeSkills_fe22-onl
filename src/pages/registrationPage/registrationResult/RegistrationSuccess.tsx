import styles from "./RegistrationInfo.module.css";
import { Header } from "../../../features/header/Header";
import { WelcomeTemplate } from "../../../components/welcome/WelcomeTemplate";
import { Title } from "../../../ui/title/Title";
import { Button } from "../../../ui/button/Button";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";

export const RegistrationSuccess: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <WelcomeTemplate
        title={
          <Title className={styles.title}>
            <p>Success</p>
          </Title>
        }
        button={
		  <Link to={AppPages.LOGIN}>
		  <Button className={styles.registrButton} role="presentation">Login</Button>
		  </Link>}
      >
        <div className={styles.desc}>
          <span className={styles.text}>
            Email confirmed. <br></br>Your regictration is now completed
          </span>
        </div>
      </WelcomeTemplate>
    </div>
  );
};
