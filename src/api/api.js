import * as axios from 'axios'

const instance = axios.create({
    baseURL:'https://swapi.dev/',
    headers:{}
})

export const PeopleAPI = {
     getPeople(){
        return instance.get('api/people/')
    }
}