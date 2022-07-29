import React from 'react';
import "./Nav.css";

function Navbar() {
  return (
    <div class = 'nav'>
        <div class ='txtlogo'>
            <label>ToolM5</label>
        </div>

   
            <div class ='button'>
                <a href='/about' class ='items'>About Us</a>
                <a href='/services' class ='items'>Services</a>
                <a href='/' class ='items'>Contacts</a>
            </div>

            <div class ='icons'>
                <i class="fa-brands fa-facebook-f icon"></i>
                <i class="fa-brands fa-twitter icon"></i>
                <i class="fa-brands fa-instagram icon"></i>
            </div>
    
            <div class ='cta'>
                <input type="submit" value="Get Started" class ='getstarted'></input>
                <i class="fa-solid fa-circle-chevron-right iccoo"></i>
            </div>
      
    </div>
  )
}

export default Navbar;