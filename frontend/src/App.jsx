import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Chats from "./components/Chats";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
