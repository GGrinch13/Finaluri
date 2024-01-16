import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manage_Users from "./Pages/Manage_Users";
import AboutPage from "./Pages/AboutPage";
import Navigation from "./Pages/Navigation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/manage-users" element={<Manage_Users />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
