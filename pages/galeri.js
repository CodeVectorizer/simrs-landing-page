import React, { useEffect, useState } from 'react'
import Gallery from '../components/gallery'
import Master from '../components/master'

function Galeri() {
    const [gallery, setGallery] = useState(null)

    useEffect(() => {
        async function fetchData() {

            let result = await fetch(process.env.API_URL + 'gallery');
            result = await result.json();
            setGallery(result);
            (document.getElementById('preloader')) && document.getElementById('preloader').remove();

        }
        fetchData();
    }, [])
    return (
        <Master>
            <div id='main' className='main'>
                {gallery !== null
                    ?
                    <Gallery title="galeri" desc="ini description" data={gallery} />
                    :
                    "null"
                }
            </div>
        </Master>
    )
}

export default Galeri
