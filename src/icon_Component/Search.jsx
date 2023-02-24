import './search.css'
import { useEffect,useState } from "react";
import Card from '../Card';
export default function Search(){
    const [data,setdata]=useState([]);
    const [input,setInput]=useState('');
    const [output,setOutput]=useState([]);

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setdata(json))
   })
   useEffect(()=>{
     setOutput([])
     data.filter(val=>{
        if(val.title.toLowerCase().includes(input.toLowerCase()))
        {
           setOutput(output=>[...output,val])
        }
     })
   },[input])
    return (
    <>
       <div className="search">
        <input type="text" placeholder="Search here..." onChange={(e)=>setInput(e.target.value)} />
       </div>
       <ul className="list" style={{display:'grid',gridTemplateColumns:'auto auto auto auto auto'}}>
          {
            output.map((item)=>(
                <li className='listitem' >
                   
                   <Card key={item.id} img={item.image} title={item.title} price={item.price+'$'} />
                </li>
             )
             )
          }
       </ul>
       
    </>
    );
}