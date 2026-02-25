export default function About() {
  return (
    <section id="about" className="back py-20 px-6 md:px-12 bg-black text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="/about-image.png"
            alt="About QuantrailData"
            className="rounded-xl shadow-lg w-[80%] md:w-full"
          />
        </div>


        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#5D3FD3]">
            About Us
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At <span className="font-semibold text-white">QuantrailData</span>, 
            we empower teams to take complete control of their data — from storage 
            to retrieval — with speed, clarity, and security. Our mission is to 
            simplify database operations while ensuring enterprise‑grade compliance.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Trusted by developers worldwide, we combine robust backend architecture 
            with intuitive interfaces, helping organizations unlock insights without 
            compromising privacy or performance.
          </p>
          <button className="bg-[#5D3FD3] px-6 py-3 rounded font-semibold w-fit hover:bg-[#4a2fb5] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}