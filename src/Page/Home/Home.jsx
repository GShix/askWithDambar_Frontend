import React from 'react'
import './Home.css'
import dambar from './dambar.png'
const Home = () => {
  return (
    <div>
    <div className="main">
        <div className="nav">
            <h2 style={{color: "#d15feb"}}>?<span style={{color:"#3484e5"}}><span style={{fontSize: "36px"}}>with</span>Dambar</span></h2>
            <div className="navbar">
                <h4>Home</h4>
                <h4>Blog</h4>
                <h4>Projects</h4>
                <h4>Work with Me</h4>
                <button>Log In</button>
            </div>
        </div>
        <div className="content">
            <div className="left">
                <h1 style={{color:'#d15feb', fontFamily:'inter'}}>Whatever your mind thinks, ask with <span style={{color:'#3484e5'}}>Dambar...</span>
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis at officia similique atque perspiciatis quaerat explicabo veniam mollitia tenetur qui!</p>
                <button>Get Started</button>
            </div>
            <div className="right">
                <img src={dambar}/>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home