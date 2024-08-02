import React from 'react'
import style from './page.module.css'
import data  from '../../data/all_product'
import Item from '../item/page'

const Popular = () => {
  return (
    <div className={style.popular}>
        <h2>POPULAR IN WOMEN</h2>
        <hr />
        <div className={style.popularItem}>
            {data.map((item, i)=>{
                return <Item key={i} src={item.src} id={item.id} name={item.name} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            })}
        </div>
    </div>
  )
}

export default Popular