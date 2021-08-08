import { useState } from 'react';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 30 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <ul className="books__counter">
      {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
          return <li className={currentPage === p && 'active'}
            key={p}
            onClick={(e) => { onPageChanged(p) }}>{p}</li>
        })}
      {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </ul>
  )
}

export default Paginator;