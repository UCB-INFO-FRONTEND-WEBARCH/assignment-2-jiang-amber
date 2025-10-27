import { useState } from "react";

function TaskForm({ onAddTask }) {
  // own local state for the input value
  const [inputValue, setInputValue] = useState("");

  // form with onSubmit handler
  function submit(e) {
    e.preventDefault();
    const input = inputValue.trim();

    // validation to prevent empty tasks
    if (input === "") {
      return;
    } else {
      onAddTask(input);

      // clear the input after submission
      setInputValue("");
    }
  }

  // input with value and onChange props
  function change(e) {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={submit} className="add-task">
      <input
        type="text"
        placeholder="Enter task"
        value={inputValue}
        onChange={change}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

// e.preventDefault() stops form from refreshing page
// controlled components: input value comes from state
// call the onAddTask prop function with the text
// use .trim() to check for empty/whitespace-only input
