import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./todo.css"; // Assuming the styles are in Todo.css

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="center-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a task..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button>
            <i
              className="fas fa-plus"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </button>
        </div>
        <div className="showItems">
          {list.map((elem) => {
            return (
              <div className="eachItem">
                <h3>{elem.data}</h3>
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="showItems">
          <button
            className=" effect04"
            data-sm-link-text="remove All"
            onClick={() => dispatch(removeTodo())}
          >
            <span>Check-List</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
