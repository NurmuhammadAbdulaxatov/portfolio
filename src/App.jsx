import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./index.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
