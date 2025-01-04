import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
export default function DefaultLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}