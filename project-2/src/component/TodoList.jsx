import React from "react";

function TodoList({ index, listItem, deleteItem, editItem }) {
  return (
    <div>
      
      <li className="list-item">
        {listItem}
        <div className="list-btn">
         <span>
           <i className="fas fa-trash" onClick={() => deleteItem(index)} ></i>
          </span>
         <span>
           <i className="fas fa-edit"onClick={() => editItem(index)}  ></i> 
         </span>
        </div>
      </li>
    </div>
  );
}

export default TodoList;
