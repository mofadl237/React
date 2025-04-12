import { Outlet } from "react-router-dom"
import Nav from './../Components/Nav';
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <><Nav /> <div className="min-h-screen container mx-auto"><Outlet /></div> <Footer/> </>
  )
}

export default RootLayout;