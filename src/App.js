import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import PeopleContainer from './Component/FirstPage/PeopleContainer';
import { Navbar } from './Component/Navbar/Navbar';
import  Second  from './Component/SecondPage/SecondPage';
import  Third  from './Component/ThirdPage/Third';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar/>
      <Switch>
            <Route path='/people' render={()=><PeopleContainer/>}/>
            <Route path='/second' render={()=><Second/>}/>
            <Route path='/third' render={()=><Third/>}/>
            <Route path='*' redact={() => <div>404 NOT FOUND</div>} />
            <Redirect from='/' to='/people' />
      </Switch>
    </div>
  );
}

export default App;
