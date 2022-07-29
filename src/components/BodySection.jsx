import React from 'react'
import './hero.css'

function BodySection() {
  return (
    <div class='container'>

        <div class='body'>

            <div class='subhead'>
                <label>Create your</label>
            </div>
            <div class='herotext'>
                <label>T-Shirt Design</label>
            </div>
            <div class ='btn'>
                <input type="submit" value="Get Started" class ='btn-start'></input>
            </div>
            <div class='lines'>
                <u><p>View how it works</p></u>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
  )
}

export default BodySection