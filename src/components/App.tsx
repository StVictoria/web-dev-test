import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./base/Header";
import HomePage from "./pages/HomePage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header title="JavaScript & React & Redux" />
      <main className="App-Main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
