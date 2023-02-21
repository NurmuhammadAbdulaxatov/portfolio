import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import "./index.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Projects />
    </div>
  );
}

export default App;
