import styles from "./UserButton.module.css";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const UserButton: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};
