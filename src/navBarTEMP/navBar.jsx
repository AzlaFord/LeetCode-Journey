import './navBar.css';

function NavBar(){
    return (
        <div className="navBar">
            <h2>LeetCode Journey</h2>
            <ul className="navBarList">
                <a href=""><li>Problems</li></a> 
                <a href=""><li>Discuss</li></a>     
                <a href=""><li>Interview</li></a>
            </ul>
        </div>
    );
}
export default NavBar;