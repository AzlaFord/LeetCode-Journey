import "./HomePage.css";
import { useEffect, useState, useRef } from 'react';
import NumeProblema from '../ProblemaNume/ProblemaNume.jsx';

function HomePage() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const isFirstLoad = useRef(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('tasks');
      if (stored) {
        setTasks(JSON.parse(stored));
      }
    } catch (e) {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks to localStorage:", e);
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const numeProblema = ['Two Sum', 'Add Two Numbers', 'Longest Substring Without Repeating Characters'];

  return (
    <>
      <div className="homePage">
        <h1>Welcome to LeetCode Journey</h1>
        <p>Track your progress, improve your coding skills, and prepare for interviews.</p>
      </div>

      <div className="homePageContent">
        <div className="toDo">
          <h2>To-Do List</h2>
          <label htmlFor="myInput"></label>
          <input
            id="myInput"
            className="inputToDo"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="To-Do something..."
            required
          />
          <button
            onClick={handleAddTask}
            className="addButton primary-button"
          >
            Add Task
          </button>

          <ul className="ParentTo-do">
            {tasks.map((task) => (
              <li key={task.id}>
                <h3>{task.text}</h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="progress">
          <div className="progressTracker">
            <h2>Progress Tracker</h2>
            <p>Keep track of your solved problems and progress.</p>
          </div>
          <ul className="done">
            {numeProblema.map((problema, index) => (
              <li key={index}>
                <NumeProblema name={problema} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
