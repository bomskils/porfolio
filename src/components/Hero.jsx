import React from "react";
import ProfileImage from "../images/profile.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      className="grid md:grid-cols-2 mt-14 lg:mt-36 hero"
      id="home"
      data-aos="fade-up"
    >
      <section className="text-[2.6rem] lg:text-[3.6rem] font-bold text-[#42446E] font-[poppins-extrabold]">
        Hi 👋, <br /> My name is <br />
        <span className="name">Boma Da-ala</span>
        <br />
        <Typewriter
          options={{
            strings: " I build things for web",
            autoStart: true,
            loop: true,
          }}
        />
      </section>
      <section>
        <img
          src={ProfileImage}
          alt=""
          className="rounded-full w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] p-2 profile-image md:float-right object-contain"
        />
      </section>
    </div>
  );
};

export default Hero;
