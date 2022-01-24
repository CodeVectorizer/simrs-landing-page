import React, { useEffect, useState, useContext } from 'react'
import Doctor from '../components/doctor';
import Faq from '../components/faq';
import Gallery from '../components/gallery';
import Hero from '../components/hero';
import Master from '../components/master';
import Speciality from '../components/speciality';
import Testimonial from '../components/testimonial';


function Test() {
    const [doctors, setDoctors] = useState(null)
    const [gallery, setGallery] = useState(null)
    const [faq, setFaq] = useState(null)
    const [testimonial, setTestimonial] = useState(null)


    const [information, setInformation] = useState({
        name: 'Rumah Sakit Soebandi',
        bg_image: '',
        address: 'Jember Regency',
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.513082013941!2d113.71329061438058!3d-8.150947583898898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695ab770e0f3f%3A0xa6bf9ddece889812!2sRumah%20Sakit%20Umum%20Daerah%20(RSUD)%20dr.%20Soebandi!5e0!3m2!1sen!2sid!4v1643000405890!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        number_phone: '08513123123123',
        description: 'DrSoebandi Jember'
    })


    useEffect(() => {
        async function fecthData() {
            let result2 = await fetch(process.env.API_URL + 'doctor');
            result2 = await result2.json();
            setDoctors(result2);

            let result = await fetch(process.env.API_URL + 'gallery');
            result = await result.json();
            setGallery(result);

            // let result3 = await fetch(process.env.API_URL+'gallery');
            // result3 = await result3.json();
            // setGallery(result3);

            let result4 = await fetch(process.env.API_URL + 'faq');
            result4 = await result4.json();
            setFaq(result4);

            let result5 = await fetch(process.env.API_URL + 'testimonial');
            result5 = await result5.json();
            setTestimonial(result5);

            let result10 = await fetch(process.env.API_URL + 'information');
            result10 = await result10.json();
            setInformation(result10[0]);

            (document.getElementById('preloader')) && document.getElementById('preloader').remove();

            const glightbox = GLightbox({
                selector: '.glightbox'
            });


            /**
 * Testimonials slider
 */
            new Swiper('.testimonials-slider', {
                speed: 600,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },

                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }

        fecthData();



    }, [])
    return (
        <Master>
            <main id="main">
                <section id="hero" className="d-flex align-items-center" >
                    <div className="container">
                        <h1>Selamat Datang di Website RS Soebandi</h1>
                        <h2>'Rumah Sakit Soebandi Jember'</h2>
                    </div>
                </section >

                {/* <section id="why-us" className="why-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose Medilab?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                    </p>
                                    <div className="text-center">
                                        <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-receipt"></i>
                                                <h4>Corporis voluptates sit</h4>
                                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-cube-alt"></i>
                                                <h4>Ullamco laboris ladore pan</h4>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-images"></i>
                                                <h4>Labore consequatur</h4>
                                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" style={{ background: `url("data:image/png;base64,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")` }}>
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
                            </div>

                            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-gift"></i></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-atom"></i></div>
                                    <h4 className="title"><a href="">Dine Pad</a></h4>
                                    <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section> */}


                <section id="counts" className="counts">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="fas fa-user-md"></i>
                                    <span data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Doctors</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="far fa-hospital"></i>
                                    <span data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Departments</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-flask"></i>
                                    <span data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Research Labs</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-award"></i>
                                    <span data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Awards</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                {/* <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                    <h4><a href="">Lorem Ipsum</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-pills"></i></div>
                                    <h4><a href="">Sed ut perspiciatis</a></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-user"></i></div>
                                    <h4><a href="">Magni Dolores</a></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-dna"></i></div>
                                    <h4><a href="">Nemo Enim</a></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-wheelchair"></i></div>
                                    <h4><a href="">Dele cardo</a></h4>
                                    <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical"></i></div>
                                    <h4><a href="">Divera don</a></h4>
                                    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="appointment" className="appointment section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="department" id="department" className="form-select">
                                        <option value="">Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="doctor" id="doctor" className="form-select">
                                        <option value="">Select Doctor</option>
                                        <option value="Doctor 1">Doctor 1</option>
                                        <option value="Doctor 2">Doctor 2</option>
                                        <option value="Doctor 3">Doctor 3</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </form>

                    </div>
                </section> */}

                {/* <Speciality /> */}


                <Doctor data={doctors} />

                {faq !== null
                    ?
                    <Faq data={faq} title="Faq" desc="descrioption" />
                    :
                    'null'
                }


                {testimonial !== null
                    ?
                    <Testimonial data={testimonial} title="Testimonial" desc="descrioption" />
                    :
                    'null'
                }






                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2>Kontak</h2>
                            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                        </div>
                    </div>

                    {/* <div>
                        <iframe style={{ border: '0', width: '100%', height: '350px', }} src='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.513082013941!2d113.71329061438058!3d-8.150947583898898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695ab770e0f3f%3A0xa6bf9ddece889812!2sRumah%20Sakit%20Umum%20Daerah%20(RSUD)%20dr.%20Soebandi!5e0!3m2!1sen!2sid!4v1643000405890!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' loading="lazy" frameBorder="0" allowFullScreen></iframe>
                    </div> */}

                    <div className="container">
                        <div className="row mt-5">

                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>{information.address || ''}</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>{information.email || ''}</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>{information.number_phone || ''}</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">

                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </Master >


    )
}

export default Test
