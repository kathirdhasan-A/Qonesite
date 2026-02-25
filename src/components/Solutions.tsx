export default function Solutions() {
  return (
    <section id="solutions" className="back py-20 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#5D3FD3]">
            Our Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We deliver powerful, scalable, and secure database solutions that 
            empower teams to move faster, stay compliant, and unlock insights 
            with clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-[#1a1a1a] rounded-xl p-8 shadow-lg flex flex-col gap-4 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white"> Speed & Efficiency</h3>
            <p className="text-gray-400">
              Optimize database operations with lightning‑fast queries and 
              streamlined workflows, reducing downtime and boosting productivity.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-8 shadow-lg flex flex-col gap-4 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white"> Security & Compliance</h3>
            <p className="text-gray-400">
              Protect sensitive data with enterprise‑grade encryption, role‑based 
              access, and compliance with global standards.
            </p>
          </div>


          <div className="bg-[#1a1a1a] rounded-xl p-8 shadow-lg flex flex-col gap-4 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white"> Insightful Analytics</h3>
            <p className="text-gray-400">
              Gain actionable insights with built‑in analytics dashboards, 
              helping teams make smarter decisions in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}