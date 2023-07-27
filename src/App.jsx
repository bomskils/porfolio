import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { ConfigProvider } from "antd";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/stack";
import Project from "./components/project";
import Contact from "./components/contact";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#42446E" },
        components: {
          Anchor: {
            fontSize: 17,
            // lineWidthBold: 0
          },
        },
      }}
    >
      <div className="px-5 xl:px-48 min-h-[100svh]" data-aos="fade-up">
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Project />
        <Contact />
      </div>
    </ConfigProvider>
  );
};

export default App;
