import React from "react";
import "./AppointmentForm.css";
import { Form, Input, Button, Select, Card } from "antd";

const { Option } = Select;

function AppointmentForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("values : ", values);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Contact Us</h2>
        <h1>Make an Appointment</h1>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <div className="form-grid">
            <Form.Item name="fullname">
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "enter a valid email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="dept" rules={[{ required: true }]}>
              <Select placeholder="please select">
                <Option value="d1">dept1</Option>
                <Option value="d2">dept2</Option>
                <Option value="d3">dept3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="time" rules={[{ required: true }]}>
              <Select placeholder="4:00 AM available">
                <Option value="4:00">4:00 available</Option>
                <Option value="5:00">5:00 available</Option>
              </Select>
            </Form.Item>
            <Form.Item name="message" className="fullwidth">
              <Input.TextArea placeholder="Message" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="fullwidth">
              Book Appointment
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AppointmentForm;
