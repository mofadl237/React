export default function NetworkingPage() {
  return (
    <div className="space-y-12 text-gray-300">

      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          VPC & Networking Design
        </h1>
        <p className="text-gray-400 leading-relaxed">
          The networking layer is designed to ensure high availability,
          secure workload isolation, and controlled internet exposure
          following AWS best practices.
        </p>
      </div>

      {/* VPC Overview */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Virtual Private Cloud (VPC)
        </h2>

        <img
          src="/images/vpc-diagram.png"
          alt="VPC Diagram"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          A custom VPC spans multiple Availability Zones to ensure
          fault tolerance and horizontal scalability. The CIDR block
          is structured to allow subnet segmentation for public and
          private resources.
        </p>
      </div>

      {/* Subnet Strategy */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-6">
          Subnet Strategy
        </h2>

        <ul className="space-y-4 list-disc list-inside text-gray-400">
          <li>
            <span className="text-white font-semibold">Public Subnets:</span>{" "}
            Host Application Load Balancer and NAT Gateway.
          </li>

          <li>
            <span className="text-white font-semibold">Private Subnets:</span>{" "}
            Host EKS worker nodes and internal services.
          </li>

          <li>
            <span className="text-white font-semibold">Multi-AZ Deployment:</span>{" "}
            Each subnet replicated across availability zones for high availability.
          </li>
        </ul>
      </div>

      {/* Internet Gateway & NAT */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Internet Gateway & NAT Gateway
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          Public subnets attach to an Internet Gateway to allow inbound
          traffic through the ALB. Private subnets route outbound traffic
          via a NAT Gateway to securely access external services without
          exposing internal workloads.
        </p>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`Internet
  ->
Internet Gateway
  ->
Public Subnet (ALB)
  ->
Private Subnet (EKS Nodes)
  ->
NAT Gateway → Outbound Internet`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Security Groups & Traffic Control
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>ALB Security Group allows inbound HTTP/HTTPS traffic.</li>
          <li>EKS Node Security Group restricts access to internal cluster traffic.</li>
          <li>Strict ingress/egress rules enforce least-privilege networking.</li>
          <li>Cluster communication limited to required ports only.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Networking Design Decisions
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Private workloads are never directly exposed to the internet.</li>
          <li>Public access controlled exclusively via ALB.</li>
          <li>Multi-AZ ensures resilience against AZ failure.</li>
          <li>Terraform provisions all networking resources for repeatability.</li>
        </ul>
      </div>

    </div>
  );
}
