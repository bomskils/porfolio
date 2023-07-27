import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import git from "../images/git.svg";
import github from "../images/github-2.svg";
import tailwind from "../images/tailwindcss.svg";
import react from "../images/reactjs.svg";
import redux from "../images/redux.svg";
import vs from "../images/vs.svg";

const Stack = () => {
  const images = [git, html, css, js, github, tailwind, react, redux, vs];

  return (
    <div className="mt-20 lg:mt-44" id="tech-stack" data-aos="fade-up">
      <h1 className="text-[#42446E] text-[2.6rem] font-bold font-[poppins-extrabold]">
        My Tech Stack
      </h1>
      <p className="text-[#666666] text-[1rem] font-[poppins-light] tracking-widest">
        {" "}
        Technologies I’ve been working with recently
      </p>
      <div className="mx-auto w-[70%] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-20 lg:mt-48 gap-20">
        {images.map((image, index) => (
          <img
            key={index}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
