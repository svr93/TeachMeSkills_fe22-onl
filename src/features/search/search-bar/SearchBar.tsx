import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../searchSlice";
import { Dropdown } from "./dropdown/Dropdown";
import styles from "./SearchBar.module.css";

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.search.response?.results ?? []);
  return (
    <div className={styles.searchContainer}>
      <FontAwesomeIcon  className={styles.searchIcon} icon={faMagnifyingGlass} />
      <div>
        <input className={styles.searchInput}
          type="text"
          onInput={(e) => {
            dispatch(actions.search({ text: e.currentTarget.value }));
          }}
        ></input>
        {list.length > 0 ? (
          <div className={styles.dropdownContainer}>
            <Dropdown list={list} onSelectedItem={() => {}}></Dropdown>
          </div>
        ) : null}
      </div>
    </div>
  );
};
