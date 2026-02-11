import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 border-t border-gray-800">

      <div className="container mx-auto px-6 lg:px-16">

        <div className="grid md:grid-cols-3 gap-16 mb-16">

          <div>
            <h3 className="text-xl font-bold mb-4">
              DevOps <span className="text-[#E50914]">Cloud Platform</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Production-grade Netflix Clone deployed on AWS using Terraform,
              Kubernetes, CI/CD automation, secure authentication,
              and full observability stack.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E50914]">
              Tech Stack
            </h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>AWS (VPC, EKS, IAM, ALB)</li>
              <li>Terraform (Infrastructure as Code)</li>
              <li>Kubernetes & GitOps</li>
              <li>Keycloak Authentication</li>
              <li>Prometheus & Grafana</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E50914]">
              Project Team
            </h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Mohamed Fadl</li>
              <li>Mahmoud Yossef</li>
              <li>Hussein Eleberrrawey</li>
              <li>Mustafa Elsharawey</li>
              <li>Mina Shahir</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">

          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DevOps Cloud Platform. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <a href="https://github.com/habdelazim743-collab/complete_k8s_config_for_netfix_app/tree/main/app" className="hover:text-[#E50914] transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-fadl-5a17a8268/" className="hover:text-[#E50914] transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-[#E50914] transition">
              <Mail size={20} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
