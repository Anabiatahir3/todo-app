import React from 'react';
import"./App.css";  
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './components/TodoList';
function App() {

  return (
    <div className='todo-app' >
      <TodoList/>
    </div>
  
    )}
export default App;