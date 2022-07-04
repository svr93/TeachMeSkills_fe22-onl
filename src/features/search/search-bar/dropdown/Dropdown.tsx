import { CardProps } from "../../../../types/posts";
import styles from "./Dropdown.module.css";
type DropdownProps = {
  list: CardProps[];
  onSelectedItem: (id: string | number) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ list, onSelectedItem }) => {
  return (
    <div>
      <ul className={styles.dropdownList}>
        {list.map((item) => (
          <li className={styles.dropdownItem} key={item.id}>
            <img className={styles.img} src={item.image} alt={item.titleCard} />
            {item.titleCard}
          </li>
        ))}
      </ul>
    </div>
  );
};
