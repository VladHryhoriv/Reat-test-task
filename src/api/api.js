import * as axios from 'axios'

export const PeopleAPI = axios.get('https://swapi.dev/api/people/')
  .then(response => {
    return response;
  })
  .catch(error => {
    return error;
  })