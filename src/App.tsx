import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Editor from "./Pages/Editor";
import Templates from "./components/Templates";
import { Footer, Header } from "./components";
import About from "./Pages/About";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col items-center w-full relative">
          <Header />
          <div className="max-w-[1500px] w-full shrink-0 min-h-screen  mt-[68px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="templates" element={<Templates />} />
              <Route path="about" element={<About />} />
              <Route path="templates/:id" element={<Editor />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
