import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, { todo: action.todo, done: false }],
        count: state.count + 1
      };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter(item => item.todo !== action.todo),
        count: state.count - 1
      };
    case "done":
      return {
        ...state,
        todos: state.todos.map(item =>
          item.todo === action.todo
            ? { todo: item.todo, done: !item.done }
            : item
        )
      };
    default:
      return state;
  }
};

function Reducer() {
  const [todo, todoSet] = React.useState("");
  const [{ todos, count }, dispatch] = React.useReducer(reducer, {
    todos: [],
    count: 0
  });
  return (
    <div>
      <h1>Reducer</h1>
      <input value={todo} onChange={e => todoSet(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "add", todo });
          todoSet("");
        }}
      >
        add
      </button>

      <p>{count} To Do's</p>
      <ul>
        {todos.map(
          (item, idx) =>
            console.log(item.done) || (
              <li key={idx}>
                <span
                  onClick={() => dispatch({ type: "done", todo: item.todo })}
                  style={{
                    textDecoration: item.done ? "line-through" : "inherit"
                  }}
                >
                  {item.todo}
                </span>
                <button
                  onClick={() => dispatch({ type: "remove", todo: item.todo })}
                  style={{ marginLeft: "20px" }}
                >
                  Remove
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Reducer;
