import "./TwitterFollowCard.css";
import { useState } from "react";

export function TwitterFollowCard({imgLink,name,userName,initialIsFollowing}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const classButton = isFollowing ? 'following' : 'unfollow'
  const handleClick = () => { 
    setIsFollowing(!isFollowing)
  }
  return (
    <div className="followCard">
      <img
        className="followCard-img"
        src={imgLink}
        alt="profileImage"
      />
      <span className="followCard-text">
        <h5>{name}</h5>
        <span>{userName}</span>
      </span>
      <button className={classButton} onClick={handleClick} >
        <span className="followingText">
        {text}
        </span> 
        <span className="stopFollow">
        Dejar de seguir
        </span> 
        </button>
    </div>
  );
}
