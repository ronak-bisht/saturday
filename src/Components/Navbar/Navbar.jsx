import { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Buttons/Button'
import Model from '../Models/Models'
import navdata from './Navdata'
export default function Navbar(){
    const [data,setData]=useState("data1")
    
   
    return(
        <>
            <nav className='navbar container py-fourth'>
                <div className="nav-logo">
                    <img src={logo}  />
                </div>
                <div>
                    <ul className='nav-links'>

                        <li className='fs-nav' onClick={()=>setData(d1)}>Home</li>
                        <li className='fs-nav' onClick={()=>setData(d2)}>HR Services</li>
                        <li className='fs-nav' onClick={()=>setData(d3)}>Visa Services</li>
                        <li className='fs-nav'>Resources</li>
                        <li className='fs-nav'>Why Connect</li>
                        <li className='fs-nav'>Countries</li>
                        <li><Button class="btn btn-red" text="Contact us" temp=""/></li>
                        
                    
                    </ul>
                </div>
                <Model data={data}/>
            </nav>
        </>
    )
}