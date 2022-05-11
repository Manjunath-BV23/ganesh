import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
    <nav style = {{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#DC2C3B"
    }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/events">Events</Link>
        <Link to="/owner">Owner</Link>
        
    </nav>
    )
}