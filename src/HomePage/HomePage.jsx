import "./HomePage.css";

function HomePage() {

    return (
        <>
            <div className="homePage">
                <h1>Welcome to LeetCode Journey</h1>
                <p>Track your progress, improve your coding skills, and prepare for interviews.</p>
            </div>
            <div className="homePageContent">
                <div className="toDo">
                    <h2>To-Do List</h2>
                    <p>Manage your tasks and keep track of what you need to do.</p>
                    <ul className="ParentTo-do">

                    </ul>
                </div>
                <div className="progress">
                    <div className="progressTracker">
                        <h2>Progress Tracker</h2>
                        <p>Keep track of your solved problems and progress.</p>
                    </div>
                    <ul className="done">
                        <li>asda</li>
                        <li>asa</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HomePage;