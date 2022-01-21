import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './component/Header/Header';
import TodoBody from './component/TodoBody/TodoBody';
import { UserProvider } from './UserContext';

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
    active: false,
    todo: 'Check mails'
  },
  {
    active: false,
    todo: 'buy another coffee cup'
  },
]



function App() {


  // if we had login part this would look something like this
  const User = {
    logedIn : false,
    userName : 'Deepesh'
  }

  //Body which will always
  const AppBody = (
    <>
      <Header />
      <TodoBody initialTodo={initialTodo}/>
    </>
  )
  return (
    <div className='appBody'>
      <style>{'background-color: rgb(40,44,52)'}</style>
        {
          User.logedIn ? <UserProvider value={User.userName}>{AppBody}</UserProvider> : AppBody
        }
    </div>
  );
}

export default App;
