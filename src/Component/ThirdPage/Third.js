import React from 'react'
import { NavLink } from 'react-router-dom'

export const Third = React.memo((props)=>{
    return <div>
        <NavLink to='/people'><button>FIRST</button></NavLink>
    </div>
})