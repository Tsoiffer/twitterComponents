import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

function App() {
  const users = [
    {imgLink: "https://pbs.twimg.com/profile_images/1282207374707761152/FipRN1k7_400x400.jpg" ,name: "TomasSoiffer", userName: "@tomassoiffer", initialIsFollowing : true },
    {imgLink: "https://pbs.twimg.com/profile_images/1282207374707761152/FipRN1k7_400x400.jpg" ,name: "TomasSoiffer", userName: "@tomassoiffer", initialIsFollowing : false },
    {imgLink: "https://pbs.twimg.com/profile_images/1282207374707761152/FipRN1k7_400x400.jpg" ,name: "TomasSoiffer", userName: "@tomassoiffer", initialIsFollowing : true }
  ]
    return (
    <div className="whoFollow">
      <h3>A quién seguir</h3>
      {
        users.map(({imgLink,name,userName,initialIsFollowing}) =>  (
        <TwitterFollowCard
       imgLink = {imgLink}
       name = {name}
       userName = {userName}
       initialIsFollowing = {initialIsFollowing}
       />
       )
        )
      }
      
    </div>
  );
}

export default App;
