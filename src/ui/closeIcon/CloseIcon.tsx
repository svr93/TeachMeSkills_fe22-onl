import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CloseIcon.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type CloseIconProps = {
  onClick: () => void;
  currentState: "opened" | "closed" | null;
  
};

export const CloseIcon: React.FC<CloseIconProps> = ({
	onClick,
  currentState,
}) => {
  const ClosePostIcon = (
    <FontAwesomeIcon
      icon={faTimes}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      role="button"
    />
  );
  return (
    <div className={styles.wrapper}>
        {currentState === "opened" ? ClosePostIcon : null}
    </div>
  );
};
