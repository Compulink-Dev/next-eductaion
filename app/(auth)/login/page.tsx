import React from 'react'
import LoginForm from '../_components/login-form'
import { Suspense } from 'react'

function Login() {
    return (
        <Suspense>
            <div className=''>
                <LoginForm />
            </div>
        </Suspense>
    )
}

export default Login