import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Master from '../components/master';

function Dokter() {
    const [doctors, setdoctors] = useState(null)
    useEffect(() => {
        async function fetchData() {

            let result = await fetch(process.env.API_URL + 'doctor');
            result = await result.json();
            setdoctors(result);
            (document.getElementById('preloader')) && document.getElementById('preloader').remove();

        }
        fetchData();



    }, [])
    return (
        <Master>
            <div id='main' className='main'>

                <section id="doctors" className="doctors">
                    <div className="container">

                        <div className="section-title">
                            <h2>Dokter</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                            {doctors === null ?
                                'Tidak Ada Dokter'
                                :
                                doctors.map(item => {
                                    return (<div className="col-lg-6" key={item.id}>
                                        <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                {item.avatar === null ?
                                                    <Image src={'assets/img/doctors/doctors-1.jpg'} width={60} height={60} loader={() => item.image} className="img-fluid" alt="" />
                                                    :
                                                    <Image src={item.avatar} loader={() => item.image} className="img-fluid" alt="" />
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
            </div>
        </Master>
    )
}

export default Dokter
