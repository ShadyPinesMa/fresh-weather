import React from "react";
import Search from "./Search";
import City from "./City";
import Status from "./Status";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
     <Search />
     <City />
     <Status />
     <Temperature />
     <Forecast />
     <Footer />
    </div>
  );
}

export default App;
