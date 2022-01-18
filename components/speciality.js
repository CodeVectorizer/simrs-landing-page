import React, { useEffect, useState } from 'react'


function Speciality() {
    const [speciality, setSpeciliaty] = useState(null)

    useEffect(() => {
        async function fetchData() {

            let result = await fetch(process.env.API_URL + 'speciality');
            result = await result.json();
            setSpeciliaty(result);
        }
        fetchData();


    }, [])
    return (
        <section id="departments" className="departments">
            <div className="container">

                <div className="section-title">
                    <h2>Spesialis</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            {
                                speciality !== null
                                    ?
                                    speciality.map((item, index) => {

                                        return (
                                            <li className="nav-item" key={index}>
                                                <a className={`nav-link ${index === 0 && 'active show'}`} show data-bs-toggle="tab" href={`#tab-${index}`}>{item.speciality}</a>
                                            </li>

                                        )
                                    })
                                    :
                                    'Null'
                            }
                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">

                            {
                                speciality !== null
                                    ?
                                    speciality.map((item, index) => {
                                        return (
                                            <div className={`tab-pane ${index === 0 && 'active show'}`} id={`tab-${index}`} key={index}>
                                                <div className="row">
                                                    <div className="col-lg-12 details order-2 order-lg-1">
                                                        <h3>{item.speciality}</h3>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    'Null'
                            }

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Speciality
