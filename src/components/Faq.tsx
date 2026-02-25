import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
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

export default function Faq() {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div className="back">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className=" flex flex-col justify-evenly gap-4 items-center md:h-screen "
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <h1 className="text-2xl w-[60%] sm:text-3xl md:text-5xl font-semibold text-white text-center ">
            Frequently asked questions
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full justify-center flex flex-col items-center gap-3 transition duration-300"
        >
          <motion.div
            variants={itemVariants}
            className="border w-[80%] md:w-[40%] border-[#5D3FD3]/20 px-4 py-5 flex flex-col rounded-xl gap-3"
          >
            <div className="flex gap-1 items-center justify-between">
              <h2 className="text-sm md:text-lg font-semibold">How does Quantrial ensure my data stays private?</h2>
              <MdOutlineKeyboardArrowDown
                className="cursor-pointer border  border-[#5D3FD3]/20  rounded-full text-4xl p-1 transition duration-600"
                onClick={() => setFaqOpen(!faqOpen)}
              />
            </div>
            {faqOpen && (
              <p>
                We deploy on-promise or in your own cloud environment, so your
                data never leaves your controlled network
              </p>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border w-[80%] md:w-[40%] border-[#5D3FD3]/20 px-4 py-5 flex flex-col rounded-xl gap-3"
          >
            <div className="flex gap-1 items-center justify-between">
              <h2 className="text-sm md:text-lg font-semibold">Do I need coding skillw to use Quantrail ?</h2>
              <MdOutlineKeyboardArrowDown
                className="cursor-pointer border  border-[#5D3FD3]/20  rounded-full text-4xl p-1 transition duration-600"
                onClick={() => setFaqOpen(!faqOpen)}
              />
            </div>
            {faqOpen && (
              <p>
                While it's not a no-code tool, our natural langurage interface
                lets you adk questions and get insights without complex queries.
              </p>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border w-[80%] md:w-[40%] border-[#5D3FD3]/20 px-4 py-5 flex flex-col rounded-xl gap-3"
          >
            <div className="flex gap-1 items-center justify-between">
              <h2 className="text-sm md:text-lg font-semibold">What deployment options are available</h2>
              <MdOutlineKeyboardArrowDown
                className="cursor-pointer border  border-[#5D3FD3]/20  rounded-full text-4xl p-1 transition duration-600"
                onClick={() => setFaqOpen(!faqOpen)}
              />
            </div>
            {faqOpen && (
              <p>
                You can deploy full on-premise or bring your own cloud
                infrastructure to maintain compliance and pricacy.
              </p>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border w-[80%] md:w-[40%] border-[#5D3FD3]/20 px-4 py-5 flex flex-col rounded-xl gap-3"
          >
            <div className="flex gap-1 items-center justify-between">
              <h2 className="text-sm md:text-lg font-semibold">How quickly can i start using the platform ?</h2>
              <MdOutlineKeyboardArrowDown
                className="cursor-pointer border  border-[#5D3FD3]/20  rounded-full text-4xl p-1 transition duration-600"
                onClick={() => setFaqOpen(!faqOpen)}
              />
            </div>
            {faqOpen && (
              <p>
                Setup is streanlined to get you running with real-time analytics
                in a matter of minutes, not weeks.
              </p>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border w-[80%] md:w-[40%] border-[#5D3FD3]/20 px-4 py-5 flex flex-col rounded-xl gap-3"
          >
            <div className="flex gap-1 items-center justify-between">
              <h2 className="text-sm md:text-lg font-semibold">
                Is Quantrail secure and complaint with industry standards?
              </h2>
              <MdOutlineKeyboardArrowDown
                className="cursor-pointer border  border-[#5D3FD3]/20  rounded-full text-4xl p-1 transition duration-600"
                onClick={() => setFaqOpen(!faqOpen)}
              />
            </div>
            {faqOpen && (
              <p>
                Yes, security is built into every layer, ensuring
                enterprise-grade compliance and data protection.
              </p>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border w-[80%] md:w-[40%] border-[#5D3FD3]/20 px-4 py-5 flex flex-col rounded-xl gap-3"
          >
            <div className="flex gap-1 items-center justify-between">
              <h2 className="text-sm md:text-lg font-semibold">Do I need to learn new tools to use Quantrail?</h2>
              <MdOutlineKeyboardArrowDown
                className="cursor-pointer border  border-[#5D3FD3]/20  rounded-full text-4xl p-1 transition duration-600"
                onClick={() => setFaqOpen(!faqOpen)}
              />
            </div>
            {faqOpen && (
              <p>
                The interface is intuitive and designed to fit seamlessly into
                anlayst's existing workflows.
              </p>
            )}
          </motion.div>
          {/* <motion.div className="border w-[40%] p-4 flex flex-col gap-3">
          <h2 className="text-lg font-semibold"></h2>
          { faqOpen &&<p></p>}
        </motion.div> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
