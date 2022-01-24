import React, { } from 'react'

function Hero({ data }) {
    return (


        <section section id="hero" className="d-flex align-items-center" >
            <div className="container">
                <h1>Selamat Datang di Website RS Soebandi</h1>
                <h2>{'Rumah Sakit Soebandi Jember' || 'We are team of talented designers making websites with Bootstrap'}</h2>
                {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
            </div>
        </section >

    )
}

export default Hero
