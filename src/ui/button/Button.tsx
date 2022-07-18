import styles from "./Button.module.css";
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
  type?: "submit" | "reset" | "button";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  role,
  
  type = "button"
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      role={role}
    >
      {children}
    </button>
  );
};
