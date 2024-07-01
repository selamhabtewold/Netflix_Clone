import React from "react";
import './ProfileScreen.css';
import Nav from "../Nav";
import { useSelector } from "react-redux";
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase";


function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit  Profile</h1>
                <div className="profileScreen_info">
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePqvjrMR2bJt1B2e6bNQ6RS2n0q9ZN4e1UA&s' 
                    alt=''
                />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen-plans">
                        <h3>Plans</h3>
                        <button 
                         onClick={()=>auth.signOut()} 
                         className="profileScreen-signOut"
                         >Sign Out
                         </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;