import Link from 'next/link'
import React from 'react'

function Header({ data }) {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><Link href="/">{data.name || 'SIMRS'}</Link></h1>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" href="/">Home</Link></li>
                            <li><Link className="nav-link scrollto" href="/galeri">Galeri</Link></li>
                            <li><Link className="nav-link scrollto" href="/mitra">Mitra</Link></li>
                            <li><Link className="nav-link scrollto" href="/fasilitas">Fasilitas</Link></li>
                            <li><Link className="nav-link scrollto" href="/dokter">Doctors</Link></li>
                            {/* <li><a className="nav-link scrollto" href="/#contact">Contact</a></li> */}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    {/* <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a> */}

                </div>
            </header>
        </>
    )
}

export default Header
