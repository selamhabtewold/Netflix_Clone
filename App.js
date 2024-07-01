import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import {auth} from "./firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //to keep the user logged in

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged( auth, userAuth =>{
      if (userAuth){
        //logged in
        dispatch(
          login ({
            uid: userAuth.uid,
            email: userAuth.email
        }))
      } else {
        //logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">

   <BrowserRouter>
   {!user ? (
    <LoginScreen />
  ): (
    <Routes>
    <Route path="/" element={<HomeScreen />}> </Route>
    <Route path="/profile" element={<ProfileScreen />}></Route>
  </Routes>
   )}
      
    </BrowserRouter>
    </div>
  );
}

export default App;
