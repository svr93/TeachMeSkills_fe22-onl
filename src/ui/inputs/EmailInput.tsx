import styles from "./Inputs.module.css";

type EmailInputProps = {
  label: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const EmailInput: React.FC<EmailInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="email"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};