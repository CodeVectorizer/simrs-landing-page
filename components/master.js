import React, { useEffect } from 'react'
import Head from 'next/head'
import Footer from '../components/footer';
import Header from '../components/header';
import Topbar from '../components/topbar.';
import Hero from '../components/hero';

function Master(props) {
    return (

        <>

            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>Medilab Bootstrap Template - Index</title>
                <meta content="" name="description" />
                <meta content="" name="keywords" />


                <link href="/assets/img/favicon.png" rel="icon" />
                <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />


                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />


                <link href="/assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
                <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
                <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

                <link href="/assets/css/style.css" rel="stylesheet" />

            </Head>

            <div>


                <Topbar />


                <Header />

                {/* <Hero /> */}

                {props.children}


                <Footer />

                <div id="preloader"></div>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


                <script src="/assets/vendor/purecounter/purecounter.js"></script>
                <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="/assets/vendor/php-email-form/validate.js"></script>


                <script src="/assets/js/main.js"></script>

            </div>

        </>

    )
}

export default Master
