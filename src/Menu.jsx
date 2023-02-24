import { FaSistrix,FaCcPaypal } from "react-icons/fa";
import {  AiOutlineUserAdd,AiFillPhone} from "react-icons/ai";
import {Outlet,NavLink} from 'react-router-dom'
import './style.css'
export default function Menu()
{
    
    return (
      <>
        <div className="nav-bar">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GcEJRKoSu4Vrjy0tIjwshDNkeedle7ZTWg&usqp=CAU" alt="Logo"/>
            </div>
            <ul>
                <li>
                <NavLink to='/' className={({isActive})=>isActive?'active':undefined}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/product' className={({isActive})=>isActive?'active':undefined}>All Product</NavLink>
                </li>
                <li>
                    <NavLink to='/allproduct' className={({isActive})=>isActive?'active':undefined}> Product</NavLink>
                </li>
                <li>
                    <NavLink to='/description' className={({isActive})=>isActive?'active':undefined}>Description</NavLink>
                </li>
                
            </ul>
            <ul>
            <li >
                    <NavLink to='/search' className={({isActive})=>isActive?'active':undefined} > 
                         <FaSistrix/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/userlogin' className={({isActive})=>isActive?'active':undefined} > 
                         <AiOutlineUserAdd/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/payment' className={({isActive})=>isActive?'active':undefined}> 
                         <FaCcPaypal/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/phone' className={({isActive})=>isActive?'active':undefined}> 
                         <AiFillPhone/>
                    </NavLink>
                </li>
                
            </ul>
        </div>
        <Outlet/>
      </>
    )
}