import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBar">
            <Link to="/LeetCode-Journey/">LeetCode Journey</Link>
            <ul className="navBarList">
                <li><Link to="/LeetCode-Journey/">Problems</Link></li>
                <li><Link to="/LeetCode-Journey/Discuss">Discuss</Link></li>
                <li><Link to="/LeetCode-Journey/Interview">Interview</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
