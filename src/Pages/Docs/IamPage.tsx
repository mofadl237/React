export default function IamPage() {
  return (
    <div className="space-y-14 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          IAM Roles & Access Control
        </h1>
        <p className="text-gray-400 leading-relaxed">
          AWS Identity and Access Management (IAM) enforces secure,
          least-privilege access across infrastructure components
          and Kubernetes workloads.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          EKS Cluster IAM Role
        </h2>

        <img
          src="/images/eks-iam-role.png"
          alt="EKS IAM Role"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          The EKS control plane operates under a dedicated IAM role
          with scoped permissions required to manage cluster resources.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Worker Node Instance Role
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          Each managed node group is attached to an instance profile
          granting minimal permissions required for:
        </p>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Pulling images from container registry</li>
          <li>Writing logs to CloudWatch</li>
          <li>Interacting with cluster networking</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          IAM Roles for Service Accounts (IRSA)
        </h2>

        <img
          src="/images/irsa-flow.png"
          alt="IRSA Flow"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          IRSA allows Kubernetes pods to assume IAM roles securely
          without embedding static AWS credentials inside containers.
        </p>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400 mt-6">
{`Pod
  ->
Service Account
  ->
IAM Role (via OIDC Provider)
  ->
AWS Resource Access`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Policy Design Strategy
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Least-privilege permission boundaries</li>
          <li>Service-specific scoped policies</li>
          <li>No wildcard administrative roles in production</li>
          <li>Separation of cluster and workload permissions</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Integration with AWS Secrets Manager
        </h2>

        <p className="text-gray-400 leading-relaxed">
          IAM roles are scoped to allow specific pods to retrieve secrets
          securely from AWS Secrets Manager using IRSA-based authentication.
        </p>

        <ul className="mt-6 space-y-3 list-disc list-inside text-gray-400">
          <li>No hardcoded credentials inside Kubernetes manifests</li>
          <li>Encrypted secrets at rest</li>
          <li>Granular access per workload</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          IAM Security Principles
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Zero static credentials</li>
          <li>OIDC federation for pod identity</li>
          <li>Role isolation per workload</li>
          <li>Auditable access via AWS CloudTrail</li>
        </ul>
      </div>

    </div>
  );
}
