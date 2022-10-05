import React, { useState, useEffect } from 'react';
import "./Header.css"
import { NavLink } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaShoppingCart } from 'react-icons/fa'


export default function Header({ countCartItems, setShow }) {

    const [burger, setBurger] = useState(false)
    const toggleBurger = () => {
        setBurger(!burger)
    }

    useEffect(() => {
        AOS.init({
            odset: 100,
            duration: 1000,
            easing: 'ease',
            once: true,
        })
    })


    return (

        <div className="header" data-aos='flip-left' >
            <div className="basket" >

                <div className='btn_svg' onClick={() => setShow(true)}>
                <FaShoppingCart size='80%' color='black' aria-posinset="absalute" />
                    {' '}

                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ' '
                    )}
                   
                </div>{' '}




            </div>
            <div className="container">


                <div className="menu__nav">
                    <div className='nav__icon'>
                        <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/07/t_christopher%E2%80%99s.png" alt="" />
                    </div>

                    <ul className={`nav ${burger ? 'show-nav' : ''}`}>
                        <li onClick={toggleBurger}>
                            <NavLink className={(navData) => navData.isActive ? "selected" : ""} to={'/'}>Блюда</NavLink>
                        </li >

                        <li onClick={toggleBurger}>
                            <NavLink className={(navData) => navData.isActive ? "selected" : ""} to={'/drinks'}>Напитки</NavLink>
                        </li>
                        <li onClick={toggleBurger}>
                            <NavLink className={(navData) => navData.isActive ? "selected" : ""} to={'/dessert'}>Дессерты</NavLink>
                        </li>
                        <li onClick={toggleBurger}>
                            <NavLink className={(navData) => navData.isActive ? "selected" : ""} to={'/about'}>О нас</NavLink>
                        </li >
                        <li onClick={toggleBurger} className='button'>
                            <NavLink className={(navData) => navData.isActive ? "selected" : ""} to={'/login'}>Войти</NavLink>
                        </li>

                    </ul>



                    {/* <div className="backet">
                                <MdShoppingCart />
                            </div> */}

                    <div onClick={toggleBurger} className={`mobile-btn ${burger ? 'show-mobile-btn' : ''}`}>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>

    );
}