import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({
    id: 1,
    label: "Learn React",
    completed: false,
  });

  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    setTodo({
      ...todo,
      completed: !todo.completed,
    });
  const handleEditClick = () => setEditing(!editing);
  const handleUpdateLabel = (event) =>
    setTodo({
      ...todo,
      label: event.target.value,
    });

  return (
    <div>
      <label htmlFor="checkbox">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          <span />
        </div>
        {editing === true ? (
          <input type="text" value={todo.label} onChange={handleUpdateLabel} />
        ) : (
          <span>{todo.label}</span>
        )}
      </label>
      <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
    </div>
  );
}
