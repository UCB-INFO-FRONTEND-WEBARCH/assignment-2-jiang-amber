function TaskItem({ task, onToggle, onDelete }) {
  // task text with conditional styling
  let textClass = "task-text";
  if (task.completed) {
    textClass += " completed-task";
  }

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        // checkbox (type="checkbox") that calls onToggle when changed
        onChange={() => onToggle(task.id)}
        className="round-check"
      />
      <span className={textClass}>{task.text}</span>
      {/* delete button that calls onDelete when clicked */}
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default TaskItem;

// use checked={task.completed} for checkbox
// apply a CSS class conditionally for completed tasks
// pass task.id when calling the handler functions
