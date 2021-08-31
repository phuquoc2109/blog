import React, { useContext } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './pages/single/Single'
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Context, ContextProvider } from './context/Context';

function App() {
  const {user}= useContext(Context);  
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Topbar />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/register">{user? <Home /> : <Register />}</Route>
            <Route path="/login">{user? <Home /> : <Login />}</Route>
            <Route path="/write">{user? <Write /> : <Register />}</Route>
            <Route path="/settings">{user? <Settings /> : <Register />}</Route>
            <Route path="/post/:postId"><Single /></Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
