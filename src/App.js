import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Topbar from './components/topbar/Topbar';
import { Context, ContextProvider } from './context/Context';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  const {user}= useContext(Context);
  
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          {/* Switch page will on top page */}
          <ScrollToTop />
          <Topbar />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/register">{user? <Home /> : <Register />}</Route>
            <Route path="/login">{user? <Home /> : <Login />}</Route>
            <Route path="/write">{user? <Write /> : <Login />}</Route>
            <Route path="/settings">{user? <Settings /> : <Login />}</Route>
            <Route path="/post/:postId"><Single /></Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
