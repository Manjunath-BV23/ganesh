import { Route, Routes } from "react-router-dom"
import { Events } from "../Events/Events"
import { Gallery } from "../Gallery/Gallery"
import { Home } from "../Home/Home"
import AccountMenu from "../Navbar/Nav"
import { Navbar } from "../Navbar/Navbar"
import { Owner } from "../Owner/Owner"
import { AddUser } from "../Users/AddUser"
import { Users } from "../Users/Users"

export const AllRoutes = () => {
    return (
        <>
            {/* <Navbar/> */}
            <AccountMenu/>
            {/* <AddUser/> */}
            <Routes>
                <Route path = "/" element={<Home/>} ></Route>
                <Route path = "/users" element={<Users/>} ></Route>
                <Route path = "/events" element={<Events/>} ></Route>
                <Route path = "/gallery" element={<Gallery/>} ></Route>
                <Route path = "/owner" element={<Owner/>} ></Route>
                <Route path = "/adduser" element={<AddUser/>} ></Route>
            </Routes>
        </>
    )
}