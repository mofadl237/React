export default function PipelinePage() {
  return (
    <div className="space-y-14 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          CI/CD Pipeline Architecture
        </h1>
        <p className="text-gray-400 leading-relaxed">
          The platform implements a fully automated CI/CD workflow
          to ensure reliable builds, containerization, and zero-downtime
          deployments into the Kubernetes cluster.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          High-Level Pipeline Flow
        </h2>

        <img
          src="/images/pipeline-overview.png"
          alt="Pipeline Overview"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`Developer Push
   ->
GitHub Repository
   ->
CI Workflow Trigger
   ->
Docker Build
   ->
Image Registry
   ->
Deployment Pipeline
   ->
Kubernetes Rollout`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-6">
          Pipeline Stages
        </h2>

        <ul className="space-y-4 list-disc list-inside text-gray-400">
          <li>
            <span className="text-white font-semibold">Source Control:</span>{" "}
            Code changes are pushed to GitHub.
          </li>

          <li>
            <span className="text-white font-semibold">Continuous Integration:</span>{" "}
            Automated workflow builds and validates the application.
          </li>

          <li>
            <span className="text-white font-semibold">Containerization:</span>{" "}
            Application packaged into immutable Docker image.
          </li>

          <li>
            <span className="text-white font-semibold">Image Registry:</span>{" "}
            Secure image storage before deployment.
          </li>

          <li>
            <span className="text-white font-semibold">Continuous Deployment:</span>{" "}
            Kubernetes manifests updated and applied to EKS cluster.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Deployment Strategy
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          The system uses rolling updates to avoid downtime during
          application deployments.
        </p>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`Old Pods (v1)  →  Gradually replaced  →  New Pods (v2)

No service interruption
Readiness & Liveness probes enforced`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Reliability & Safety Mechanisms
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Automated build validation before deployment</li>
          <li>Immutable container images</li>
          <li>Version tagging for rollback capability</li>
          <li>Kubernetes readiness and liveness probes</li>
          <li>Post-deployment monitoring validation</li>
        </ul>
      </div>

    </div>
  );
}
