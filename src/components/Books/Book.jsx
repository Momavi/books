import s from './Book.module.scss'

let Book = ({ book }) => {
  let volume = book.volumeInfo;

  return (
    <div key={book.id}>
      <h2>{book.id}</h2>
      <div className={s.book__authors}>
        <span>Авторы: </span>
        {
          volume.authors !== undefined
            ?
            volume.authors.map((value, index) => {
              return (
                volume.authors.length - 1 > index
                  ?
                  <span key={index}>{value}, </span>
                  :
                  <span key={index}>{value}</span>
              )
            })
            :
            null
        }
      </div>
      <div className={s.book__categories}>
        <span>Категория: </span>
        {
          volume.categories !== undefined
            ?
            volume.categories.map((value, index) => {
              return (
                volume.categories.length - 1 > index
                  ?
                  <span key={index}>{value}, </span>
                  :
                  <span key={index}>{value}</span>
              )
            })
            :
            null
        }
      </div>
    </div>
  )
}

export default Book;