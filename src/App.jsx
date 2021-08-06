import { Suspense } from 'react';
import Preloader from './components/common/preloader/Preloader';
import './App.css';
import SearchContainer from './components/Seacrh/SearchContainer';

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <Suspense fallback={<Preloader />}>
        <div className="content">
          
        </div>
      </Suspense>
    </div>
  );
}

export default App;
