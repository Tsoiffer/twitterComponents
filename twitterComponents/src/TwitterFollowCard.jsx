import "./TwitterFollowCard.css";

export function TwitterFollowCard() {
  const user = { name: "TomasSoiffer", userName: "@tomassoiffer" };
  return (
    <div className="followCard">
      <img
        className="followCard-img"
        src="https://pbs.twimg.com/profile_images/1282207374707761152/FipRN1k7_400x400.jpg"
        alt="profileImage"
      />
      <span className="followCard-text">
        <h5>{user.name}</h5>
        <span>{user.userName}</span>
      </span>
      <button>Seguir</button>
    </div>
  );
}
