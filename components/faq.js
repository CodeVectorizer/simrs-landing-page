import React from 'react'

function Faq(props) {

    return (
        <section id="faq" className="faq section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>

                <div className="faq-list">
                    <ul>
                        {props.data.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <li data-aos="fade-up" key={index}>
                                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target={`#faq-list-${index}`}>{item.question}<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id={`faq-list-${index}`} className="collapse show" data-bs-parent=".faq-list">
                                            <p>
                                                {item.answer}
                                            </p>
                                        </div>
                                    </li>
                                )
                            }
                            return (
                                <li data-aos="fade-up" data-aos-delay={`${index}00`} key={index}>
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target={`#faq-list-${index}`}>{item.question}<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id={`faq-list-${index}`} className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            {item.answer}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Faq
