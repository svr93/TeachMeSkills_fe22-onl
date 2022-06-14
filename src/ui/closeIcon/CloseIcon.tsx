import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CloseIcon.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type CloseIconProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  currentState: "opened" | "closed" | null;
};

export const CloseIcon: React.FC<CloseIconProps> = ({
  onClick,
  currentState,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} role="button" />
    </button>
  );
};
