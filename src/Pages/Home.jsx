import React from "react";
import Header from "../Components/Header";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/#Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default Home;
