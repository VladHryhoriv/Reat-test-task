import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Second = (props)=><div><NavLink to='/third'><button>THIRD</button></NavLink></div>


export default memo(Second)