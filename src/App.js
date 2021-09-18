import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CarouselSection from "./containers/CarouselSection";
import AppProvider from "./context/appProvider";
import Loader from "./components/Loader";

function App() {
  const [loaderShown, setLoader] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => setLoader(false), 700);
    return () => clearTimeout(time);
  }, []);
  return (
    <AppProvider>
      <main className="App">
        <Loader visible={loaderShown} />
        <Navbar />
        <CarouselSection />
      </main>
    </AppProvider>
  );
}

export default App;
