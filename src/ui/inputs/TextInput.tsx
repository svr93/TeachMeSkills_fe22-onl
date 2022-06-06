import styles from "./Inputs.module.css";

type TextInputProps = {
  label: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};
