import './App.css';
import { useContext } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import { AppContext } from './store/AppContext';
import Login from './components/Login';
import Navigation from './components/Navigation';
import MyTopics from './components/topics/MyTopics';
import Topic from './components/topics/Topic';
import NewTopic from './components/topics/NewTopic';

function App() {

  const { user, logout } = useContext(AppContext);

  const Logout = ( props ) => 
    <>
      {logout()}
    </>

  return (
    <div className='container-fluid'>
      {
        user === undefined ?
          <></>
          : user === null ?
            <Login/>
            :
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path="/my-topics" element={<MyTopics />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/logout" element={<Logout />}/>
                <Route path="/topic/new" element={<NewTopic />}/>
                <Route path="/topic/:id" element={<Topic />}/>
              </Routes>
            </BrowserRouter>
      }
    </div>
  );
}

export default App;
