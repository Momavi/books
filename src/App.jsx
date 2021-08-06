import { Suspense } from 'react';
import Preloader from './components/common/preloader/Preloader';
import './App.css';
import SearchContainer from './components/Seacrh/SearchContainer';
import BooksContainer from './components/Books/BooksContainer';

function App(props) {
  return (
    <div className="App">
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
