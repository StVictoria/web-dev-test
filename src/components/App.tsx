import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./base/Header";
import HomePage from "./pages/HomePage";
import "./App.scss";
import { TestNames } from "../enums/testEnums";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Header title="JavaScript & React & Redux" />
      <main className="App-Main">
        <Routes>
          <Route
            path={`test/${TestNames.JavaScript}`}
            element={<TestPage testName={TestNames.JavaScript} />}
          />
          <Route
            path={`test/${TestNames.React}`}
            element={<TestPage testName={TestNames.React} />}
          />
          <Route
            path={`test/${TestNames.Redux}`}
            element={<TestPage testName={TestNames.Redux} />}
          />
          <Route
            path={`test/${TestNames.Patterns}`}
            element={<TestPage testName={TestNames.Patterns} />}
          />
          <Route
            path={`test/${TestNames.InterviewJS}`}
            element={<TestPage testName={TestNames.InterviewJS} />}
          />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
