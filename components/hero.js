import React, { } from 'react'

function Hero({ data }) {
    return (
        <section section id="hero" className="d-flex align-items-center" >
            <div className="container">
                <h1>Selamat Datang di Website {data.name || 'SIMRS'}</h1>
                <h2>{data.description || 'We are team of talented designers making websites with Bootstrap'}</h2>
                {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
            </div>
        </section >

    )
}

export default Hero
