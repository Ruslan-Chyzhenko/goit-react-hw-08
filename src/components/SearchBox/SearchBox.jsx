import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  //
  const inputId = nanoid();

  const handleFilterChange = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor={inputId} className={css.labelSearch}>
        Find contacts by name
      </label>
      <input
        id={inputId}
        type="text"
        className={css.searchInput}
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
