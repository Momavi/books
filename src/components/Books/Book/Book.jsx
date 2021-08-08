import s from './Book.module.scss'
import BookMapArray from './BookMapArray';

let Book = ({ book }) => {
  let volume = book.volumeInfo;

  return (
    <div className={s.book__wrapper} key={book.id}>
      <div className={s.book__inner}>
        <img className={s.book__image__img} src={volume.imageLinks.thumbnail} alt="" />
        <div className={s.book__info}>
          <h3 className={s.book__title}>{volume.title}</h3>
          <div className={s.book__description}>
            <div className={s.book__authors}>
              <span>Авторы: </span>
              <BookMapArray volume={volume.authors} />
            </div>
            <div className={s.book__categories}>
              <span>Категория: </span>
              <BookMapArray volume={volume.categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book;