export default function EksPage() {
  return (
    <div className="space-y-14 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Amazon EKS – Cluster Architecture
        </h1>
        <p className="text-gray-400 leading-relaxed">
          The Kubernetes layer is deployed using Amazon EKS to provide
          managed control plane reliability while maintaining full control
          over worker nodes, networking, and security policies.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Cluster Overview
        </h2>

        <img
          src="/images/eks-architecture.png"
          alt="EKS Architecture"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          Amazon EKS provides a managed Kubernetes control plane distributed
          across multiple Availability Zones. Worker nodes run inside private
          subnets for secure workload execution.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-6">
          Control Plane vs Worker Nodes
        </h2>

        <ul className="space-y-4 list-disc list-inside text-gray-400">
          <li>
            <span className="text-white font-semibold">Control Plane:</span>{" "}
            Fully managed by AWS (API server, scheduler, controller manager).
          </li>
          <li>
            <span className="text-white font-semibold">Worker Nodes:</span>{" "}
            EC2 instances inside private subnets running application pods.
          </li>
          <li>
            <span className="text-white font-semibold">Auto Scaling:</span>{" "}
            Node groups scale horizontally based on workload demand.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Node Group Strategy
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          Managed node groups are provisioned using Terraform with
          autoscaling enabled. Nodes are distributed across multiple
          AZs for fault tolerance.
        </p>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`Node Group 1:
- Instance Type: t3.medium
- Min: 2
- Max: 5
- Private Subnets
- Auto Scaling Enabled`}
        </div>
      </div>

      {/* Namespaces */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Namespace Isolation
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>ingress-nginx namespace</li>
          <li>application namespace</li>
          <li>keycloak namespace</li>
          <li>monitoring namespace</li>
          <li>cicd namespace</li>
        </ul>

        <p className="text-gray-400 mt-4">
          Namespace separation ensures logical isolation of workloads
          and simplifies RBAC and resource quota management.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Ingress & Service Types
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>ALB Ingress Controller for external routing</li>
          <li>ClusterIP services for internal communication</li>
          <li>LoadBalancer services for controlled public exposure</li>
        </ul>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400 mt-6">
{`User
  ->
ALB
  ->
Ingress Controller
  ->
Service (ClusterIP)
  ->
Pod`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          IAM & RBAC Integration
        </h2>

        <p className="text-gray-400 leading-relaxed">
          IAM roles are mapped to Kubernetes RBAC policies using IAM Roles
          for Service Accounts (IRSA). This ensures secure access to AWS
          services without embedding static credentials inside pods.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          High Availability Design
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Control plane distributed across multiple AZs</li>
          <li>Worker nodes deployed in private multi-AZ subnets</li>
          <li>Auto-scaling groups for workload elasticity</li>
          <li>Rolling deployments for zero-downtime updates</li>
        </ul>
      </div>

    </div>
  );
}
