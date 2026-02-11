export default function HomeSecondSection() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            What We <span className="text-[#E50914]">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A complete cloud-native production simulation combining frontend engineering,
            infrastructure as code, CI/CD automation, and Kubernetes orchestration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-black border border-gray-800 hover:border-[#E50914] transition duration-300 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-[#E50914]">
              Cloud Infrastructure
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Designed a scalable AWS infrastructure using Terraform,
              including VPC, EKS cluster, IAM roles, and secure networking.
            </p>
          </div>

          <div className="bg-black border border-gray-800 hover:border-[#E50914] transition duration-300 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-[#E50914]">
              CI/CD Automation
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Implemented automated pipelines with GitHub Actions and Jenkins
              to build, test, and deploy containers into Kubernetes.
            </p>
          </div>

          <div className="bg-black border border-gray-800 hover:border-[#E50914] transition duration-300 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-[#E50914]">
              Observability & Monitoring
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Integrated monitoring and logging solutions to track system health,
              performance metrics, and application logs in real-time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
