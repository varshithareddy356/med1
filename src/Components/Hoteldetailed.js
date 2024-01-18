import { useState } from "react";
import { Routing } from "./Routing";
import { IoMdPerson } from "react-icons/io";
import "./Hotelsdetails.css"
export function Hoteldetailed(){


    const[roomtoggle,setRoomtoggle]=useState(false)
    const [adult,setAdult]=useState(2)
    const [Room,setRoom]=useState(1)
    const [children,setChildren]=useState(0)

    const Hotelsdata = [
        {
          id: 1,
          name: "Hot-Rate 5-Star Hotel",
          location: "Hyderbad south area",
          img:"https://images.trvl-media.com/lodging/3000000/2050000/2046400/2046352/b9a1e5c7_b.jpg",
          distance:"0.8km miles from  search",
          price: "$204",
          total: "$264",
          review:"Good",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Novotel Hyderbad Airport Hotel",
          img:"https://media.expedia.com/lodging/3000000/2050000/2046400/2046352/57eff9c7_b.jpg",
          location: "Hyderbad ",
          distance:"0.8km miles from  search",
          price: "$264",
          total: "$304",
          review:"Good",
          rating: 4.6,
        },
        {
            id: 3,
            name: "Taj Faluknama Palce",
            img:"https://media.expedia.com/lodging/4000000/3150000/3141200/3141149/99813012_b.jpg",
            location: "Hyderbad ",
            distance:"0.8km miles from  search",
            price: "$722",
            total: "$833",
            review:"Exceptional",
            rating: 4.8,
          },
          {
            id: 4,
            name: "Ramana Shree California Resort",
            img:"https://media.expedia.com/lodging/2000000/1640000/1635600/1635531/914ee45a_b.jpg", 
            location: "Bangolore",
            distance:"8km miles from  search",
            price: "$36",
            total: "$40",
            review:"Good",
            rating: 3.8,
          },
          {
            id: 5,
            name: "Alive Hotel",
            img:"https://media.expedia.com/lodging/5000000/4330000/4326100/4326018/cda9abb8_b.jpg", 
            location: "Bangolore",
            distance:"8km miles from  search",
            price: "$38",
            total: "$48",
            review:"Good",
            rating: 3.9,
          },
        
      ];
      
    
const handleDecrement=(type)=>{
    if (type==="adult"&&adult>1){
      setAdult(adult - 1);
    } else if(type==="Room"&&Room>1) {
      setRoom(Room - 1);
      
    } else if(type==='children'&&children>0) {
      setChildren(children - 1);
    }
  };
    return(
        <>
        
        <Routing style={{height:"40px"}}/>
      <hr/>
        <br/>
        <div style={{margin:"10px"}} >
                <input type="text" placeholder="Where would you like to stay" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
                <i className="fa fa-map-marker" style={{position:"absolute",top:"120px",fontSize:"28px",left:"20px"}}></i>
                <input type="date" style={{width:"160px", height:"41px", fontSize: "17px",margin:"15px"}}/>
                <input type="date" style={{width:"160px", height:"41px", fontSize: "17px",margin:"15px"}}/>
               
                <span
  style={{
    border: "1px solid grey",
    textAlign: "left",
   
    height: "41px", 
    width: "260px", 
    display: "inline-block", 
   
  }}
  onClick={() => setRoomtoggle(!roomtoggle)}
>
  <IoMdPerson style={{ fontSize: "25px" }} /> {`${Room} Room,${adult} Adults,${children} Childrens`}
</span>

{
    roomtoggle? <div className='room-info-container'>
<p className='rooms-info'>
  {Room} Room
  <span>
    <button onClick={()=>handleDecrement("Room")} style={{ marginRight: "10px" }}>-</button>
    <button onClick={()=>setRoom(Room + 1)}>+</button>
  </span>
</p>
<p className='rooms-info'>
  {adult} Adult
  <span>
    <button onClick={()=>handleDecrement("adult")} style={{ marginRight: "10px" }}>-</button>
    <button onClick={()=>setAdult(adult + 1)}>+</button>
  </span>
</p>
<p className='rooms-info'>
  {children} Children (2-11 years)
  <span>
    <button onClick={()=>handleDecrement("children")} style={{ marginRight: "10px" }}>-</button>
    <button onClick={()=>setChildren(children + 1)}>+</button>
  </span>
</p>
<button onClick={()=>{setRoomtoggle(!roomtoggle)}} style={{width:"100px",height:"25px",borderRadius:"25px",backgroundColor:"red",color:"white",marginLeft:"190px"}}>Done</button>

          </div> :""
 
}
<button style={{width:"210px",height:"41px",backgroundColor:"red",color:"white",margin:"10px",border:"none",borderRadius:"25px"}}>Search</button>

              </div>
              <hr/>
              
            
              <div className='hotels-display-container'>
        <div className='hotels-container'>
{
    Hotelsdata.map((item)=>{
        return  <div className='hotels-info'>
        <div >
       <img className='image' src={item.img} alt='nt'/>
        </div>
        <div className='discription'>
            <div className='discription-info'>
                <b style={{color:"yellow",fontSize:"x-large"}}>*</b>
                <b>{item.name}</b>
                <i>{item.location}</i>
                <p>{item.distance}</p>
                <p style={{color:"green"}}>
                    <button style={{border:"1px solid green",backgroundColor:"green",color:"white"}}>
                        {item.rating}</button >{item.review}!</p>
            </div>
            <div style={{lineHeight:"10px"}} className='price-container'><h5 style={{color:"red"}}>{item.price}</h5>
            <p>per night</p>
            <p>{item.total}total</p>
            </div>
        </div>
    </div>
    })
   
}
       
        </div>
        <div className='map'>
            <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" alt='not' height="600px" />
        </div>
      </div>
        </>
    )
}