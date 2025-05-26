import { IoSearchSharp } from "react-icons/io5";
import Styles from "./Search.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={Styles.search}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
