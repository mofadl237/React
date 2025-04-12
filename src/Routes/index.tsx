import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../Pages";

import About from "../Pages/About";
import RootLayout from "../Pages/Layout";
import Login from "../Pages/Login";
import ManageUserPage from "../Pages/ManageUser";
import AllUser from "../Pages/ManageUser/AllUser";
import AddUser from "../Pages/ManageUser/AddUser";
import DeleteUser from "../Pages/ManageUser/DeleteUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />

      <Route path="manage" element={<ManageUserPage />}>
        <Route index element={<AllUser />} />
        <Route path="add" element={<AddUser />} />
        <Route path="delete" element={<DeleteUser />} />
      </Route>
      
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default router;
