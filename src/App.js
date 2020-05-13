import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import PeopleContainer from './Component/FirstPage/PeopleContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Switch>
            <Route path='/people' render={()=><PeopleContainer/>}/>
            <Redirect from='/' to='/people' />
      </Switch>
    </div>
  );
}

export default App;
