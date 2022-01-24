import Image from 'next/image';
import React, { useEffect } from 'react'

function Gallery(props) {
    useEffect(() => {
        const glightbox = GLightbox({
            selector: '.glightbox'
        });

        /**
         * Initiate Gallery Lightbox 
         */
        const galelryLightbox = GLightbox({
            selector: '.galelry-lightbox'
        });

    }, [props])
    return (
        <section id={props.title} className="gallery">
            <div className="container">

                <div className="section-title">
                    <h2 className="text-capitalize">{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row no-gutters">
                    {props.data === null ?
                        'Tidak Ada Dokter'
                        :
                        props.data.map(item => {
                            return (
                                <div className="col-lg-3 col-md-4 text-center" key={item.id}>
                                    <div className="gallery-item">
                                        <a href={item.image} className="galelry-lightbox">
                                            <img src={item.image} width={60} height={60} alt="" className="img-fluid" />
                                        </a>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}

                </div>

            </div>
        </section>

    )
}

export default Gallery
