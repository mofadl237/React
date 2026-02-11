export default function PrometheusPage() {
  return (
    <div className="space-y-14 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Prometheus – Metrics Collection
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Prometheus is responsible for collecting and storing time-series
          metrics from Kubernetes workloads, cluster components,
          and infrastructure resources.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Monitoring Architecture
        </h2>

        <img
          src="/images/prometheus-architecture.png"
          alt="Prometheus Architecture"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          Prometheus runs inside the monitoring namespace and scrapes
          metrics from Kubernetes nodes, pods, and services using
          configured ServiceMonitors.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Metrics Scraping Mechanism
        </h2>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`Targets:
  - kube-apiserver
  - kubelet
  - node-exporter
  - application pods
  - ingress controller

Scrape Interval: 15s`}
        </div>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Prometheus continuously pulls metrics from defined endpoints
          rather than relying on push-based collection.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Active Targets
        </h2>

        <img
          src="/images/prometheus-targets.png"
          alt="Prometheus Targets"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          All Kubernetes components and workloads appear as active targets,
          ensuring full cluster observability.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Key Metrics Collected
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>CPU usage per node and pod</li>
          <li>Memory consumption</li>
          <li>Pod restart counts</li>
          <li>HTTP request latency</li>
          <li>Error rates (5xx responses)</li>
          <li>Cluster resource capacity</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Data Retention & Storage
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Metrics are stored as time-series data within Prometheus TSDB.
          Retention policies are configured to balance storage efficiency
          and historical visibility.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Why Prometheus?
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Cloud-native monitoring standard</li>
          <li>Kubernetes-native service discovery</li>
          <li>Pull-based architecture</li>
          <li>Powerful PromQL query language</li>
        </ul>
      </div>

    </div>
  );
}
