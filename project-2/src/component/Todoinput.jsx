import React, { useEffect, useState } from "react";

function Todoinput({ 
  addlist,
  editIndex,
  editText,
  setEditText,
  saveEdit,
}) {
  const [input, setInput] = useState(editText || "");

  // Sync the input value with the props if the editing state changes
  useEffect(() => {
    if (editIndex !== null) {
      setInput(editText);
    } else {
      setInput("");  // Clear input when not editing
    }
  }, [editIndex, editText]);

    // Handle Enter press event to add or edit the Todo
    let handleEnterpress = (event) => {
      if (event.key === "Enter") {
        if (editIndex !== null) {
          saveEdit();  // Save edited todo
        } else {
          addlist(input);  // Add new todo
        }
        setInput("");  // Clear input after adding or editing
      }
    };

    // Handle change in input field
    let setInputHandler = (e) => {
      setInput(e.target.value);
      if(editText){
        setEditText(e.target.value);  
      }
     
    };

    return (
      <div>
        <input
          type="text"
          value={input}
          className="input-todo-list"
          onChange={setInputHandler}
          onKeyDown={handleEnterpress}
        />
        <button
          className="input-btn"
          onClick={() => {
            if (editIndex !== null) {
              saveEdit();  // Save edited todo
            } else {
              addlist(input);  // Add new todo
            }
            setInput("");  // Clear input after action
          }}
        >
          {editIndex !== null ? "Save" : "+"}  {/* Change button text based on mode */}
        </button>
      </div>
  );
}
export default Todoinput;
