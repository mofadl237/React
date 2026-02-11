export default function JenkinsPage() {
  return (
    <div className="space-y-14 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Jenkins – Continuous Deployment
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Jenkins handles the Continuous Deployment phase by automating
          Kubernetes manifest updates and triggering controlled rollouts
          inside the EKS cluster.
        </p>
      </div>

      {/* Architecture */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Deployment Architecture
        </h2>

        <img
          src="/images/jenkins-architecture.png"
          alt="Jenkins Deployment Flow"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`Docker Image Ready
   ->
Jenkins Trigger
   ->
Update Kubernetes Manifests
   ->
kubectl apply / GitOps Sync
   ->
Rolling Deployment`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-6">
          Jenkins Pipeline Stages
        </h2>

        <ul className="space-y-4 list-disc list-inside text-gray-400">
          <li>
            <span className="text-white font-semibold">Image Tag Validation:</span>{" "}
            Verify version and integrity before deployment.
          </li>

          <li>
            <span className="text-white font-semibold">Manifest Update:</span>{" "}
            Inject new image tag into Kubernetes deployment YAML.
          </li>

          <li>
            <span className="text-white font-semibold">Cluster Apply:</span>{" "}
            Apply configuration changes to EKS.
          </li>

          <li>
            <span className="text-white font-semibold">Deployment Monitoring:</span>{" "}
            Validate rollout success using readiness probes.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Rolling Update Strategy
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          Kubernetes rolling updates ensure zero downtime by gradually
          replacing old pods with new ones.
        </p>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`Replicas: 3

Old Pods (v1) → 2 Running
New Pods (v2) → 1 Starting

Gradual replacement until all pods run new version`}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          GitOps Integration (Optional)
        </h2>

        <p className="text-gray-400 leading-relaxed">
          If GitOps is enabled (e.g., ArgoCD), Jenkins updates the Git
          repository containing Kubernetes manifests. The cluster then
          automatically synchronizes desired state with actual state.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Deployment Safety Mechanisms
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Image version tagging</li>
          <li>Rollback capability</li>
          <li>Health probe validation</li>
          <li>Post-deployment monitoring checks</li>
        </ul>
      </div>

    </div>
  );
}
