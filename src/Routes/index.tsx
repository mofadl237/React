import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../Pages";
import About from "../Pages/About";
import RootLayout from "../Pages/Layout";
import ProtectRoute from "../Components/Auth/ProtectRoute";
import Docs from "../Pages/Docs";
import ArchitecturePage from "../Pages/Docs/ArchitecturePage";
import NetworkingPage from "../Pages/Docs/NetworkingPage";
import EksPage from "../Pages/Docs/EksPage";
import KeycloakPage from "../Pages/Docs/KeycloakPage";
import IamPage from "../Pages/Docs/IamPage";
import PipelinePage from "../Pages/Docs/PipelinePage";
import GithubPage from "../Pages/Docs/GithubPage";
import JenkinsPage from "../Pages/Docs/JenkinsPage";
import PrometheusPage from "../Pages/Docs/PrometheusPage";
import GrafanaPage from "../Pages/Docs/GrafanaPage";
import  AlertsPage  from "../Pages/Docs/AlertsPage";
const isLogged =true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />  
      <Route path="about" element={<About />} />

      <Route path="manage" element={<ProtectRoute isAllowed={isLogged} redirection="/login" > <Docs/> </ProtectRoute>}>
  <Route index element={<ArchitecturePage />} />
  <Route path="networking" element={<NetworkingPage />} />
  <Route path="eks" element={<EksPage />} />
  <Route path="keycloak" element={<KeycloakPage />} />
  <Route path="iam" element={<IamPage />} />
  <Route path="pipeline" element={<PipelinePage />} />
  <Route path="github" element={<GithubPage />} />
  <Route path="jenkins" element={<JenkinsPage />} />
  <Route path="prometheus" element={<PrometheusPage />} />
  <Route path="grafana" element={<GrafanaPage />} />
  <Route path="alerts" element={<AlertsPage />} />


      </Route>
      
    </Route>
  )
);

export default router;
