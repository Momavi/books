import Book from "./Book";

function Books({ books, pageSize, totalBooksCount, currentPage }) {
  return (
    <div>
      <h2>Total books we found: {totalBooksCount}</h2>
      {
        books.map((u) =>
          <Book
            book={u}
            key={u.id} />
        )
      }
    </div>
  )
}

export default Books;