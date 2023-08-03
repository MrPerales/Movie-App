import React from "react";

function Card({ poster, title }) {
    const urlImages = 'https://image.tmdb.org/t/p/w300'

    // console.log(data);
    return (
        <>

            <div className="movie-container w-40 inline-block cursor-pointer mr-3 " >
                <img
                    src={`${urlImages}/${poster}`}
                    alt={title}
                    className="movie-img rounded-xl"
                />
            </div>


        </>
    )
}
export default Card