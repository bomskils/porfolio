import { Button, Card, Col, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useRef, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import EmailResponseModal from "./Email-response-modal";

const Contact = () => {
  const form = useRef(null);
  // Initialize the useForm hook
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(0);

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_gkc4z8k",
        "template_h7r3ywz",
        form.current,
        "4sE4EHI_8Sp25DLgk"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setStatus(response.status);
          setOpen(true);
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
          setStatus(500);
          setOpen(true);
        }
      );
  };
  return (
    <div id="contact" className="mt-36" data-aos="fade-up">
      <h1 className="text-[#42446E] text-[2.6rem] font-bold font-[poppins-extrabold]">
        Contact
      </h1>
      <h2 className="text-[#1E0E62] text-[1.6rem] lg:text-[3.6rem] mt-20 font-[poppins-extrabold] text-center">
        For any questions please click the mail below to send a mail: <br />{" "}
        <span
          className="name cursor-pointer"
          onClick={() => (window.location.href = "mailto:dalaboma@gmail.com")}
        >
          dalaboma@gmail.com
        </span>
      </h2>
      <Card>
        <EmailResponseModal open={open} setOpen={setOpen} status={status} />
        <form className="lg:w-1/2 mx-auto" ref={form} onSubmit={sendMail}>
          <Row style={{ width: "100%" }}>
            <Col span={24} className="mb-5">
              <label htmlFor="name">Your Name</label>
              <Input className="py-2 mt-2" name="to_name" required />
            </Col>
            <Col span={24} className="mb-5">
              <label htmlFor="email">Your Email</label>
              <Input type="email" name="from_name" className="py-2 mt-2" />
            </Col>
            <Col span={24} className="mb-5">
              <label htmlFor="message">Meesage</label>
              <TextArea name="message" rows={10} className="mt-2" />
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                icon={<SendOutlined />}
                className="bg-[#42446E] flex items-center justify-center py-5"
                block
                htmlType="submit"
                loading={loading}
              >
                Send
              </Button>
            </Col>
          </Row>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
