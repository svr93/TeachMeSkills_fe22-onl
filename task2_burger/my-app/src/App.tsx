import React from "react";
import './App.css';

import { Button } from "./components/button/Button";
import { UserIcon } from "./components/userIcon/UserIcon";
import { Burger } from "./components/burger/Burger";
import { BurgerIsOpen } from "./components/burgerIsOpen/BurgerIsOpen";


function App() {
  return (
	  <div>
    <div className="header">
      <Burger onClick={() => console.log(123)}></Burger>
      <Button>{UserIcon}Username</Button>
    </div>
	  <div className="header headerIsOpen">
	  <BurgerIsOpen onClick={() => console.log(123)}></BurgerIsOpen>
	<div className="links">
	<a href="/">All Posts</a>
	<a href="/">My Posts</a>
	</div>
	</div>
	</div>
  );
}

export default App;
