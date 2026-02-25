import About from "@/components/about";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import Pricing from "@/components/Pricing";
import Solutions from "@/components/Solutions";
import Visual from "@/components/Visual";
import { motion } from "framer-motion";




export default function Home() {
  return (
    <motion.div  >
      <MainSection />
      <Visual />
      <About/>
      <Solutions/>
      <Features />
      <Pricing/>
      <Faq/>
      <Contact/>
      <Footer/>
    </motion.div>
  );
}
