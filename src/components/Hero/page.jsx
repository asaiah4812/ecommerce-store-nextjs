import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import icon from 'public/hand.png'
import hero from 'public/Hero1.png'

const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.heroLeft}>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className={style.heroHandIcon}>
                    <p>new</p>
                    <Image src={icon} width={50} height={50} alt='hand icon'/>
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className={style.heroLatestBtn}>
                <div>Latest Collection</div>
                <Image src={icon} width={40} height={40} alt='icon'/>
            </div>
        </div>
            <div className={style.heroRight}>
                <Image src={hero} width={350} height={600} alt='arrow icon'/>
            </div>
        
    </div>
  )
}

export default Hero