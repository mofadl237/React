import {
  Github,
  Package,
  Rocket,
  Server,
  Activity,
} from "lucide-react";

export default function HomeFiveSection() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-28 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#E50914]/10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            CI/CD <span className="text-[#E50914]">Pipeline</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Automated workflow from code commit to production rollout inside Kubernetes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">

          <PipelineCard
            icon={<Github size={40} />}
            title="Code Push"
            description="Developer pushes code to repository triggering CI workflow."
          />

          <PipelineCard
            icon={<Package size={40} />}
            title="Docker Build"
            description="Application is containerized into production-ready image."
          />

          <PipelineCard
            icon={<Rocket size={40} />}
            title="Deployment"
            description="Pipeline updates manifests and triggers rollout."
          />

          <PipelineCard
            icon={<Server size={40} />}
            title="Kubernetes"
            description="Rolling update applied inside EKS cluster."
          />

          <PipelineCard
            icon={<Activity size={40} />}
            title="Monitoring"
            description="Prometheus & Grafana validate deployment health."
          />

        </div>
      </div>
    </section>
  );
}



function PipelineCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black border border-gray-800 hover:border-[#E50914] hover:shadow-lg hover:shadow-red-900/20 transition duration-300 rounded-2xl p-6 text-center">

      <div className="flex justify-center mb-6 text-[#E50914]">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
