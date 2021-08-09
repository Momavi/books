import Book from "./Book/Book";
import Paginator from './../common/paginator/paginator'
import Preloader from './../common/preloader/Preloader'
import s from './Books.module.scss'

function Books({ books, onPageChanged, pageSize, totalBooksCount, currentPage, isFetching }) {
  return (
    <div>
      <h2>Total books we found: {totalBooksCount}</h2>
      <div className={s.books__paginator}>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalBooksCount={totalBooksCount}
          pageSize={pageSize} />
      </div>
      <div className={s.books__wrapper}>
        {isFetching
          ?
          <Preloader />
          :
          books !== undefined
            ?
            books.map((u) =>
              <Book
                book={u}
                key={u.etag} />
            )
            :
            <span className={s.error}>Книги пропали(попробуйте снова)</span>
        }
      </div>
    </div>
  )
}

export default Books;