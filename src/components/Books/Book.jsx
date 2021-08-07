import s from './Book.module.scss'
import BookMapArray from './BookMapArray';

let Book = ({ book }) => {
  let volume = book.volumeInfo;

  return (
    <div key={book.id}>
      <div className={s.book__name}>
        <h3>{volume.title}</h3>
      </div>
      <div className={s.book__authors}>
        <span>Авторы: </span>
        <BookMapArray volume={volume.authors} />
      </div>
      <div className={s.book__categories}>
        <span>Категория: </span>
        <BookMapArray volume={volume.categories} />
      </div>
    </div>
  )
}

export default Book;