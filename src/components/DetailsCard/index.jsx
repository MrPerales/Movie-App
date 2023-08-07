import Link from "next/link";
import React from "react";
import { PiStarThin } from "react-icons/pi"

function DetailCard({ movie }) {

    const styleSection = {
        width: '100%',
        height: 'auto',
        display: 'grid',
        'place-content': 'center',
        'grid-template-columns': 'repeat(auto-fit, minmax(300px,1fr))',
        gap: '10px',
        // 'outline': '1px solid',
        'padding':'0px 40px',
        'margin-top':'64px',
        'color':'#fff'
    }
    const styleFigure = {
        width: '350px',
        display: "flex",
        margin: '0 auto'
    }
    console.log(movie);

    return (
        <article style={styleSection}>

            <figure style={styleFigure}>
                <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} />
            </figure>

            <div className="grid grid-cols-1 place-content-center w-full">

                <div className="flex items-center justify-between w-3/4">
                    <h1 className="text-4xl">{movie?.title}</h1>
                    <span className="flex items-center gap-2 text-orange-300"><PiStarThin />{movie?.vote_average}</span>
                </div>
                <div className="w-3/4">
                    <ul className="flex gap-4 mb-6 mt-6">
                        {movie?.genres.map(category =>
                            <Link key={category.id} href={`/category${category.name}`}>
                                <li>
                                    {category.name}
                                </li>
                            </Link>
                        )}
                    </ul>

                    <h2 className="mb-5">ABOUT THE MOVIE</h2>
                    <p className="">{movie?.overview}</p>
                </div>
            </div>

        </article>
    )
}

export default DetailCard;