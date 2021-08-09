import SearchForm from "./SearchForm/SearchForm";

import s from './Search.module.scss'

function Search(props) {
  return (
    <div className={s.search}>
      <div className={s.search__wrapper}>
        <h1 className={s.search__title}>Search for books</h1>
        <SearchForm booksPage={props.booksPage} setFormData={props.setFormData} getBooks={props.getBooks}/>
      </div>
    </div>
  )
}

export default Search;