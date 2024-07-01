import React, { useState } from "react";
import './LoginScreen.css';
import SignInScreen from "./SignInScreen";


function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                    className="loginScreenLogo"
                    src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt=""></img>
                <button  onClick={()=> setSignIn(true)}
                className="loginScreen_btn">Sign in</button>

                <div className="loginScreen_gradient"></div>
               
                <div className="loginScreen__body">
                {signIn ? (
                    <SignInScreen />
                ): (
                    <>
                    <h1> Unlimited Films, TV programmes and more</h1>
                    <h2> Watch anywhere. Cancel at any time.</h2>
                    <h3> Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address"></input>
                            <button  onClick={()=> setSignIn(true)}
                            className="loginScreen_getStartedbtn">GET STARTED</button>
                        </form>
                    </div>
                    </>
                    
                )}
            
                </div>
            </div>
        </div>
    )

}

export default LoginScreen;