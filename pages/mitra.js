import React, { useEffect, useState } from 'react'
import Gallery from '../components/gallery'
import Master from '../components/master'

function Mitra() {
    const [mitra, setMitra] = useState(null)

    useEffect(() => {
        async function fetchData() {

            let result = await fetch(process.env.API_URL + 'mitra');
            result = await result.json();
            setMitra(result);
            (document.getElementById('preloader')) && document.getElementById('preloader').remove();

        }
        fetchData();


    }, [])
    return (
        <Master>
            <div id='main' className='main'>
                {mitra !== null
                    ?
                    <Gallery title="mitra" desc="ini description" data={mitra} />
                    :
                    "null"
                }
            </div>
        </Master>
    )
}

export default Mitra
