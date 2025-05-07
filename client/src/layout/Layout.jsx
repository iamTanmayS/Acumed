import Footer from "../component/common/Footer"
import Navbar from "../component/common/Navbar"
import {Outlet} from "react-router-dom"

export const Layout = () => 
{


    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>

    )
}
