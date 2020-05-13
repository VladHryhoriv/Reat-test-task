import { PeopleAPI } from "../api/api"

const SET_PEOPLE = 'SET_PEOPLE'
const IS_FETCHING = 'IS_FETCHING'

const initialState = {
    people:null,
    isFetching:true
}

export const peopleReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_PEOPLE:{
            return {...state,people:action.people}
        }
        case IS_FETCHING:{
            return{...state,isFetching:action.isFetching}
        }
        default :return state
    }
}

const setPeople = (people)=>({type:SET_PEOPLE,people})
const setFetching = (isFetching)=>({type:IS_FETCHING,isFetching})


export const getPeopleThunk = (people)=>{
    return async dispatch=>{
        dispatch(setFetching(true))
        let response = await PeopleAPI.getPeople()
        if(response.status ===200){
            dispatch(setPeople(response.data.results))
            dispatch(setFetching(false))
        }
    }
}