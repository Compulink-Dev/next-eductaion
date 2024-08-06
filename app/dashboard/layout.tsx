import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=''>
            <nav className="py-4 bg-black text-white px-2">
                <p className="">Navbar</p>
            </nav>
            <main className="">
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout