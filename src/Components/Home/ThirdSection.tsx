export default function HomeThirdSection() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-28 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#E50914]/10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Cloud & DevOps <span className="text-[#E50914]">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Production-grade AWS infrastructure provisioned with Terraform,
            secured authentication via Keycloak, and Kubernetes-based orchestration
            with full CI/CD automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-10">

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                AWS Infrastructure
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Multi-AZ VPC design with public and private subnets.
                Internet Gateway and NAT Gateway control inbound and outbound traffic.
                Application Load Balancer routes traffic securely to EKS.
              </p>
            </div>

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Kubernetes Orchestration
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Managed EKS cluster with isolated namespaces for Ingress,
                Application workloads, CI/CD, and Monitoring stack.
                ALB Ingress Controller manages external traffic routing.
              </p>
            </div>

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Authentication & Security
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Keycloak deployed inside Kubernetes for centralized identity management.
                Integrated with AWS Secrets Manager for secure credential storage
                and token-based API authorization.
              </p>
            </div>

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Observability & CI/CD
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Jenkins and GitHub Actions automate build and deployment workflows.
                Prometheus, Grafana, and Alertmanager provide real-time monitoring
                and system health visibility.
              </p>
            </div>

          </div>

          <div className="relative flex justify-center">
            
            <div className="absolute w-[500px] h-[500px] bg-[#E50914] opacity-10 blur-3xl rounded-full" />

            <img
              src="/Images/Keycloak login page.png"
              alt="Cloud Architecture Diagram"
              className="relative rounded-2xl shadow-2xl border border-gray-800"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
