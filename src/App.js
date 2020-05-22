import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Component/Main';
import { PeopleAPI } from './api/api';

const App = () => {
  const [people, setPeople] = useState(null);
  const [isFetching, setFetching] = useState(true)
  useEffect(() => {
    let api = async () => {
      let response = await PeopleAPI
      if (response.status === 200) {
        setPeople(response.data.results)
        setFetching(false)
      }
    }
    api();
  }, [people])
  return <Main people={people} isFetching={isFetching} />
}

export default App;
