import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Third = (props)=><div><NavLink to='/people'><button>FIRST</button></NavLink></div>

export default memo(Third)