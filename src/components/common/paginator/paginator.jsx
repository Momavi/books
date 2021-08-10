import { useState } from 'react';
import s from './paginator.module.scss'
import cn from 'classnames';

let Paginator = ({ totalBooksCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalBooksCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount - 1; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <ul className={s.counter}>
      {portionNumber > 1 &&
        <button className={s.btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
          return <span className={cn({
            [s.active]: currentPage === p
          }, s.counter__item)}
            key={p}
            onClick={(e) => { onPageChanged(p) }}>{p}</span>
        })}
      {portionCount > portionNumber &&
        <button className={s.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </ul>
  )
}

export default Paginator;