import React from 'react'
import CardWrapper from './card-wrapper'
import { FaExclamation } from 'react-icons/fa'

function ErrorCard() {
    return (
        <CardWrapper
            headerLabel='Oops! Something went wrong'
            backButtonHref='/login'
            backButtonLabel='Back to login '
        >
            <div className="w-full flex justify-center items-center">
                <FaExclamation className='text-red-700' />
            </div>
        </CardWrapper>
    )
}

export default ErrorCard