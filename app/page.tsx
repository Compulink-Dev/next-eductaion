import { Button } from '@/components/ui/button'
import React from 'react'
import LoginButton from './(auth)/_components/login-button'

function Home() {
  return (
    <main
      className='h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className="space-y-6 text-white">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">Auth</h1>
        <p className="">Enter your credentials and login</p>
        <div className="">
          <LoginButton mode="redirect">
            <Button variant={'secondary'}>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}

export default Home