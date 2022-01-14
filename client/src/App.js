import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import UserContextProvider from "./context/context";
import Home from "./pages/Home";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
