export default function KeycloakPage() {
  return (
    <div className="space-y-14 text-gray-300">

      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Keycloak Identity Provider
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Keycloak is deployed inside the Kubernetes cluster as a centralized
          Identity Provider (IdP) implementing OpenID Connect (OIDC) for
          secure authentication and token issuance.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Deployment Architecture
        </h2>

        <img
          src="/images/keycloak-architecture.png"
          alt="Keycloak Architecture"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          Keycloak runs inside a dedicated Kubernetes namespace and is exposed
          through the ALB Ingress Controller. It integrates with internal
          services using token-based authentication.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Authentication Flow
        </h2>

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`User
  ->
ALB
  ->
Ingress Controller
  ->
Keycloak (OIDC Login)
  ->
JWT Token Issued
  ->
Application API`}
        </div>

        <p className="mt-6 text-gray-400 leading-relaxed">
          After successful authentication, Keycloak issues a signed JWT token
          which is validated by backend services before granting access.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Realms & Client Configuration
        </h2>

        <img
          src="/images/keycloak-dashboard.png"
          alt="Keycloak Dashboard"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Dedicated realm for the application</li>
          <li>Frontend client (public access)</li>
          <li>Backend service client (confidential)</li>
          <li>Role-based access configuration</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Security Features
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>JWT signature validation</li>
          <li>Access & refresh token lifecycle</li>
          <li>Role-based access control (RBAC)</li>
          <li>Secure client secret storage</li>
          <li>HTTPS-only exposure through ALB</li>
        </ul>
      </div>


      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Why Keycloak?
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Keycloak provides enterprise-grade identity management without
          relying on third-party SaaS authentication providers. It integrates
          seamlessly with Kubernetes workloads and supports OIDC and OAuth2
          standards required for production environments.
        </p>
      </div>

    </div>
  );
}
