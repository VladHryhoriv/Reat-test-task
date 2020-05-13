import React from 'react'
import s from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

export const Navbar =React.memo((props)=>{
    return (
        <div className={s.wrapper}>
            <div className={s.wrapperButton}>
                <NavLink to='/people' ><button className={s.item}>People</button></NavLink>
                <NavLink to='/second' ><button className={s.item}>SecondPage</button></NavLink>
                <NavLink to='/third' ><button className={s.item}>ThirdPage</button></NavLink>
            </div>
        </div>
    )
}) 