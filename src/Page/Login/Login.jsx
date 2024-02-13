import './Login.css'

import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className="logo">
            <h2 style={{color: "#d15feb"}}>?<span style={{color:"#3484e5"}}><span style={{fontSize: "20px"}}>with</span>Dambar</span></h2>
            <h3>Login to Ask with Dambar</h3>
        </div>
        <div className="main">
            <div className="link">
                <button><i class="ri-facebook-circle-fill"></i> Use Facebook</button>
                <button><i class="ri-google-fill"></i> Use Google</button><br/>
            </div>
            <form>
                <label htmlFor='Email'>Email:</label>
                    <input type='email' name='email' value='' placeholder='e.g.dambar@gmail.com' /> <br/>
                <label htmlFor='Password'>Password</label>
                    <input type='password' name='password' value='' placeholder='Enter your password' /><br/>
                <button className='sign'>Login</button><br/>
                <div className="reset">
                    <span>Forgot your password?</span><br/>
                </div>
            </form>
            <div className="signup">
                <p>Don't have an account?</p><button>Sign Up</button><br/>
            </div>
        </div>
    </div>
  )
}

export default Login