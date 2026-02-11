import { Activity, BarChart3, BellRing, FileText } from "lucide-react";

export default function HomeSevenSection() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-28 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#E50914]/10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Monitoring & <span className="text-[#E50914]">Observability</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Real-time system visibility using metrics, logs, and alerting
            to ensure production stability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          <div className="space-y-8">

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Metrics Collection
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Prometheus scrapes cluster and application metrics
                including CPU, memory, pod health, and request latency.
              </p>
            </div>

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Visualization & Dashboards
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Grafana dashboards provide real-time insight into system
                performance and deployment health.
              </p>
            </div>

            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-3">
                Alerting & Logging
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Alertmanager handles incident notifications while logs
                are centralized for troubleshooting and auditing.
              </p>
            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute w-[500px] h-[500px] bg-[#E50914] opacity-10 blur-3xl rounded-full" />

            <img
              src="/images/monitoring-dashboard.png"
              alt="Monitoring Dashboard"
              className="relative rounded-2xl border border-gray-800 shadow-2xl hover:scale-105 transition duration-500 w-full max-w-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10">

          <MonitoringCard
            icon={<Activity size={36} />}
            title="Prometheus"
            description="Cluster and application metrics scraping."
          />

          <MonitoringCard
            icon={<BarChart3 size={36} />}
            title="Grafana"
            description="Real-time dashboards & visualization."
          />

          <MonitoringCard
            icon={<BellRing size={36} />}
            title="Alertmanager"
            description="Incident alerts & notification routing."
          />

          <MonitoringCard
            icon={<FileText size={36} />}
            title="Centralized Logs"
            description="Log aggregation and troubleshooting."
          />

        </div>

      </div>
    </section>
  );
}



function MonitoringCard({
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

      <div className="flex justify-center mb-5 text-[#E50914]">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
