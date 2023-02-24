import {FcGoogle} from 'react-icons/fc';
import {BsFacebook,BsGithub} from 'react-icons/bs'
import {NavLink,Outlet} from 'react-router-dom'
import '../style.css'
import './login.css'
export default function Login(){
    return (
        <>
          <div className="card-container" >
             <div className="card1" >
                <form action="">
                    <h1>Sign Up</h1>
                    <label >Email</label><br/>
                    <input type="email" required /><br/>

                    <label >Username</label><br/>
                    <input type="text" required /><br/>

                    <label >Password</label><br/>
                    <input type="password" required/><br/>
                    <input type="submit" value="Sign Up" />
                </form>
                <div className="google">
                <li>
                    <NavLink to="https://accounts.google.com/v3/signin/identifier?dsh=S-1039351249%3A1677143934596053&continue=https%3A%2F%2Fads.google.com%2Fnav%2Flogin%3Fsubid%3Dbd-en-ha-awa-bk-a-b00%21o3%7EEAIaIQobChMIx7Gf7Ker_QIVlphmAh16HAq0EAAYASAAEgK57_D_BwE%7E139027759876%7Eaud-1225341334262%3Akwd-7497960176%7E17792962241%7E611031582843&followup=https%3A%2F%2Fads.google.com%2Fnav%2Flogin%3Fsubid%3Dbd-en-ha-awa-bk-a-b00%21o3%7EEAIaIQobChMIx7Gf7Ker_QIVlphmAh16HAq0EAAYASAAEgK57_D_BwE%7E139027759876%7Eaud-1225341334262%3Akwd-7497960176%7E17792962241%7E611031582843&osid=1&passive=1209600&service=adwords&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHdftLEyyWB0HiLN6AYnT6CvAeWDfnO8ZyK5LURrHmPGgB2UzqgALwd4xmKEGMAQiIjFUodgxg" className={({isActive})=>isActive?'active':undefined}> 
                         <FcGoogle/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://web.facebook.com/?stype=lo&jlou=AfeauloByWd9VN8sELE5jx_7rLXQhjt4GJ3_aTf9MXbGy9JsgCSUKB2pb_fqqIfB6793iy0LvVsjy8ptX81UNFf7UvheZVH5ePAtl71wZPU01g&smuh=280&lh=Ac9_rDdO50ZF3U3byN8' className={({isActive})=>isActive?'active':undefined}> 
                         <BsFacebook/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://github.com/login' className={({isActive})=>isActive?'active':undefined}> 
                         <BsGithub/>
                    </NavLink>
                </li>
                
                </div>
                <div className="user">
                <span>
                    Already a User ?  
                        <NavLink to='/signin' className={({isActive})=>isActive?'active':undefined}> 
                          Login
                       </NavLink>
                </span>

                
                </div>
             </div>
          </div>
          <Outlet/>
        </>
    );
}