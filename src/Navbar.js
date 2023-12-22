import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="nav">
            <h1>Appblog</h1>
            <ul className="dis-f">
                <li className="ml-1 t-h-magenta"><Link to="/">Home</Link></li>
                <li className="ml-1 t-h-magenta"><Link to="/create">New Blog</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;