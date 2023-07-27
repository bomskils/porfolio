import { Button, Card, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useRef } from "react";
import { SendOutlined } from "@ant-design/icons";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    // e.preventDefault();
    emailjs.sendForm(
        "service_gkc4z8k",
        "template_h7r3ywz",
        form.current,
        "4sE4EHI_8Sp25DLgk"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
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
        <Form
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="lg:w-1/2 mx-auto"
          ref={form}
          onSubmit={(e) => sendMail(e.preventDefault)}
        >
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              <Form.Item label="Name" name="to_name">
                <Input className="py-2" name="to_name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Email" name="from_name">
                <Input type="email" name="from_name" className="py-2" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Message" name="message">
                <TextArea name="message" rows={10} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                icon={<SendOutlined />}
                className="bg-[#42446E] flex items-center justify-center py-5"
                block
                htmlType="submit"
              >
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
