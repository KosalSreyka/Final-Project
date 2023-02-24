import {FaRegIdCard} from'react-icons/fa'
import './payment.css'
export default function Payment(){
    return(
        <>
           <div className="box-container">
             <div className="card">
                <h2>Start Your Account</h2>
                
                   <div className="in-card" >
                    <form >
                      <label >Card Information</label><br />
                      <input type="text" placeholder='0000 0000 0000 0000 ' />
                      <FaRegIdCard/>
                      <br />
                      <input type="date" placeholder='MM/YY' />
                      <input type="text" placeholder='Name on Card' />
                      <label >Country or Region</label>
                      <input type="text" placeholder='Cambodia' />
                      <label >Contact Inforamtion</label>
                        <input type="text"  placeholder='Name'/>
                        <div className="contact-info">
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Phone'/>
                      </div>
                   </form>
                   </div>
                      
                
             </div>
           </div>
        </>
    )
}