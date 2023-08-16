import React from "react";
import location from "../images/location.svg";
import office from "../images/office.svg";
import calendar from "../images/calendar.svg";

const About = () => {
  const experience = [
    {
      role: "Quality Assurance Specialist",
      company: "Nester Global",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "Aug 2021 - Till date",
    },
    {
      role: "Payment Support",
      company: "Dlight Solar",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "Aug 2020 - march 2021",
    },
    // {
    //   role: "Junior Developer",
    //   company: "Nestar Global",
    //   location: "Lagos, Nigeria",
    //   type: "Full time",
    //   date: "Sep 2021 - Dec 2021",
    // },
  ];

  const education = [
    {
      course: "Software Development ",
      school: " SAIL INNOVATIVE LAB",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "Aug 2023",
    },
    {
      course: "B.A. History and International Relations",
      school: " Lagos State University",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "2018",
    },
    {
      course: "Diploma in Law",
      school: " Lagos State University",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "2012",
    },
  ];

  return (
    <div
      className="lg:w-[60%] mt-44"
      id="about"
      data-aos="fade-up"
      data-aos-anchor="#about"
    >
      <div>
        <h1 className="text-[#42446E] text-[2.6rem] font-bold font-[poppins-extrabold]">
          About me
        </h1>
        <p className="text-justify leading-loose text-[#666666]">
          As a highly motivated and detail-oriented junior developer, I am
          actively seeking an internship position to gain practical experience
          and contribute to a dynamic development team. My passion for software
          development drives me to continually learn and apply cutting-edge
          technologies to develop innovative solutions. Proficient in HTML, CSS,
          JavaScript, and React, I have built a solid foundation that enables me
          to excel in collaborative and fast-paced environments. I am genuinely
          excited to bring my skills and enthusiasm to the team, actively
          contributing to meaningful projects and making a positive impact.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-[#42446E] text-[2.6rem] font-bold mb-7 font-[poppins-extrabold]">
          Work Experience
        </h1>
        <div className="grid gap-5">
          {experience.map((item, index) => (
            <div
              key={index}
              className="text-[#666666] pb-5 flex justify-between items-center border-b-[1px] border-b-[#ebeaed]"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="flex flex-col items-start gap-3">
                <h1 className="text-[1.2rem] tracking-widest">{item.role}</h1>
                <section className="flex items-center justify-between gap-5 text-[0.8rem]">
                  <span className="flex items-center gap-1">
                    <img src={office} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.company}
                    </p>
                  </span>
                  <span className="hidden md:flex items-center gap-1">
                    <img src={location} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.location}
                    </p>
                  </span>
                </section>
              </div>
              <div className="flex flex-col items-end gap-3">
                <p className="rounded-3xl bg-[#D7FFE0] text-[#018C0F] px-5 text-[0.8rem] py-1 w-fit ">
                  {item.type}
                </p>
                <p className="flex items-center text-[0.8rem] tracking-widest">
                  <img src={calendar} alt="" /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-[#42446E] text-[2.6rem] font-bold mb-7 font-[poppins-extrabold]">
          Education
        </h1>
        <div className="grid gap-5">
          {education.map((item, index) => (
            <div
              key={index}
              className="text-[#666666] pb-5 flex justify-between items-center border-b-[1px] border-b-[#ebeaed]"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="flex flex-col items-start gap-3">
                <h1 className="text-[1.2rem] tracking-widest">{item.course}</h1>
                <section className="flex items-center justify-between gap-5 text-[0.8rem]">
                  <span className="flex items-center gap-1">
                    <img src={office} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.school}
                    </p>
                  </span>
                  <span className="md:flex items-center gap-1 hidden">
                    <img src={location} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.location}
                    </p>
                  </span>
                </section>
              </div>
              <div className="flex flex-col items-end gap-3">
                <p className="rounded-3xl bg-[#D7FFE0] text-[#018C0F] px-5 text-[0.8rem] py-1 w-fit ">
                  {item.type}
                </p>
                <p className="flex items-center text-[0.8rem] tracking-widest">
                  <img src={calendar} alt="" /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
