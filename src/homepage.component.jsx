import React, { Component } from 'react'
import './homepage.styles.scss'

const Homepage = () => (
    <div className='hompeage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='suntitle'>SHOP NOW </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JAKETS</h1>
                    <span className='suntitle'>SHOP NOW </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNIKERS</h1>
                    <span className='suntitle'>SHOP NOW </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='suntitle'>SHOP NOW </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='suntitle'>SHOP NOW </span>
                </div>
            </div>

        </div>
    </div>
)

export default Homepage;