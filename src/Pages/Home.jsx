import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
};

export default Home;
