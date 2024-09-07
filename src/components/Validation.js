import React from 'react'

export const Validation = (email,password) => {

    const isEmailVaild = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailVaild){
        return "Email is not valid"
    }

    if(!isPasswordValid){
        return "Password is not valid"
    }

    return null;
}
