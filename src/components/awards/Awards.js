import React from 'react'
import './awards.css'
export default function Awards() {
  return (
    <div className='awards-container'>
        <div className='awards-heading'>
            <h2>Excellence Awarded</h2>
        </div>
        <div className='awards-items'>
            <div className='award-item'><img src='https://www.shreecement.com/uploads/lists/sustainability-vision-2020.png'/><h5>ICC coporate Governance & sustainability Vision 2020</h5></div>
            <div className='award-item'><img src='https://www.shreecement.com/uploads/lists/global-sustainability-2019.png'/><h5>ICC coporate Governance & sustainability Vision 2020</h5></div>
            <div className='award-item'><img src='https://www.shreecement.com/uploads/lists/chain-excellence-2019.png'/><h5>ICC coporate Governance & sustainability Vision 2020</h5></div>
            <div className='award-item'><img src='https://www.shreecement.com/uploads/lists/best-quality-excellence.png'/><h5>ICC coporate Governance & sustainability Vision 2020</h5></div>
        </div>
    </div>
  )
}
