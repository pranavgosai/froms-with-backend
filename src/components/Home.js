import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [Email, setEmail] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Email,
      }),
    });

    console.log(res);
  };

  return (
    <>
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>send Email with react & nodes</h2>
        </div>
        <div className="d-flex justify-content-center">
          <Form className="mt-2 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your Email </Form.Label>
              <Form.Control
                type="email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={sendEmail}>
              send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Home;
