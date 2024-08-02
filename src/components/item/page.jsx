import React from 'react'
import style from './page.module.css'
import Image from 'next/image'


const Item = (props) => {
  return (
    <div className={style.item}>
        <Image src={props.src} width={300} height={400} alt="product"/>
        <p>{props.name}</p>
        <div className={props.itemPrice}>
            <div className={style.itemPriceNew}>
                ${props.newPrice}
            </div>
            <div className={style.itemPriceOld}>
                ${props.oldPrice}
            </div>
        </div>
    </div>
  )
}

export default Item