import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  {
    /* // What should render when the tasks array is empty? */
  }
  if (tasks.length === 0) {
    return (
      <p className="no-tasks">
        There are no tasks in this category. Check your filters.
      </p>
    );
  }

  return (
    <ul className="task-list">
      {/* // How do you render multiple TaskItem components? */}
      {/* What prop is required when rendering lists in React? */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;

{
  /* Use .map() to transform array of tasks into array of components
Each component in a list needs a unique key prop
Pass down the handler functions as props */
}
