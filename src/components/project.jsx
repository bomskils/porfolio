/* eslint-disable react/jsx-no-target-blank */
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import chain from "../images/chain.svg";
import github from "../images/fill.svg";

const Project = () => {
  const projects = [
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
    <div className="mt-20 lg:mt-44" id="project" data-aos="fade-up">
      <h1 className="text-[#42446E] text-[2.6rem] font-bold font-[poppins-extrabold]">
        Projects
      </h1>
      <p className="text-[#666666] text-[1rem] font-[poppins-light] tracking-widest">
        {" "}
        Things I’ve built so far
      </p>
      <Row gutter={16} className="mt-36">
        {projects.map((project, index) => (
          <Col key={index} xs={24} md={12} lg={8} className="mb-10">
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src={project.img} />}
              actions={[
                <button
                  onClick={() =>
                    (window.location.href = project.livePreviewUrl)
                  }
                  className="flex items-center gap-1 ml-2"
                >
                  <img src={chain} alt="" />
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
