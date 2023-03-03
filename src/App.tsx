import React from 'react';
import './App.scss';
import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";

import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="bodyWrapper">
        <header className="header">
          <h1>Gamax interjú feladat</h1>
        </header>
        <main className="main">
          <RouterProvider router={router} />
        </main>
      </div>
    </div>
  );
}

export default App;
