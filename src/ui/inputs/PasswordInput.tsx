import styles from "./Inputs.module.css";

type PasswordInputProps = {
  label: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="password"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};