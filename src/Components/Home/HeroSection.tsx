export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#E50914]/20" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Building a Production-Grade{" "}
            <span className="text-[#E50914]">Netflix Clone</span>
          </h1>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            This project is a full-scale DevOps implementation inspired by{" "}
            <span className="text-white font-semibold">Netflix</span>.  
            We designed and deployed a scalable cloud-native architecture 
            using React, TypeScript, AWS, Terraform, and Kubernetes.
          </p>

          <p className="text-gray-400 leading-relaxed">
            The goal was not just to recreate the UI — but to simulate a 
            real-world production deployment pipeline with automation,
            monitoring, and infrastructure as code.
          </p>
        </div>

        {/* Right Image with Background Effect */}
        <div className="relative flex justify-center">
          
          {/* Red Glow Behind Image */}
          <div className="absolute w-[420px] h-[420px] bg-[#E50914] opacity-20 blur-3xl rounded-full" />

          {/* Image */}
          <img
            src="/images/netflix-placeholder.jpg"
            alt="Netflix UI Preview"
            className="relative rounded-2xl shadow-2xl object-cover w-full max-w-md h-[450px]"
          />
        </div>

      </div>
    </section>
  );
}
