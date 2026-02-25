import { motion } from "framer-motion";

export default function Packages() {
  return (
    <div className="back " id="pricing">
      <motion.div className="md:h-screen flex flex-col items-center justify-center gap-10 ">
        
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Package
          </h1>
          <p className="text-lg text-gray-200">
            Whether you’re just starting out or ready to master Webflow, 
            we’ve got a plan tailored to your journey. Each package includes 
            expert guidance, community access, and lifetime updates.
          </p>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#5D3FD3] rounded-2xl p-6 flex flex-col gap-4 text-white shadow-xl w-[320px] transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold">Complete package</h2>
            <p className="text-sm opacity-90">
              Get ahead of the game by mastering Webflow.
            </p>
            <p className="text-lg font-semibold">$699.00</p>
            <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
              <li>Full Webflow course</li>
              <li>2 months mentoring & office hours with Laura Mitchell</li>
              <li>CMS integration</li>
              <li>Relume Starter trial + Webflow discount</li>
              <li>Private community access</li>
              <li>Lifetime access & updates</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#5D3FD3] rounded-2xl p-6 flex flex-col gap-4 text-white shadow-xl w-[320px] transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold">Starter package</h2>
            <p className="text-sm opacity-90">
              Kickstart your Webflow journey with essentials.
            </p>
            <p className="text-lg font-semibold">$299.00</p>
            <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
              <li>Intro Webflow course</li>
              <li>1 month mentoring</li>
              <li>Basic CMS setup</li>
              <li>Community access</li>
              <li>Lifetime access to starter content</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}