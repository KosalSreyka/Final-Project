import {GrUserManager} from 'react-icons/gr'
import './login.css'
export default function SignIn(){
    return (
        <>
         <div className="card-container" >
             <div className="card1" style={{backgroundColor:'rgba(30, 143, 255, 0.363)'}}>
                <form action="">
                    <div className="box-icon">
                        <GrUserManager/>
                    </div>
                    <h2>Member Login</h2>
                    <label >Email</label><br/>
                    <input type="email" required /><br/>

                    <label >Password</label><br/>
                    <input type="password" required/><br/>
                    <input type="submit" value="Login" />
                </form>
            </div>
          </div>

        </>
    );
}
