import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './component/Header/Header';
import TodoBody from './component/TodoBody/TodoBody';

const initialTodo = [
  {
    active: true,
    todo: 'Make Coffee'
  },
  {
    active: true,
    todo: 'Go for a run'
  },
  {
    active: true,
    todo: 'Code todo App'
  },
  {
    active: true,
    todo: 'Read "Awaken the giant within"'
  },
  {
    active: true,
    todo: 'Check mails'
  },
  {
    active: true,
    todo: 'buy another coffee cup'
  },
]

function App() {
  return (
    <React.Fragment>
      <Header />
      <TodoBody initialTodo={initialTodo}/>
    </React.Fragment>
  );
}

export default App;
