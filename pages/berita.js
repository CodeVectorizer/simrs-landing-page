import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Master from '../components/master'

function Berita() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        async function fetchData() {

            let result = await fetch(process.env.API_URL + 'post');
            result = await result.json();
            setPost(result);
            (document.getElementById('preloader')) && document.getElementById('preloader').remove();

        }
        fetchData();


    }, [])

    return (
        <Master>
            <div id='main' className='main'>
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2>Berita</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>
                    <div className='container'>

                        {post !== null ?
                            post.map(item => {
                                return (
                                    <div className="row py-4" key={item.id}>
                                        <div className="col-lg-2 text-center order-2 order-lg-1">
                                            {/* <Image src={item.image} height="100" width="100" /> */}
                                            <img src={item.image} width={100} height={100} />
                                        </div>
                                        <div className="col-lg-8 details order-1 order-lg-2">
                                            <h3>{item.title.length < 30 ? item.title : item.title.substring(0, 40) + '...'}</h3>
                                            <span className='link-category'><Link href={`/category/${item.category.category}`} className="">{item.category.category}</Link></span>
                                            <p>{item.content.substring(50) + '...'}
                                            </p>
                                            <Link href={`/berita/${item.id}`}><span className='btn btn-outline-primary btn-sm'>Read More</span></Link>
                                        </div>

                                    </div>
                                )
                            })
                            :
                            'Null'
                        }

                    </div>
                </section>
            </div>
        </Master>
    )
}

export default Berita
