import { useReducer } from "react";

const countReducer = (state, action) => {
  //action = {type:""}
  if (action.type === "INC") {
    state = {
      count: state.count + 1,
    };
  } else if (action.type === "DEC") {
    state = {
      count: state.count - 1,
    };
  } else {
    state = { count: 0 };
  }

  return state;
};

function Counter() {
  let [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });
  return (
    <div>
      <button className="btn btn-success px-2 mx-2"
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        +
      </button>
      <span>{state.count}</span>

      <button className="btn btn-danger px-2 mx-2"
        onClick={() => {
          dispatch({
            type: "DEC",
          });
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
