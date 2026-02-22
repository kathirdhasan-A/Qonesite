import { Variants, motion } from "framer-motion";
import { div } from "framer-motion/client";
import { BsCloudPlus } from "react-icons/bs";


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

export default function CTA() {
    return (
        <div className="back">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.2 }}
                className="flex  px-2 flex-col items-center py-10 gap-4">
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
                    Ready to take control of your data?
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-xl">
                    Join thousands of developers who trust QuantrailData for speed, clarity, and secure database management.
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button className="bg-[#5D3FD3] px-4 py-2 sm:px-6  sm:py-3 rounded font-semibold text-white justify-center flex items-center gap-2">
                        <BsCloudPlus className="md:hidden h-5 w-5 " />
                        <span className="hidden md:block">Get Instant Access</span>
                    </button>
                    <button className="bg-gray-600 px-4 py-2 sm:px-6 sm:py-3 rounded font-semibold text-white hover:ring-2 ring-[#A0A0A0]">
                        Learn More
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}