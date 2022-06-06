import { WelcomeTemplate } from "../../components/welcome/WelcomeTemplate";
import { Header } from "../../features/header/Header";
import { Title } from "../../ui/title/Title";
import styles from "./RegistrationPage.module.css";
import { Button } from "../../ui/button/Button";
import { TextInput } from "../../ui/inputs/TextInput";
import { EmailInput } from "../../ui/inputs/EmailInput";
import { PasswordInput } from "../../ui/inputs/PasswordInput";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppPages } from "../../types";

export const RegistrationPage: React.FC = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("test@test.com");
  const [passValue, setPassValue] = useState("");
  const [confValue, setConfValue] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <WelcomeTemplate
        title={
          <Title className={styles.title}>
            <Link className={styles.login} to={AppPages.LOGIN}>
              Login
            </Link>
            <span className={styles.slash}> | </span>
            <span className={styles.registration}>
              Registration
            </span>
          </Title>
        }
        button={
          <Button
            className={styles.formButton}
            onClick={() => navigate(AppPages.SUCCESS_PAGE)}
          >
            Registration
          </Button>
        }
        description={
          <div className={styles.desc}>
            <p className={styles.text}>If you have account you can </p>
            <Link className={styles.link} to={AppPages.LOGIN}>
              Login
            </Link>
          </div>
        }
      >
        <form className={styles.form}>
          <TextInput
            label="User name"
            value={nameValue}
            onChange={(event) => setNameValue(event.target.value)}
          ></TextInput>
          <EmailInput
            label="Email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          ></EmailInput>
          <PasswordInput
            label="Password"
            value={passValue}
            onChange={(event) => setPassValue(event.target.value)}
          ></PasswordInput>
          <PasswordInput
            label="Confirm password"
            value={confValue}
            onChange={(event) => setConfValue(event.target.value)}
          ></PasswordInput>
        </form>
      </WelcomeTemplate>
    </div>
  );
};
