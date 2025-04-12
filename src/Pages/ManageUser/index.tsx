import { NavLink, Outlet } from "react-router-dom";


const ManageUserPage = () => {
  return (
    <section className="container mx-auto">
        <div className="flex gap-4 ">
            <aside className="min-h-screen">
                <ul className="bg-emerald-600 w-56 p-3 text-center text-white  flex flex-col justify-evenly h-1/2">
                    <li>
                        <NavLink to="" end>All User</NavLink>
                    </li>
                    <li>
                        <NavLink to="add">Add User</NavLink>
                    </li>
                    <li>
                        <NavLink to="delete">Delete User</NavLink>
                    </li>
                </ul>
            </aside>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    </section>
  )
}

export default ManageUserPage;