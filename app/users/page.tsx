import React from 'react'

import { auth } from '@/auth'




async function Users() {

    const session = await auth()

    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}

export default Users