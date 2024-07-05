'use client';

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_xc1hwel', 'template_6c35glu', form.current, '7C_kISTOOFvcoCOxm')
        .then((result) => {
          console.log(result.text);
          alert("Your message has been sent.");
          form.current?.reset();  // Formu sıfırla
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="container" id="contact">
      <div className="title">
        <h1>Con<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {""}
            tact{" "}
          </span></h1>
      </div>
      <div className="inputs">
        <form ref={form} onSubmit={sendEmail}>
          <div className="bir">
            <label>
              <p className="name">Name:</p>
              <input id="name" type="text" name="name" required />
            </label>
            <br />
            <label>
              <p className="name">Email:</p>
              <input id="email" type="email" name="email" required />
            </label>
          </div>
          <br />
          <label>
            <p className="name">Write your post:</p>
            <textarea id="message" name="postContent" rows={4} cols={40} required />
          </label>
          <br />
          <input className=" bg-gradient-to-r from-purple-500 to-cyan-500" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
