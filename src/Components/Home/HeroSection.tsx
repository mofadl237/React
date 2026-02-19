export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/image.png"
          alt="Netflix Background"
          className="
            w-full h-full object-cover
            opacity-50
            blur-sm
            scale-110
          "
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Building a Production-Grade{" "}
          <span className="text-[#E50914]">Netflix Clone</span>
        </h1>

        <p className="text-gray-200 text-lg mb-6 leading-relaxed">
          This project is a full-scale DevOps implementation inspired by{" "}
          <span className="text-white font-semibold">Netflix</span>.
          We designed and deployed a scalable cloud-native architecture
          using React, TypeScript, AWS, Terraform, and Kubernetes.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The goal was not just to recreate the UI — but to simulate a
          real-world production deployment pipeline with automation,
          monitoring, and infrastructure as code.
        </p>
      </div>

    </section>
  );
}
