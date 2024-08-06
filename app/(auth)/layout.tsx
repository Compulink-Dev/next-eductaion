import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <main>{children}</main>
        </div>
    )
}

export default AuthLayout