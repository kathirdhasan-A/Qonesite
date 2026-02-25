import { motion } from "framer-motion";

export default function () {
  return (
    <div className="back">
      <motion.div className="h-screen flex gap-3 justify-center">
        <motion.div className="h-100 bg-[#5D3FD3] rounded-2xl p-4 flex flex-col  justify-around">
            <h1>Complete package</h1>
            <p>Get ahead of the game by mastering Webflow.</p>
            <p>$699.00</p>
            <ul  style={{ listStyleType: 'circle' }}>
                <li>Full Webflow course</li>
                <li>2 months mentoring & office hours with Laura Mitchell</li>
                <li>CMS integration</li>
                <li>Relume Starter trial + Webflow discount</li>
                <li>Private community access</li>
                <li>Lifetime access & updates</li>
            </ul>
        </motion.div>
        <motion.div className="h-100 bg-[#5D3FD3] rounded-2xl p-4 flex flex-col  justify-around">
            <h1 className="text-xl font-semibold">Complete package</h1>
            <p>Get ahead of the game by mastering Webflow.</p>
            <p>$699.00</p>
            <ul style={{ listStyleType: 'circle' }}>
                <li>Full Webflow course</li>
                <li>2 months mentoring & office hours with Laura Mitchell</li>
                <li>CMS integration</li>
                <li>Relume Starter trial + Webflow discount</li>
                <li>Private community access</li>
                <li>Lifetime access & updates</li>
            </ul>
        </motion.div>

      </motion.div>
    </div>
  );
}
