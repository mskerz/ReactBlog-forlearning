import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'


function Layout({ children }) {
    return (
        <div>
            {/* Navbar  */}
            <Navbar />

            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Layout