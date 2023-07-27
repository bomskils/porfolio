import React from "react";
import ProfileImage from "../images/profile.jpg";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 mt-36 hero" id="home">
      <section className="text-[2.6rem] lg:text-[3.6rem] font-bold text-[#42446E] font-[poppins-extrabold]">
        Hi 👋, <br /> My name is <br />
        <span className="name">Boma Da-ala</span><br />I build things for web
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