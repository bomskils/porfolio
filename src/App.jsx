import React from "react";
import Navbar from "./components/Navbar";
import { ConfigProvider } from "antd";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/stack";

const App = () => {
  return (
    <ConfigProvider theme={{components: {
      Anchor: {
        fontSize: 17,
        lineWidthBold: 0
      }
    }}}>
      <div className="px-5 xl:px-48 min-h-[100svh]">
        <Navbar />
        <Hero />
        <About />
        <Stack />
      </div>
    </ConfigProvider>
  );
};

export default App;
