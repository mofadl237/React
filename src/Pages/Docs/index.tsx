import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Docs = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white pt-24">

      <div className="container mx-auto px-6 lg:px-16">

        <div className="flex flex-col md:flex-row gap-10">

          {/* Mobile Toggle */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#E50914]">Docs Menu</h2>
            <button onClick={() => setOpen(!open)}>
              <Menu size={28} />
            </button>
          </div>

          <aside
            className={`${
              open ? "block" : "hidden"
            } md:block w-full md:w-64`}
          >
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 space-y-6">

              <SidebarGroup title="Infrastructure">
                <SidebarLink to="" label="Architecture Overview" end />
                <SidebarLink to="networking" label="VPC & Networking" />
                <SidebarLink to="eks" label="EKS Cluster" />
              </SidebarGroup>

              <SidebarGroup title="Security">
                <SidebarLink to="keycloak" label="Keycloak Setup" />
                <SidebarLink to="iam" label="IAM & Secrets" />
              </SidebarGroup>

              <SidebarGroup title="CI/CD">
                <SidebarLink to="pipeline" label="Pipeline Flow" />
                <SidebarLink to="github" label="GitHub Actions" />
                <SidebarLink to="jenkins" label="Jenkins / GitOps" />
              </SidebarGroup>

              <SidebarGroup title="Monitoring">
                <SidebarLink to="prometheus" label="Prometheus" />
                <SidebarLink to="grafana" label="Grafana" />
                <SidebarLink to="alerts" label="Alerts & Logs" />
              </SidebarGroup>

            </div>
          </aside>


          <div className="flex-1 bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8">
            <Outlet />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Docs;



function SidebarGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[#E50914] font-semibold mb-3 text-sm uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function SidebarLink({
  to,
  label,
  end,
}: {
  to: string;
  label: string;
  end?: boolean;
}) {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          `block px-3 py-2 rounded-lg text-sm transition ${
            isActive
              ? "bg-[#E50914] text-white"
              : "text-gray-400 hover:bg-gray-800 hover:text-white"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}
