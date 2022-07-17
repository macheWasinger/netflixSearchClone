import React from "react";

import Search from "./components/Search";

/* IMPORTO CSS VERSIÓN "DESKTOP" */
import "../src/css/Search/SearchDESKTOP.css";
import "../src/css/NavBar/NavBarDESKTOP.css";

/* IMPORTO CSS VERSIÓN "MOBILE" */
import "../src/css/Search/SearchMOBILE.css";
import "../src/css/NavBar/NavBarMOBILE.css";

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
