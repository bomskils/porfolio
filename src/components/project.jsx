/* eslint-disable react/jsx-no-target-blank */
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import chain from "../images/chain.svg";
import faceb from "../images/faceb.png";
import tim from "../images/timer.png";
import quiz from "../images/quiz-app.png";
import github from "../images/fill.svg";


const Project = () => {
  const projects = [
    {
      img: faceb,
      livePreviewUrl: "",
      viewCodeUrl: "https://github.com/bomskils/facebook/tree/main/facebook2",
      title: "Facebook login page",
      description: "This is an imitation of the Facebook login page, with the intention of reproducing its appearance",
      techStack: "HTML, CSS, JavaScript, Git, GitHub, VScode",
    },
    {
      img: tim,
      livePreviewUrl: "",
      viewCodeUrl: "https://github.com/bomskils/facebook/tree/main/facebook2",
      title: "Count down timer",
      description: "This is an application that is used for a timer purpose",
      techStack: "HTML, CSS, JavaScript, Git, GitHub, VScode",
    },
    {
      img: quiz,
      livePreviewUrl: "",
      viewCodeUrl: "https://github.com/bomskils/facebook/tree/main/facebook2",
      title: "Quiz Application",
      description: "This is a quiz application designed to present users with a series of questions and answer",
      techStack: "HTML, CSS, JavaScript, Git, GitHub, VScode",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      livePreviewUrl: "",
      viewCodeUrl: "https://github.com/bomskils/facebook/tree/main/facebook2",
      title: "Count down timer",
      description: "This is an application that is used for a timer purpose",
      techStack: "HTML, CSS, JavaScript, Git, GitHub, VScode",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      livePreviewUrl: "",
      viewCodeUrl: "https://github.com/bomskils/facebook/tree/main/facebook2",
      title: "Count down timer",
      description: "This is an application that is used for a timer purpose",
      techStack: "HTML, CSS, JavaScript, Git, GitHub, VScode",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      livePreviewUrl: "",
      viewCodeUrl: "https://github.com/bomskils/facebook/tree/main/facebook2",
      title: "Count down timer",
      description: "This is an application that is used for a timer purpose",
      techStack: "HTML, CSS, JavaScript, Git, GitHub, VScode",
    },
  ];
  return (
    <div className="mt-20 lg:mt-44" id="project">
      <h1 className="text-[#42446E] text-[2.6rem] font-bold font-[poppins-extrabold]">
        Projects
      </h1>
      <p className="text-[#666666] text-[1rem] font-[poppins-light] tracking-widest">
        {" "}
        Things I’ve built so far
      </p>
      <Row
        gutter={{
          xs: 0,
          xl: 16,
        }}
        className="mt-36"
      >
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={24}
            md={12}
            lg={8}
            className="mb-10"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src={project.img} className="card-image" />}
              actions={[
                <button
                  onClick={() =>
                    (window.location.href = project.livePreviewUrl)
                  }
                  className="flex items-center gap-1 ml-2"
                >
                  <img  src={chain} alt=""  />
                  Live preview
                </button>,
                <button
                  onClick={() => (window.location.href = project.viewCodeUrl)}
                  className="flex items-center gap-1 ml-2"
                >
                  <img src={github} alt="" />
                  View code
                </button>,
              ]}
            >
              <Meta title={project.title} description={project.description} />
              <Meta description={project.techStack} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;
