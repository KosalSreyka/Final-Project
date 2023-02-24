import { useEffect,useState } from "react"
import Data from './Data/Data'
import './description.css'
export default function Description(){
    const [data,setdata]=useState([]);
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setdata(json))
   })
    return(
        <>
        <div style={{display:'grid',gridTemplateColumns:'auto'}}>
            {
                data.map((item)=>{
                   return <Data key={item.id} img={item.image} id={item.id} 
                    title={item.title} price={item.price+'$'}
                    category={item.category}
                    descript={item.description}
                    />
                })
            }
            
        </div> 
        
        </>
    )
}