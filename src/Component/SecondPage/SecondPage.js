import React from 'react'
import { NavLink } from 'react-router-dom'

export const Second = React.memo((props)=>{
    return <div>
        <NavLink to='/third'><button>THIRD</button></NavLink>
    </div>
})