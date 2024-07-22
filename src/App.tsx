import { useState } from "react";
import "./index.css";
import Pizza from "./pages/Pizza";
import Header from "./layouts/Header";
import Menu from "./features/Menu";
import Footer from "./layouts/Footer";


function App() {

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;


