import React from 'react'
import style from './page.module.css'
import img from 'public/girl.png'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className={style.offer}>
        <div className={style.offersLeft}>
            <h1>Exclusive</h1> 
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className={style.offersRight}>
            <Image src={img} width={300} height={400} alt='image'/>
        </div>
    </div>
  )
}

export default Offers