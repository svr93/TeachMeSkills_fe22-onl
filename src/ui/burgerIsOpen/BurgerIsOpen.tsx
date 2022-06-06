import styles from "./BurgerIsOpen.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type BurgerProps = {
	onClick: () => void;
 };
export const BurgerIsOpen: React.FC<BurgerProps> = ({onClick}) => {
return (
<button className={styles.burgerIsOpen} onClick={() => onClick()}><FontAwesomeIcon icon={faXmark}/></button>
)
}
	