import React from "react";
import "./loginform.js";

const LoginForm = () =>{

  return  <div classname = "cover">

    <div class="navbar">
        <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
        <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
        <a href="#"><i class="fa fa-fw fa-user"></i> About</a>
      </div>

      <img  src="https://images.unsplash.com/photo-1597865992644-549ae818bd01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"></img>
<form>
<h1>LOGIN</h1>
<input type = "text" placeholder ="username"/>


<input type = "password" placeholder = "password"/>


<input type = "text" placeholder ="member number"/>

<button type='button'onClick={buttonClicked}>submit</button>

</form>
    </div>
}

function buttonClicked(){
  alert("welcome  back to our golf club")};
export default LoginForm
