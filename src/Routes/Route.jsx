import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesFormBooks from "../page/Formbooks/Formbooks";
import PagesListBooks from "../page/Listbooks/Listbooks";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesListBooks/>} />
        <Route path="/create" element={<PagesFormBooks/>} />
        <Route path="/edit/:id" element={<PagesFormBooks/>} />
      </Routes>
    </Router>
  );
};

export default Root;