import styles from "./RegistrationInfo.module.css";
import { Header } from "../../../features/header/Header";
import { WelcomeTemplate } from "../../../components/welcome/WelcomeTemplate";
import { Title } from "../../../ui/title/Title";
import { Button } from "../../../ui/button/Button";

export const RegistrationConfirm: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <WelcomeTemplate
        title={
          <Title className={styles.title}>
            <p>Registration Confirmation</p>
          </Title>
        }
        button={<Button className={styles.registrButton}>Home</Button>}
      >
        <div className={styles.desc}>
          <span className={styles.text}>
            Please activate your account with the activation link in the email
          </span>
          <a className={styles.link} href="/">
            test@gmail.com
          </a>
          <span className={styles.text}>Please, check your email</span>
        </div>
      </WelcomeTemplate>
    </div>
  );
};
