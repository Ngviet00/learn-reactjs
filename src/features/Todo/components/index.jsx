import React from 'react';
import classnames from 'classnames';
import './style.scss';

function TodoList({todoList, onTodoClick}) {

   const handleTodoClick =(item, idx)=>{
      if(!onTodoClick) return;
      onTodoClick(item, idx);
   }

   return (
      <div>
         <h1>Todo List</h1>
         <ul className="list-todo">
            {
               todoList.map( (item,idx) =>(
                  <li   key={item.id}
                        className = {classnames({completed: item.status === 'completed'})}
                        onClick={ () => handleTodoClick(item,idx)}
                  >
                     {item.title}
                  </li>
               ))
            }
         </ul>
      </div>
   );
}

export default TodoList;