import { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Buttons/Button'
import Model from '../Models/Models'
import navdata from './Navdata'
export default function Navbar(){
    const [data,setData]=useState("data1")
    const [show,setShow]=useState(false)
    console.log(show)
    return(
        <>
            <nav className='navbar container py-fourth'>
                <div className="nav-logo">
                    <img src={logo}  />
                </div>
                <div>
                    <ul className='nav-links'>

                        <li className='fs-nav' >Home</li>
                        <li className='fs-nav' onMouseEnter={()=>{setData(navdata.d1); setShow(true);}} onMouseDown={()=>{setData(""); setShow(false)}}>HR Services</li>
                        <li className='fs-nav' onMouseEnter={()=>setData(navdata.d2)}>Visa Services</li>
                        <li className='fs-nav' onMouseEnter={()=>setData(navdata.d3)}>Resources</li>
                        <li className='fs-nav'onMouseEnter={()=>setData(navdata.d4)}>Why Connect</li>
                        <li className='fs-nav'>Countries</li>
                        <li><Button class="btn btn-red" text="Contact us" temp=""/></li>
                        
                    
                    </ul>
                </div>
                
            </nav>
          {show &&  <Model data={data}/>}
        </>
    )
}