import './data.css'
export default  function Data({img,id,title,price,category,descript}){
    return(
        <>

          <div className="Newcard-container">
            <div className="Card">
            <div className="Card-img">
                 <img src={img} alt="" />
            </div>

            <div className="Card-txt">
              <p>{id}</p>
              <p>{title}</p>
              <p> {price}</p>
              <p>{category}</p>
              <p>{descript}</p>
             </div>


            </div>
            

          </div>
        </>
    );
}