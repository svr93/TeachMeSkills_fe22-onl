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
import { useAppDispatch } from "../../hooks";
import { register } from "../../features/auth/authSlice";

export const RegistrationPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("");
  const [confValue, setConfValue] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
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
            <span className={styles.registration}>Registration</span>
          </Title>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(register({ username, email, password }));
          }}
          className={styles.form}
        >
          <TextInput
            label="User name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></TextInput>
          <EmailInput
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></EmailInput>
          <PasswordInput
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></PasswordInput>
          <PasswordInput
            label="Confirm password"
            value={confValue}
            onChange={(event) => setConfValue(event.target.value)}
          ></PasswordInput>

          <Button
            type="submit"
            className={styles.formButton}
            onClick={() => navigate(AppPages.SUCCESS_PAGE)}
          >
            Registration
          </Button>
        </form>
      </WelcomeTemplate>
    </div>
  );
};
