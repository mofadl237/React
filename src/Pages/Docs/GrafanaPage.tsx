export default function GrafanaPage() {
  return (
    <div className="space-y-14 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Grafana – Metrics Visualization
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Grafana provides real-time dashboards and visualization
          for metrics collected by Prometheus, enabling full observability
          across infrastructure and application workloads.
        </p>
      </div>

      {/* Dashboard Overview */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Dashboard Overview
        </h2>

        <img
          src="/images/grafana-dashboard.png"
          alt="Grafana Dashboard"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          Grafana dashboards visualize CPU usage, memory consumption,
          pod health, request latency, and error rates in real time.
        </p>
      </div>

      {/* Data Source */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Prometheus Data Source Integration
        </h2>

        <img
          src="/images/grafana-datasource.png"
          alt="Grafana Data Source"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          Grafana connects to Prometheus as a data source and executes
          PromQL queries to fetch real-time metrics.
        </p>
      </div>

      {/* Example Queries */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Example PromQL Queries
        </h2>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`# CPU Usage
sum(rate(container_cpu_usage_seconds_total[5m])) by (pod)

# Memory Usage
sum(container_memory_usage_bytes) by (pod)

# HTTP Error Rate
sum(rate(http_requests_total{status=~"5.."}[5m]))`}
        </div>
      </div>

      {/* Dashboard Types */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Dashboard Categories
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Cluster-level dashboards</li>
          <li>Node resource dashboards</li>
          <li>Application performance dashboards</li>
          <li>Ingress traffic monitoring</li>
          <li>Deployment health tracking</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Observability Benefits
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Real-time system visibility</li>
          <li>Performance bottleneck detection</li>
          <li>Capacity planning insights</li>
          <li>Deployment validation monitoring</li>
        </ul>
      </div>

    </div>
  );
}
