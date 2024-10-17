import React, { useEffect, useState } from 'react'
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
// import * from "../assets/images/";

function Header() {
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch() 
  const navigate = useNavigate()
  const handelSignOut = ()=>{
    signOut(auth)
    .then(() => {
      
      // Sign-out successful.
      navigate('/')

    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user) => {
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
    return () => unsub();
  },[])
  
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from from-black z-10 w-full flex justify-between'>
        <img className='w-64 ml-20' 
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        alt='logo'/>
        { user &&
          <button onClick={handelSignOut} className='font-bold text-white'>[sign-out]</button>
        }
    </div>
  )
}

export default Header;