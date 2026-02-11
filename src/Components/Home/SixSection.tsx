export default function HomeSixSection() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#E50914]/10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Cloud <span className="text-[#E50914]">Infrastructure</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A production-grade AWS architecture designed for scalability,
            high availability, and secure Kubernetes-based workloads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          <div className="space-y-8">

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Multi-AZ VPC Design
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Custom VPC spanning multiple Availability Zones with isolated
                public and private subnets. NAT Gateway ensures secure outbound
                traffic for private workloads.
              </p>
            </div>

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Managed Kubernetes (EKS)
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Amazon EKS cluster hosting application workloads, CI/CD tools,
                and monitoring stack with namespace isolation.
              </p>
            </div>

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Secure Networking & IAM
              </h3>
              <p className="text-gray-400 leading-relaxed">
                IAM roles and policies enforce least-privilege access,
                integrated with Secrets Manager for secure credential handling.
              </p>
            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute w-[500px] h-[500px] bg-[#E50914] opacity-10 blur-3xl rounded-full" />

            <img
              src="/images/cloud-architecture.png"
              alt="Cloud Architecture Diagram"
              className="relative rounded-2xl border border-gray-800 shadow-2xl hover:scale-105 transition duration-500 w-full max-w-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-4">
            <img
              src="/images/vpc-overview.png"
              alt="VPC Overview"
              className="rounded-xl mb-4"
            />
            <p className="text-gray-400 text-sm">
              AWS VPC configuration and subnet segmentation.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-4">
            <img
              src="/images/eks-cluster.png"
              alt="EKS Cluster"
              className="rounded-xl mb-4"
            />
            <p className="text-gray-400 text-sm">
              Kubernetes cluster workloads and namespace isolation.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-4">
            <img
              src="/images/monitoring-dashboard.png"
              alt="Monitoring Dashboard"
              className="rounded-xl mb-4"
            />
            <p className="text-gray-400 text-sm">
              Observability stack with metrics and alerting.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
