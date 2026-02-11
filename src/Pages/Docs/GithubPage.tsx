export default function GithubPage() {
  return (
    <div className="space-y-14 text-gray-300">

      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          GitHub Actions – CI Workflow
        </h1>
        <p className="text-gray-400 leading-relaxed">
          GitHub Actions automates the Continuous Integration stage,
          ensuring code validation, container builds, and secure artifact
          generation before deployment.
        </p>
      </div>

      {/* Workflow Overview */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Workflow Overview
        </h2>

        <img
          src="/images/github-workflow.png"
          alt="GitHub Actions Workflow"
          className="rounded-2xl border border-gray-800 shadow-xl mb-6"
        />

        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-400">
{`on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest`}
        </div>
      </div>

      {/* Pipeline Steps */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-6">
          CI Pipeline Steps
        </h2>

        <ul className="space-y-4 list-disc list-inside text-gray-400">
          <li>
            <span className="text-white font-semibold">Checkout Code:</span>{" "}
            Pull latest repository changes.
          </li>

          <li>
            <span className="text-white font-semibold">Install Dependencies:</span>{" "}
            Prepare build environment.
          </li>

          <li>
            <span className="text-white font-semibold">Build Application:</span>{" "}
            Compile production-ready assets.
          </li>

          <li>
            <span className="text-white font-semibold">Docker Build:</span>{" "}
            Create immutable container image.
          </li>

          <li>
            <span className="text-white font-semibold">Push to Registry:</span>{" "}
            Upload image to container registry.
          </li>
        </ul>
      </div>

      {/* Secrets Handling */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Secrets & Environment Variables
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Sensitive values such as registry credentials and cloud access tokens
          are stored securely in GitHub Secrets and injected at runtime.
        </p>

        <ul className="mt-6 space-y-3 list-disc list-inside text-gray-400">
          <li>Encrypted repository secrets</li>
          <li>Environment-specific variables</li>
          <li>No credentials stored in source code</li>
        </ul>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-bold text-[#E50914] mb-4">
          Why GitHub Actions?
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-400">
          <li>Native integration with source control</li>
          <li>Automated CI validation</li>
          <li>Scalable runner environment</li>
          <li>Secure secret management</li>
        </ul>
      </div>

    </div>
  );
}
