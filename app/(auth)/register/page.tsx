import React, { Suspense } from 'react'
import RegisterForm from '../_components/register-form '

function Register() {
    return (
        <Suspense>
            <div>
                <RegisterForm />
            </div>
        </Suspense>
    )
}

export default Register