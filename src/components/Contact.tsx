export default function Contact() {
  return (
    <section id="contact" className="back py-20 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        
        <h2 className="text-3xl md:text-5xl font-bold ">
          Get in Touch
        </h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          Have questions about our platform or want to learn more? 
          We’d love to hear from you. Reach out to our team and we’ll 
          respond as quickly as possible.
        </p>

        <div className="flex flex-col gap-3 text-gray-400 text-lg">
          <p><strong>Email:</strong> support@quantraildata.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Chennai, India</p>
        </div>
      </div>
    </section>
  );
}