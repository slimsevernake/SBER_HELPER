import React, { useState } from 'react'
import LoginForm from './components/login'
import RegisterForm from './components/register'

export default function Auth() {
    const [formView, setformView] = useState('login')
    if (formView === 'login') {
        return <LoginForm />
    }
    return <RegisterForm />    
}
