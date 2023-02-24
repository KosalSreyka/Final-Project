import './footer.css'
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook,BsGithub} from 'react-icons/bs'
export default function Footer(){
  return (
    <>
       <div className="box">
        <div className="box1">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eaque voluptate obcaecati laudantium? Ut nihil veritatis magnam perspiciatis, ad cupiditate, earum eos iusto consequuntur, quas sunt sequi labore accusantium nulla?</p>
        </div>
        <div className="box2">
            <h2>Contact Us</h2>
            <span ><FcGoogle/></span>
             <span style={{color:'dodgerblue'}}><BsFacebook/> </span>
             <span style={{color:'black'}}><BsGithub/></span>
        </div>
       </div>
    </>
  );
}