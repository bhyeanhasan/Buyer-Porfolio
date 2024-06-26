import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout/Layout.jsx";
import Home from "./Pages/Home/index.jsx";
import ScrollToTop from "./utils/scrollToTop";



function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
