import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

function App() {

  let users = {results :
   [
    {picture: { medium:"https://pbs.twimg.com/profile_images/1282207374707761152/FipRN1k7_400x400.jpg"} ,name: {first:"TomasSoiffer"}, email: "@tomassoiffer", initialIsFollowing : true },
    {picture: { medium:"https://pbs.twimg.com/profile_images/1282207374707761152/FipRN1k7_400x400.jpg"} ,name: {first:"TomasSoiffer"}, email: "@tomassoiffer", initialIsFollowing : true },
    {picture: { medium:"https://pbs.twimg.com/profile_images/1282207374707761152/FipRN1k7_400x400.jpg"} ,name: {first:"TomasSoiffer"}, email: "@tomassoiffer", initialIsFollowing : true }
  ]}
  const [users2,setUser] = useState(users)
  
    useEffect( () => {fetch('https://randomuser.me/api/?results=5')
    .then(result=>result.json())
    .then(items=>setUser(items))
    .catch(() => console.log("Algo falló"))
    },[]
    )
    console.log(users2.results)
      
  

    return (
    <div className="whoFollow">
      <h3>A quién seguir</h3>
      {
        users2.results.map(({picture,name,email}) =>  (
        <TwitterFollowCard
       imgLink = {picture.medium}
       name = {name.first}
       userName = {email}
       initialIsFollowing = {false}
       />
       )
        )
        
      }
      
    </div>
  );
}

export default App;
