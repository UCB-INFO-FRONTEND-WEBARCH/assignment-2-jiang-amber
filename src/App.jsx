import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";

function App() {
  // stores all your tasks, array
  const [tasks, setTasks] = useState([]);
  // tracks which filter is active, string
  const [filter, setFilter] = useState("all");

  // key function 1
  // creating a new task object with a unique id
  // the completed property should start as false
  // adding the new task to the existing array (remember: don't mutate state!)
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // key function 2
  // finding the task by id
  // flipping its completed boolean
  // creating a new array with the updated task
  const toggleTask = (id) => {
    function flipCompleted(task) {
      if (task.id === id) {
        return {
          id: task.id,
          text: task.text,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    }
    const newArray = tasks.map((task) => flipCompleted(task));
    setTasks(newArray);
  };

  // key function 3
  // removing a task by its id
  // creating a new array without that task
  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => {
      if (task.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTasks(newArray);
  };

  // key function 4
  // based on the filter state, return different subsets of tasks
  // 'all' → return everything
  // 'active' → return tasks where completed is false
  // 'completed' → return tasks where completed is true

  const filterTasks = () => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks;
    }
  };

  const filteredTasks = filterTasks();

  // return (
  //   <div className="app">
  //     <h1>Task Tracker</h1>
  //     <TaskForm onAddTask={addTask} />
  //     <TaskCounter tasks={tasks} />
  //     <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
  //   </div>
  // );

  return (
    <div className="app">
      <header>
        <img id="hamburger" src="src/assets/menu_icon.png" alt="menu" />
        <input type="text" id="search" name="search" placeholder="Quick Find" />
        <img id="check" src="src/assets/check_icon.png" alt="check" />
        <div id="task-counter">
          <TaskCounter tasks={tasks} />
        </div>
      </header>

      <section>
        <nav>
          <ul>
            <li id="inbox" className="nav-items">
              <h2>Inbox </h2>
              <h3>{tasks.length}</h3>
            </li>
            <li id="today" className="nav-items">
              <h2>Today </h2>
              <h3>{tasks.filter((t) => !t.completed).length}</h3>
            </li>
            <li id="upcoming" className="nav-items">
              <h2>Upcoming </h2>
            </li>
          </ul>
        </nav>

        <main>
          <h1>Inbox</h1>
          <TaskForm onAddTask={addTask} />
          <div className="filters">
            <span>Filters:</span>
            <button
              className={filter === "all" ? "selected" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "active" ? "selected" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={filter === "completed" ? "selected" : ""}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </section>
    </div>
  );
}

export default App;
