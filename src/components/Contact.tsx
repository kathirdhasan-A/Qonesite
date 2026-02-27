import { Variants, motion } from "framer-motion";
import { SMTPClient } from "emailjs";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};






export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };



  return (
    <section id="contact" className="back py-20 px-6 bg-black text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Have questions about our platform? Reach out to our team and we’ll
          respond as quickly as possible.
        </motion.p>

        <motion.form
          variants={itemVariants}
          className="w-full flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
            />
          </div>
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
          />
          <button type="submit" className="bg-iris hover:bg-opacity-90 text-white font-bold py-4 rounded-lg transition-all active:scale-[0.98]">
            Send Message
          </button>
        </motion.form>

        <motion.div
          variants={itemVariants}
          className="flex flex-col w-full  md:flex-row gap-3 text-gray-400 md:text-lg mt-4 items-center justify-evenly"
        >
          <p className="hover:text-iris transition-colors ">
            <strong>Email</strong> <br />{" "}
            <span className="text-sm">support@quantraildata.com</span>
          </p>

          <p className="hover:text-iris transition-colors  mr-9">
            <strong>Phone</strong> <br />{" "}
            <span className="text-sm">+91 98765 43210</span>
          </p>

          <p className="hover:text-iris transition-colors  mr-16">
            <strong>Address</strong>
            <br />
            <span className="text-sm"> Chennai, India</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
