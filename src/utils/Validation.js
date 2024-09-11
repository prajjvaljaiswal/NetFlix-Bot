import React from 'react'

export const Validation = (email,password,username) => {

    const isEmailVaild = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isUsernameValid = /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/.test(username) 

    if(!isEmailVaild){
        return "Email is not valid"
    }

    if(!isUsernameValid){
        return "Username is not valid"
    }

    if(!isPasswordValid){
        return "Password is not valid"
    }
    
    

    return null;
}
