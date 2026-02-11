export default function HomeFourSection() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#E50914]/10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Secure <span className="text-[#E50914]">Authentication Flow</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            End-to-end identity validation using Keycloak integrated with AWS Secrets Manager
            and Kubernetes-based token authorization.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <FlowStep
            number="1"
            title="User → ALB"
            description="Client request enters through AWS Application Load Balancer."
            highlight
          />

          <Arrow />

          <FlowStep
            number="2"
            title="Ingress Routing"
            description="ALB forwards traffic to Kubernetes Ingress Controller."
          />

          <Arrow />

          <FlowStep
            number="3"
            title="Keycloak Auth"
            description="Identity validation and credential verification via OIDC."
          />

          <Arrow />

          <FlowStep
            number="4"
            title="Secrets Manager"
            description="Secure retrieval of credentials and environment secrets."
          />

          <Arrow />

          <FlowStep
            number="5"
            title="JWT Authorization"
            description="Application pods validate JWT before granting API access."
          />

        </div>
      </div>
    </section>
  );
}


function FlowStep({
  number,
  title,
  description,
  highlight = false,
}: {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div
        className={`w-20 h-20 flex items-center justify-center rounded-full font-bold text-lg transition
          ${
            highlight
              ? "bg-[#E50914] shadow-lg shadow-red-900/40"
              : "border-2 border-[#E50914]"
          }`}
      >
        {number}
      </div>
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}


function Arrow() {
  return (
    <div className="hidden md:block text-[#E50914] text-3xl">
      →
    </div>
  );
}
