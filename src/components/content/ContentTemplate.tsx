import { Button } from "../../ui/button/Button";
import { Title } from "../../ui/title/Title";
import styles from "./ContentTemplate.module.css";
type ContentTemplateProps = {
  title: React.ReactNode;
  button?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  button,
  children,
  className = "",
}) => {
  return (
    <div>
      <div className={styles.block}>
        <Title className={styles.contentTitle}>{title}</Title>
        {button ? (
          <Button className={`${styles.contentButton} ${className}`}>
            {button}
          </Button>
        ) : null}
      </div>
      <div className={styles.list}>{children}</div>
    </div>
  );
};
