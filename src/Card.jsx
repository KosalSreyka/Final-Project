import './card.css'
export default  function Card({img,title,price}){
    return(
        <>

          <div className="card-contain">
            <div className="card">
            <div className="card-img">
              <img src={img} alt="" />
            </div>
            <div className="card-text">
              {title}
            </div>
            <div className="price">
               {price}
            </div>
            <div className="order">
              Order
            </div>
            </div>
            

          </div>
        </>
    );
}