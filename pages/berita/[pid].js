import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Master from '../../components/master'

function Berita() {
    const router = useRouter()
    const [post, setPost] = useState(null)
    const { pid } = router.query


    useEffect(() => {
        pid && fetchData();
    }, [pid])
    async function fetchData() {
        let result = await fetch(`http://127.0.0.1:8000/api/v1/post/${pid}`);
        result = await result.json();
        setPost(result);
        (document.getElementById('preloader')) && document.getElementById('preloader').remove();

    }

    return (
        <Master>
            <div id='main' className='main'>
                {post !== null ?
                    <section id="contact" className="contact">
                        <div className="container mt-4">

                            <div className="news-title font-weight-bold">
                                <h2 className='fw-bold'>{post.title}</h2>
                                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                                <span className='link-category'><Link href={`/category/${post.category.category}`} className="">{post.category.category}</Link></span>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row py-4'>
                                <img src={post.image} layout='fill' />
                                <div className='news-content'>
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                            </div>



                        </div>
                    </section>
                    :
                    'Null'
                }
            </div >
        </Master >
    )
}

export default Berita

