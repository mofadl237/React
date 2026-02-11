export default function ArchitecturePage() {
  return (
    <div className="space-y-12 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          System Architecture Overview
        </h1>
        <p className="text-gray-400 leading-relaxed">
          The platform is designed as a production-grade cloud-native system
          deployed on AWS using Infrastructure as Code, Kubernetes orchestration,
          secure authentication, and full CI/CD automation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          High-Level Architecture
        </h2>

        <img
          src="/images/cloud-architecture.png"
          alt="Cloud Architecture Diagram"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          The system operates inside a dedicated AWS region using a multi-AZ VPC.
          Public subnets host the Application Load Balancer while private subnets
          host EKS worker nodes for secure workload isolation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-6">
          Core Infrastructure Components
        </h2>

        <ul className="space-y-4 list-disc list-inside text-gray-400">
          <li>
            <span className="text-white font-semibold">VPC & Subnets:</span>{" "}
            Multi-AZ network segmentation with public and private layers.
          </li>

          <li>
            <span className="text-white font-semibold">Application Load Balancer:</span>{" "}
            Routes external traffic securely to Kubernetes ingress.
          </li>

          <li>
            <span className="text-white font-semibold">Amazon EKS:</span>{" "}
            Managed Kubernetes cluster hosting application and services.
          </li>

          <li>
            <span className="text-white font-semibold">IAM & Security Policies:</span>{" "}
            Role-based access control and least-privilege enforcement.
          </li>

          <li>
            <span className="text-white font-semibold">Secrets Manager:</span>{" "}
            Secure storage for credentials and sensitive configuration.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Request Flow
        </h2>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`User
  ->
AWS Application Load Balancer
  ->
Kubernetes Ingress Controller
  ->
Keycloak Authentication
  ->
Application Pods (EKS)
  ->
Monitoring & Logging`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Design Principles
        </h2>

        <ul className="space-y-3 text-gray-400 list-disc list-inside">
          <li>High Availability across multiple availability zones</li>
          <li>Infrastructure as Code using Terraform modules</li>
          <li>Immutable containerized workloads</li>
          <li>Zero-trust security model with token-based authentication</li>
          <li>Observability-first production design</li>
        </ul>
      </div>

    </div>
  );
}
