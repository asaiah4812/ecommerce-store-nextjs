"use client";
import Link from 'next/link';
import logo from "public/Logo.svg"
import React from 'react'
import style from './page.module.css'
import Image from 'next/image';
import cart from "public/cart.svg";
import {useState} from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className={style.navbar}>
      <div className={style.navLogo}>
        <Link href="/">
        <Image src={logo} width={80} height={80} alt='logo'/>
        </Link>
      </div>
      <ul className={style.navMenu}>
        <li onClick={()=>{setMenu("shop")}}><Link className={style.navLink} href="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link className={style.navLink} href="/mens">Menu</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link className={style.navLink} href="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link className={style.navLink} href="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className={style.navLoginCart}>
        <Link className={style.navLink} href="/login">
        <button>Login</button>
        </Link>
        <Link className={style.navLink} href="cart">
        <Image src={cart} width={40} height={40} alt='cart icon'/>
        </Link>
        <div className={style.navCartCount}>
          0
        </div>
      </div>
    </div>
  )
}

export default Navbar;