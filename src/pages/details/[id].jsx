import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API, API_Bearer } from "secret";
import DetailCard from "components/DetailsCard";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}
function MovieDetail() {

    const [movie, setMovie] = useState();
    const router = useRouter();
    const { query: { id } } = router;
    // console.log(router);
    // console.log(id);

    useEffect(() => {
        if (id) {
            fetch(`${API}/movie/${id}`, options)
                .then(resp => resp.json())
                .then(data => setMovie(data))
                .then(error => console.log(error))
        }
    }, [id])
    console.log(movie);
    return (
        <>
            <section style={{
                width: '100%', 
                display: 'grid',
                'place-content': 'center',
                'margin-top':'15px'
            }}>

                <DetailCard movie={movie} />
            </section>
        </>

    )
}

export default MovieDetail;