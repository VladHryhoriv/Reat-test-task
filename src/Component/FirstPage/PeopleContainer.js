import React from 'react'
import { getPeopleThunk } from '../../redux/people'
import { getPeople, getFetching } from '../../Selectors/Selectors'
import  People  from './People'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Preloader from '../Common/Preloader/Preloader'

class PeopleContainer extends React.Component {
    componentDidMount(){
        this.props.getPeopleThunk()
    }
    render(){
        return (
            !!this.props.isFetching?<Preloader/>
            :<People {...this.props}/>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        people:getPeople(state),
        isFetching:getFetching(state)
    }
}

export default compose(
    connect(mapStateToProps,{getPeopleThunk})
)(PeopleContainer)