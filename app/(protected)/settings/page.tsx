import React from 'react'
import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'


async function Settings() {

    const session = await auth()

    session?.user.id

    return (
        <div className='p-4'>
            {JSON.stringify(session)}
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
                className="">
                <Button
                    type='submit'
                >
                    Sign out
                </Button>
            </form>
        </div>
    )
}

export default Settings