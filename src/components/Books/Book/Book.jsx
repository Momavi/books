import s from './Book.module.scss'
import BookMapArray from './BookMapArray';

let Book = ({ book, togglePopupOpen, isPopupOpen }) => {
  let volume = book.volumeInfo;

  return (
    <div className={s.book__wrapper} key={book.etag}>
      <div className={s.book__inner}>
        <img className={s.book__image__img} src={
          volume.imageLinks !== undefined
            ?
            volume.imageLinks.thumbnail
            :
            null
        } alt="" />
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
        <button onClick={() => { togglePopupOpen(book, !isPopupOpen) }} className={s.book__btn}>Show more</button>
      </div>
    </div >
  )
}

export default Book;