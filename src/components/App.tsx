import Header from './base/Header';
import HomePage from './pages/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
     <Header title="JavaScript & React & Redux" />
      <main className="App-Main">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
