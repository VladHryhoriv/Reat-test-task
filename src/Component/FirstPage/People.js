import React from 'react'
import s from "./People.module.css"

export const People = React.memo(({people,...props})=>{
    return(
        <div className={s.wrapper}>
            {people.map(p=>{
                return <div className={s.wrapperPerson}>
                    <div className={s.name}>Name: {p.name}</div>
                    <div className={s.hair_color}>Hair's color: {p.hair_color}</div>
                </div>
            })}
        </div>
    )
})