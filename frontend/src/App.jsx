import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Chats from "./components/Chats";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}

export default App;
