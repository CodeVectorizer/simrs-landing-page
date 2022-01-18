import React, { useEffect, useState } from 'react'
import Gallery from '../components/gallery'
import Master from '../components/master'

function Fasilitas() {
    const [fasilitas, setFasilitas] = useState(null)

    useEffect(() => {
        async function fetchData() {

            let result = await fetch(process.env.API_URL + 'facility');
            result = await result.json();
            setFasilitas(result);
            (document.getElementById('preloader')) && document.getElementById('preloader').remove();

        }
        fetchData();
        // document.getElementById('preloader').remove();


    }, [])
    return (
        <Master>
            <div id='main' className='main'>
                {fasilitas !== null
                    ?
                    <Gallery title="fasilitas" desc="ini description" data={fasilitas} />
                    :
                    "null"
                }
            </div>
        </Master>
    )
}

export default Fasilitas
