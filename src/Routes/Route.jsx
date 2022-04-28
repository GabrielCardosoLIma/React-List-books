import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesSearchBooks from "../page/Search/Search";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesSearchBooks/>} />
      </Routes>
    </Router>
  );
};

export default Root;