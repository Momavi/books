import { Suspense } from 'react';
import Preloader from './components/common/preloader/Preloader';
import SearchContainer from './components/Seacrh/SearchContainer';
import BooksContainer from './components/Books/BooksContainer';
import PopupContainer from './components/common/popup/PopupContainer';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <PopupContainer />
      <SearchContainer />
      <Suspense fallback={<Preloader />}>
        <div className="content">
          <h2>...The books are almost here, it remains to press the button</h2>
          <BooksContainer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
