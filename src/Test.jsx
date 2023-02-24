import { useEffect,useState } from "react";
import Card from "./Card";
import './index.css'
export default function Test()
{
   const [data,setdata]=useState([]);
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setdata(json))
   })
   return(
   <>
         <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto auto'}}>
         {
           data.map((item)=>{
            return (
            
               <Card key={item.id} img={item.image} title={item.title} price={item.price+'$'} />
            )
            })
         }

         </div>    
   </>
   )
}