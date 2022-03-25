import React from "react"
import { Link } from "react-router-dom"

import "./login.css"
export default function Login(){


return (
    <div>
        <img className= "NetflixImg" src="./images/logo.png" alt="" />

            <div className="login">
                <form > 
                        <h1>Sign in</h1>
                        <div className="Email">
                            <input className="text" type="email" placeholder="Email or phone number" />
                        </div>
                        <div className="Mdp">
                            <input className="text" type="password" placeholder="Password" />
                        </div>
                        <Link to="/homepage">
                        <button type="submit" className="btnSignIn">
                             Sign in
                        </button>
                        </Link>  
                        <div>
                        <input className="checkbox" type="checkbox"  />
                    
                        <label className="rememberMe">remember me ? </label>
                        <label className="needHelp">need help ?</label>
                        </div>
                </form>
            </div>
    
    </div>
    )
}