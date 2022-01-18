import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from '../components/footer';
import Header from '../components/header';
import Topbar from '../components/topbar.';
import Hero from '../components/hero';
import Script from 'next/script';
// import {  } from 'react/cjs/react.production.min';

function Master(props) {
    const [information, setInformation] = useState({
        name: null,
        bg_image: null,
        address: null,
        location: null,
        number_phone: null,
        description: null
    })
    useEffect(() => {
        fecthData();
        async function fecthData() {
            let result2 = await fetch(process.env.API_URL + 'information');
            result2 = await result2.json();
            setInformation(result2[0]);
        }
    }, []);

    // const InformationContext = createContext();
    return (
        <>

            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>{information.name || 'SIMRS'}</title>
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

                <Topbar data={information} />

                <Header data={information} />

                {props.children}


                <Footer data={information} />

                <div id="preloader"></div>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


                <Script src="/assets/vendor/purecounter/purecounter.js"></Script>
                <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
                <Script src="/assets/vendor/glightbox/js/glightbox.min.js"></Script>
                <Script src="/assets/vendor/swiper/swiper-bundle.min.js"></Script>
                <Script src="/assets/vendor/php-email-form/validate.js"></Script>


                <Script src="/assets/js/main.js"></Script>

            </div>
        </>

    )
}

export default Master
