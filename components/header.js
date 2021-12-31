import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><Link href="/">SIMRS APP</Link></h1>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" href="/">Home</Link></li>
                            <li><Link className="nav-link scrollto" href="/berita">Berita</Link></li>
                            <li><Link className="nav-link scrollto" href="#services">Services</Link></li>
                            <li><Link className="nav-link scrollto" href="#departments">Departments</Link></li>
                            <li><Link className="nav-link scrollto" href="/dokter">Doctors</Link></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><Link href="/galeri">Galeri</Link></li>
                                    <li><Link href="/mitra">Mitra</Link></li>
                                    <li><Link href="/fasilitas">Fasilitas</Link></li>

                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

                </div>
            </header>
        </>
    )
}

export default Header
