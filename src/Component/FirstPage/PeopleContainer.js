import React, { memo } from 'react'
import People from './People'
import Preloader from '../Common/Preloader/Preloader'

const PeopleContainer = (props) => {
    return (
        !!props.isFetching 
        ? <Preloader />
        : <People {...props} />
    )
}

export default memo(PeopleContainer)