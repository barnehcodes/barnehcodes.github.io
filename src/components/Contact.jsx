import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_a6za2qq
//service_i9rxrlq
//_UIep6dhb5pvPUI9i

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_i9rxrlq",
        "template_a6za2qq",
        {
          from_name: form.name,
          to_name: "Otmane",
          from_email: form.email,
          to_email: "otmanebekkaoui212@gmail.com",
          message: form.message,
        },
        "_UIep6dhb5pvPUI9i"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for the message, i will be responding as soon as possible "
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong!!!");
        }
      );
  };

  return (
    <div
      className="
      xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none 
               font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none 
               font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="what do you want to say ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none 
               font-medium"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none
           w-fit text-whitw font-bold
           shadow-md shadow-primary "
            type="submit"
          >
            {" "}
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact");
