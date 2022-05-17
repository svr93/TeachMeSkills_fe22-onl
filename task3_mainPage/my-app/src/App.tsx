import React from "react";
import "./App.css";
import { Burger } from "./components/burger/Burger";
import { Button } from "./components/button/Button";

function App() {
  return (
    <div className="wrapper">
		 <div className="header">
			<Burger></Burger>
		 </div>
      <div className="container">
			<h1>Make your <br /> Blog <span>Online</span></h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae libero assumenda earum voluptatem numquam nesciunt illo consectetur perferendis doloribus veniam voluptates voluptate, nam aperiam, a delectus optio labore? Quod.</p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}

export default App;
