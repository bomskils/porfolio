import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { ConfigProvider } from "antd";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/stack";
import Project from "./components/project";
import Contact from "./components/contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { FloatButton } from "antd";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#42446E" },
        components: {
          Anchor: {
            fontSize: 17,
            lineType: "",
            padding: 50,
            paddingXXS: 20,
          },
        },
      }}
    >
      <Navbar />
      <div className="px-5 xl:px-48 min-h-[100svh] mt-36" data-aos="fade-up">
        <Hero />
        <About />
        <Stack />
        <Project />
        <Contact />
      </div>
      <FloatButton.BackTop />
    </ConfigProvider>
  );
};

export default App;
