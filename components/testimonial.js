import Image from 'next/image'
import React from 'react'

function Testimonial(props) {
    return (
        <>
            <section id="testimonials" className="testimonials">
                <div className="container">

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">

                        <div className="swiper-wrapper">
                            {
                                props.data.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <div className="testimonial-wrap">
                                                <div className="testimonial-item">
                                                    <Image src={'/' + item.photo} width={60} height={60} className="testimonial-img" alt="" />

                                                    <h3>{item.name}</h3>
                                                    <h4>{item.job}</h4>
                                                    <p>
                                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                        {item.testimonial}
                                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Testimonial

