import styles from "./SearchBar.module.css";
import searchIcon from "../../svg/searchIcon.svg";

const SearchBar = () => {
  return (
    <form action="" className={styles.searchBar}>
      <img src={searchIcon} alt="" />
      <input type="text" />
      <button>search</button>
    </form>
  );
};

export default SearchBar;
