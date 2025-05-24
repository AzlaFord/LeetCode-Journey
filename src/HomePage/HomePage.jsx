import "./HomePage.css";

function HomePage() {
    return (
        <div className="homePage">
            <h1>Welcome to LeetCode Journey</h1>
            <p>Track your progress, improve your coding skills, and prepare for interviews.</p>
            <div className="homePageLinks">
                <a href="/problems">Problems</a>
                <a href="/discuss">Discuss</a>
                <a href="/interview">Interview</a>
            </div>
        </div>
    );
}
export default HomePage;