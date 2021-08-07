function Books({ books, pageSize, totalBooksCount, currentPage }) {
  console.log(books[0])
  return (
    <div>
      <h2>Total books we found: {totalBooksCount}</h2>
    </div>
  )
}

export default Books;