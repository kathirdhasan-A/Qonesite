import Link from "next/link";
import { motion } from 'framer-motion';
import { Variants } from "framer-motion";
import { BsCloudPlus } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";


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

const navVariants : Variants = {
    hidden:{opacity:0},
    visible:{
        opacity:1,
        transition:{duration:0.8, ease:"easeIn"}
    }
}

export default function MainSection() {
    return (
        <div className="flex back flex-col md:justify-around  items-center bg-black md:h-screen pt-5 px-2  md:pt-10">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={navVariants}
             viewport={{ once: true, amount: 0.2 }}
             className="flex w-full h-15 items-center justify-between md:justify-around">
                <div className="flex items-center justify-center gap-2">
                    <img src="/logo.png" alt="qunt" className="md:w-12 w-8" />
                    <h1 className="font-bold  text-[#5D3FD3] md:text-2xl ">QuantrailData</h1>
                </div>
                <div className="w-[45%]  hidden md:flex justify-between text-lg transition text-[#A0A0A0]">
                    <Link href={'#'}
                        className="hover:border-b  border-b-[#5D3FD3] hover:text-[#5D3FD3] transition duration-300 ease-in-out"

                    >About Us</Link>
                    <Link href={'#'}
                        className="hover:border-b  border-b-[#5D3FD3] hover:text-[#5D3FD3] transition duration-300 ease-in-out"
                    >Features</Link>
                    <Link href={'#'}
                        className="hover:border-b  border-b-[#5D3FD3] hover:text-[#5D3FD3] transition duration-300 ease-in-out"
                    >Solutions</Link>
                    <Link href={'#'}
                        className="hover:border-b  border-b-[#5D3FD3] hover:text-[#5D3FD3] transition duration-300 ease-in-out"
                    >Pricing</Link>
                    <Link href={'#'}
                        className="hover:border-b  border-b-[#5D3FD3] hover:text-[#5D3FD3] transition duration-300 ease-in-out"
                    >FAQs</Link>
                    <Link href={'#'}
                        className="hover:border-b  border-b-[#5D3FD3] hover:text-[#5D3FD3] transition duration-300 ease-in-out"
                    >Contact</Link>
                </div>
                <div className="flex items-center gap-3">
                    <button className="md:bg-[#5D3FD3] md:px-3 md:py-3 rounded block font-semibold">
                        <span className="hidden md:block">
                            Get Instant Access
                        </span>
                        <BsCloudPlus className="md:hidden h-5 w-5 "/>
                    </button>
                    <RxHamburgerMenu  className="block md:hidden h-7 w-6" />
                </div>
            </motion.div>


            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
             viewport={{ once: true, amount: 0.2 }}
                className="w-full flex flex-col items-center h-[80%] gap-7"
            >
                <motion.div variants={itemVariants} className="bg-charcoal w-[55%] text-[#A0A0A0] py-12">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="h-13 w-13 justify-center flex items-center">
                            <img src="/logo.png" alt="User 5" className="w-12 rounded" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className=" text-sm md:text-lg text-white font-semibold">
                                Trusted by <span className="text-[#5D3FD3]">Developers</span> team worldwide
                            </p>
                            <div className="flex items-center justify-center md:justify-start mt-2">
                                <span className="text-teal font-bold hover:text-white mr-2">Excellent</span>
                                <div className="flex text-teal-600 hover:text-teal-300">★★★★★</div>
                                <span className="ml-2 hover:text-white">4.8/5</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="w-[55%] font-semibold text-white text-2xl md:text-7xl text-center flex justify-center">
                    <p>
                        From storage to <strong className="font-semibold text-[#5D3FD3]"> retrieval — complete control over your database</strong>
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="h-12 md:tracking-wider flex text-center justify-center items-center">
                    <p className="text-[#A0A0A0]">Simply database operation with speed and clarity</p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-5">
                    <button className="bg-[#5D3FD3] text-sm p-2 md:text-md md:px-4 md:py-2 rounded font-semibold">Get Instant Access</button>
                    <button className="bg-gray-500 text-sm p-2 md:text-md md:px-4 md:py-2 hover:ring-2 rounded ring-[#A0A0A0]">Learn More</button>
                </motion.div>
            </motion.div>

        </div>
    );
}