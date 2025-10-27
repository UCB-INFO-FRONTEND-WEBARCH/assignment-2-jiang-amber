function TaskCounter({ tasks }) {
  // How to count total tasks (array length)
  const total = tasks.length;
  // How to count completed tasks (use .filter())
  const completed = tasks.filter((task) => task.completed).length;
  // How to calculate active tasks (total - completed)
  const active = total - completed;

  return (
    <div className="task-counter">
      {/* <p>{total} total tasks</p>
      <p>{active} active tasks</p>
      <p>{completed} completed tasks</p> */}
      <span>
        {completed}/{total}
      </span>
    </div>
  );
}

export default TaskCounter;
