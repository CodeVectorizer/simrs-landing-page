import React, { useEffect } from 'react'

function Doctor(props) {
    return (
        <section id="doctors" className="doctors">
            <div className="container">

                <div className="section-title">
                    <h2>Doctors</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">

                    {props.data === null ?
                        'Tidak Ada Dokter'
                        :
                        props.data.map(item => {
                            return (<div className="col-lg-6" key={item.id}>
                                <div className="member d-flex align-items-start">
                                    <div className="pic">
                                        {item.avatar === null ?
                                            <img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt="" />
                                            :
                                            <img src={item.avatar} className="img-fluid" alt="" />
                                        }
                                    </div>
                                    <div className="member-info">
                                        <h4>{item.name}</h4>
                                        <span>{item.speciality.speciality}</span>
                                        <p>{item.description}</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}

                </div>

            </div>
        </section>
    )
}

export default Doctor
