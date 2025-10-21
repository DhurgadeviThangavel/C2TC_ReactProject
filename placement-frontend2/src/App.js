import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlacementList from "./components/PlacementList";
import AddPlacement from "./components/AddPlacement";
import UpdatePlacement from "./components/UpdatePlacement";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <center><h1 className="app-title">Placement Management System</h1></center>
        <Routes>
          <Route path="/" element={<PlacementList />} />
          <Route path="/add" element={<AddPlacement />} />
          <Route path="/update/:id" element={<UpdatePlacement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
