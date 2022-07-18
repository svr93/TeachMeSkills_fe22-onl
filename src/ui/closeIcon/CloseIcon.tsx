import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CloseIcon.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type CloseIconProps = {
  onCloseClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const CloseIcon: React.FC<CloseIconProps> = ({
	onCloseClick,
}) => {
  return (
    <button className={styles.button} onClick={onCloseClick}>
      <FontAwesomeIcon icon={faTimes} role="button" />
    </button>
  );
};
