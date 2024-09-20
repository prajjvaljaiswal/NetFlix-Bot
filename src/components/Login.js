import React, { useState, useRef } from 'react'
import Header from './Header'
import { Validation } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase.js';

export const Login = () => {

    const [isLogin,setIsLogin] = useState(true)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [errMessage,setErrMessage] = useState(null) 

    function toggleSignInForm(){
        setIsLogin(!isLogin);
    }

    function handelButtonClick(){
        const message = Validation(email?.current?.value,password?.current?.value,name?.current?.value)
        setErrMessage(message)
        if(message) return;
        if(!isLogin){
            //sign up process
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // userCredential.user.displayName = name?.current?.value
                //console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMessage(errorCode+": "+errMessage)
                // ..
            });
        }
        else{
            //sign in process
            signInWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMessage(errorCode+"\n"+errMessage)
            });
        }
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg'
            alt='Bg' />
        </div>
        
        <div className='absolute bg-black w-full h-full bg-opacity-40'></div>
        
        <form onSubmit={(e)=>{return e.preventDefault()}} className='absolute bg-black my-36 w-3/12 p-12 mx-auto right-0 left-0 text-white
        bg-opacity-80 rounded-lg z-10'>

            <h1 className='text-3xl font-bold py-4'>{isLogin?'Sign-in':"Sign-up"}</h1>
            <input ref={email} type='text' placeholder='Email' className='p-2 my-4 w-full bg-black bg-opacity-50'/>
            {
                (!isLogin && <input ref={name} type='text' placeholder='Username' className='p-2 my-4 w-full bg-black bg-opacity-50'/>)
            }
            <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full bg-black bg-opacity-50'/>
            
            <p className='py-2 text-red-700 font-bold text-lg'>
                {errMessage}
            </p>

            <button className='p-4 my-6 w-full bg-red-600 rounded-lg' onClick={handelButtonClick}>
                {isLogin?'Sign-in':"Sign-up"}
            </button>

            <h1 className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isLogin?"New to Netflix? Sign up now":"Alredy Signed up? Sign in now"}
            </h1>

        </form>
    </div>
  )
}
