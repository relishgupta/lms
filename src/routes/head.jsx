import Navbar from "../components/navbar";
import Header from "../components/header";
import { Outlet } from "react-router";

const Head=(()=>{
    return(
        <div className="relative overflow-hidden">
            <Header />
            <Navbar />
            <Outlet />
        </div>
    )
})

export default Head;