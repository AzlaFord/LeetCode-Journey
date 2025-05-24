import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBar">
            <Link to="/">LeetCode Journey</Link>
            <ul className="navBarList">
                <li><Link to="/">Problems</Link></li>
                <li><Link to="/Discuss">Discuss</Link></li>
                <li><Link to="/Interview">Interview</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
