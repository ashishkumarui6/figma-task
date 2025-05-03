import React from "react";
import Navbar from "./helper/Navbar";
import Home from "./pages/Home";
import Footer from "./helper/Footer";

const App = () => {
  return (
    <>
      <main>
        <header>
          <Navbar />
          <Home />
          <Footer />
        </header>
      </main>
    </>
  );
};

export default App;
