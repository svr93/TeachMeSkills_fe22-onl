import styles from "./Title.module.css";
type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};
