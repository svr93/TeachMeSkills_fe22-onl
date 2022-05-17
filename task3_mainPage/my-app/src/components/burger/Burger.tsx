import styles from "./Burger.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const Burger: React.FC = () => {
return (
<button className={styles.burger} ><FontAwesomeIcon icon={faBars}/></button>
)
}
	