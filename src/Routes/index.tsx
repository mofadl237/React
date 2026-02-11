import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../Pages";
import About from "../Pages/About";
import RootLayout from "../Pages/Layout";
import ManageUserPage from "../Pages/Docs";
import AllUser from "../Pages/Docs/Step-2";
import DeleteUser from "../Pages/Docs/Step-3";
import ProtectRoute from "../Components/Auth/ProtectRoute";
import AddUser from "../Pages/Docs/step-1";
const isLogged =true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />  
      <Route path="about" element={<About />} />

      <Route path="manage" element={<ProtectRoute isAllowed={isLogged} redirection="/login" > <ManageUserPage/> </ProtectRoute>}>
        <Route index element={<AllUser />} />
        <Route path="add" element={<AddUser />} />
        <Route path="delete" element={<DeleteUser />} />
      </Route>
      
    </Route>
  )
);

export default router;
