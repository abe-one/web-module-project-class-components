import React from "react";

const TodoForm = ({ input, updateInput }) => {
  const invokeUpdateInput = (e) => updateInput(e.target.value);

  return (
    <form>
      <input
        name="todoInput"
        type="string"
        value={input}
        onChange={invokeUpdateInput}
        placeholder="Add something to do"
      ></input>
    </form>
  );
};

export default TodoForm;
