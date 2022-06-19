import { WelcomeTemplate } from "../../components/welcome/WelcomeTemplate";
import { Header } from "../../features/header/Header";
import { Title } from "../../ui/title/Title";
import styles from "./LoginPage.module.css";
import { Button } from "../../ui/button/Button";
import { EmailInput } from "../../ui/inputs/EmailInput";
import { PasswordInput } from "../../ui/inputs/PasswordInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";
import { useAppDispatch } from "../../hooks";
import { login } from "../../features/auth/authSlice";

export const LoginPage: React.FC = () => {
  const [emailValue, setEmailValue] = useState("test@test.com");
  const [passValue, setPassValue] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <Header></Header>
      <WelcomeTemplate
        title={
          <Title className={styles.title}>
            <span className={styles.login}>Login</span>
            <span className={styles.slash}> | </span>
            <Link className={styles.registration} to={AppPages.REGISTRATION}>
              Registration
            </Link>
          </Title>
        }
        description={
          <div className={styles.desc}>
            <p className={styles.text}>Forgot your password?</p>
            <a className={styles.link} href="/">
              Reset password
            </a>
          </div>
        }
      >
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({ email: emailValue, password: passValue }));
          }}
        >
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

          <Button type="submit" className={styles.formButton}>
            Login
          </Button>
        </form>
      </WelcomeTemplate>
    </div>
  );
};
