import { useState } from "react";
import "./App.css";
import { moon, sun, Bgdark, Bglight, check } from "./components/images";
import Todo from "./components/todo";
function App() {
  const [iconToggle, setIconToggle] = useState(false);
  const [inputCheck, setInputCheck] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleInputCheck = () => {
    setInputCheck(!inputCheck);
  };

  const handleIconToggle = () => {
    setIconToggle(!iconToggle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [todos, setTodos] = useState([
    { task: "Complete online javaScript Course", state: false, id: 1 },
    { task: "Jog around the park 3x", state: true, id: 2 },
    { task: "10 minutes mediation", state: true, id: 3 },
    { task: "Read for 1 hour", state: true, id: 4 },
    { task: "Pick up groceries", state: false, id: 5 },
    { task: "Complete Todo App on Frontend Mentor", state: true, id: 6 },
  ]);

  const handleDelete = (id) => {
    const deletedTodos = todos;

    setTodos(deletedTodos.filter((todo) => todo.id !== id));
  };

  const handleAddtodo = (e) => {
    if (e.key === "Enter") {
      const newTodo = inputValue;
      setTodos([
        ...todos,
        {
          task: newTodo,
          id: Date.now(),
        },
      ]);
      console.log(todos);
      setInputValue("");
    }
  };
  // const handleCheckToggle = (id, state) => {
  //   const checkTodos = todos;
  //   checkTodos.map(
  //     (todo) => todo.id === id(setTodos([...todos, { ...todo, state: !state }]))
  //   );
  // };

  return (
    <div className="App">
      <div className="main">
        <div className="main-upper">
          <img src={iconToggle ? Bglight : Bgdark} alt="" />
        </div>
        <div
          className="main-lower"
          style={{ background: iconToggle ? "#fafafa" : "#181824" }}
        ></div>
        <div className="content">
          <div className="heading">
            <span className="title">TODO</span>
            <img
              src={iconToggle ? moon : sun}
              alt=""
              onClick={handleIconToggle}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <span className="image">
              {inputCheck ? (
                <img src={check} onClick={toggleInputCheck} />
              ) : (
                <span className="unchecked" onClick={toggleInputCheck}></span>
              )}
            </span>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleAddtodo}
              style={{
                background: iconToggle ? "#fff" : " #25273c",
                color: iconToggle ? " #25273c" : "#fafafa",
              }}
            />
          </form>

          <div
            className="todos-container"
            style={{
              background: iconToggle ? "#fff" : " #25273c",
              color: iconToggle ? " #25273c" : "#fafafa",
            }}
          >
            {todos.map((todo) => (
              <Todo
                task={todo.task}
                iconToggle={iconToggle}
                remove={() => handleDelete(todo.id)}
              />
            ))}
            <div className="footer">
              <div className="items">{todos.length + " "} items left</div>
              <div className="filter">
                <span>
                  <a>All</a>
                </span>
                <span>
                  <a>Active</a>
                </span>
                <span>
                  <a>Completed</a>
                </span>
              </div>
              <div className="clear">Clear completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
