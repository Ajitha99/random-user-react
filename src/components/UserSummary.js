import { useState } from "react";


function UserSummary(props) {
    //name, email,street, city, state, username and image(bonus)
    //name -> title,first,last
    //email -> email
    //street -> location -street -name
    //city -> location-city
    //state -> location - state
    //username -> login - username
    //picture -> picture- medium
    // const { name , email, location, login, picture } = data;
   const [showMore, setShowMore] = useState(false);

   function toggleState(){
     setShowMore((prevState) => !prevState)
   }
    
  return (
    <div>
        {(props.data !== null)?
            <div className="userSummary-div1">
              <div className="first-output">
                <h3>{props.data.name.title}. {props.data.name.last} {props.data.name.first}</h3>
                <h4><span>Email</span>: {props.data.email}</h4>
                <button onClick={toggleState}>More Info</button>
              </div>
                
                {
                  (showMore === true)?
                      <div className="more-info-p">
                        <div className="more-info-c1">
                          <img className = "more-info-pic" src = {props.data.picture.medium} alt ={props.data.name.first}/> 
                        </div>
                        <div className="more-info-c2">
                          <h3>{props.data.name.title}. {props.data.name.last} {props.data.name.first}</h3>
                          <h4><span>Email </span>: {props.data.email}</h4>
                          <div className="more-info-c3"><h4><span>Address</span>: {props.data.location.street.name} , {props.data.location.city} <br>
                          </br>{props.data.location.state}, {props.data.location.country}</h4>
                              {/* <h5>{props.data.location.street.name}</h5>
                              <h5>{props.data.location.city}</h5>
                              <h5>{props.data.location.state}</h5>
                              <h5>{props.data.location.country}</h5> */}
                          </div>
                          <h4><span>User Name</span>: {props.data.login.username}</h4>
                        </div>
                      </div>
                    : null
                }
                {/* name, email, street, city, state, and username, medium image */}
            </div>: "There is no user data"}
          
    </div>
  )
}

export default UserSummary;



//  {/* {(props.data !== null)?
//     <div>
//         <h3>{props.data.name.title}. {props.data.name.last} {props.data.name.first}</h3>
//         <h4><span>Email: </span>{props.data.email}</h4>
//         <h3><span>Address:</span></h3>
//         <p>{props.data.location.street.name}</p>
//         <p>{props.data.location.city}</p> 
//         <p>{props.data.location.state}</p>
//         <h4><span>username:</span> {props.data.login.username}</h4>
//         <h4><img src = {props.data.picture.medium} alt="user" /></h4>
//     </div>: "There is no user data"} */}



