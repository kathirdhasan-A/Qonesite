import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import Visual from "@/components/Visual";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";




export default function Home() {
  return (
    <motion.div >
      <MainSection />
      <Visual />
      <CTA />
      <Footer/>
    </motion.div>
  );
}
