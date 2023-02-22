import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

function App() {
  return (
    <div className="whoFollow">
      <h3>A quién seguir</h3>
      <TwitterFollowCard />
    </div>
  );
}

export default App;
