import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Second = (props) =>{
    const { t } = useTranslation();
    return <div><NavLink to='/third'><button>{t('Third')}</button></NavLink></div>
} 


export default memo(Second)