import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import Pricing from "@/components/Pricing";
import Visual from "@/components/Visual";
import { motion } from "framer-motion";




export default function Home() {
  return (
    <motion.div  >
      <MainSection />
      <Visual />
      <Features />
      <Pricing/>
      <Faq/>
      <Footer/>
    </motion.div>
  );
}
