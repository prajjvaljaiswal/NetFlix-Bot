import React, { useEffect } from 'react'
import { Login } from './Login'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom';


function Body() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName} = user;
        dispatch(addUser({uid : uid, email : email, displayName: displayName}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        // ...
      }
    });
  },[])

  return (
    <div className=''>
        <Login/>
    </div>
  )
}

export default Body