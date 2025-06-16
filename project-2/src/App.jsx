import React, { useState } from "react";
import "./App.css";
import Todoinput from "./component/Todoinput";
import TodoList from "./component/TodoList";
import style from './component/App.module.css';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the Todo being edited
  const [editText, setEditText] = useState(""); // Text that is being edited
  
  // Add a new todo item
  const addListItem = (inputText) => {
    if (inputText.trim() !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  // Delete a todo item by index
  const deleteListItem = (index) => {
    let cd = confirm("sure to delete");
    if (cd) {
      const newList = [...listTodo];
      newList.splice(index, 1);
      setListTodo(newList);
    }
  };

  // Set the index of the todo to be edited and fill the input with the existing value
  const editListItem = (index,) => {
    setEditIndex(index);
    setEditText(listTodo[index]);
  };
  
  // Save the edited todo
  const saveEdit = () => {
   

      let cs = confirm("sure to save");
      if( cs){
        const newList = [...listTodo];
        
        newList[editIndex] = editText;
        
        setListTodo(newList);
        
      }
      setEditIndex(null); // Exit edit mode
      setEditText(""); // Clear the edit text
      
    }
  
    // console.log(newList)
      

  

  return (
    <div className="main-contianer">
      <h2 className={style.heading}>Todo List</h2>
      <div className="app-container">
        {/* Pass editIndex and editText to the input field for editing */}
        <Todoinput
          addlist={addListItem}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
        />
        <hr />
        <br></br>
        {/* Display list of todos */}
        {listTodo.map((item, i) => (
           
          <TodoList
            key={i}
            index={i}
            listItem={item}
            deleteItem={deleteListItem}
            editItem={editListItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
