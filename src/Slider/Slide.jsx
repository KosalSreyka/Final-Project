import React from "react";
import './slide.css'
import girl_shirt from './../img/girl_shirt.jpg'
import girl_shirt1 from './../img/girl_shirt1.jpg'
import shirt from'./../img/shirt.jpg'
import pc from './../img/pc.jpg'
import bag from './../img/bag.jpg';
import pic3 from './../img/pic3.jpg'
import pic1 from './../img/pic1.jpg'

export default function Slide()
{
   return(
    <React.Fragment>
      <div className="slide">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
     <div className="carousel-inner"> 
      <div className="carousel-item active">
          <img src={pic3} className="d-block w-100" alt="..."/>
      </div>
    <div className="carousel-item ">
      <img src={shirt} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={girl_shirt} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={girl_shirt1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={bag} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pc} className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span  className="carousel-control-next-icon tcolor" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
     
   </React.Fragment>
   );
}