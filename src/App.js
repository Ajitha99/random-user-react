import './App.css';
import { useEffect, useState } from 'react';
import { fetchUser } from './services/rando_user'
import UserSummary from './components/UserSummary';



function App() {

  const [currentUser, setCurrentUser] = useState([])

 async function refreshUser(e){
   //e.preventDefault();
    try {
      const fetchData = await fetchUser();
      console.log(fetchData);
      setCurrentUser(fetchData);
        } catch (error) {
          console.log(error);
        } 
 }

 useEffect(()=>{
  refreshUser();
},[])
 

  return (
    <div className="App">
      <header>Random User App</header>
          <div className='main'>
          <button onClick={(e)=>refreshUser(e)}>Refresh</button>
          <div className='render-data'>
          {  
              (currentUser || []).map((element,index)=>{
                    return <UserSummary
                      data = {element}
                      key = {index}
                    />
          
                    })
          }
            </div>
        </div>
     </div>
  );
}

export default App;
