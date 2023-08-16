import Link from "next/link";
import { PiStarThin } from "react-icons/pi"
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


function TopMovies({ movies }) {


    const topMovies = movies.filter(movie => movie.vote_average >= 8);
    console.log(topMovies);
    const urlImages = 'https://image.tmdb.org/t/p/original'

    // slice
    let isResponsive;
    if (typeof window !== 'undefined') {

        // let mql = window.matchMedia("(max-width: 600px)");
        isResponsive = window.screen.availWidth >= 700 ? "2" : "1";

        console.log(window.screen.availWidth);
    }

    return (
        <section style={{ width: '100%', marginTop: '20px' }}>


            <swiper-container

                slides-per-view={isResponsive}
                // grid-rows="10"
                // speed="500" 
                loop="true"
                css-mode="true"
                navigation="true"
                pagination="true"
                scrollbar="true"
            >

                {topMovies?.map((movie) =>


                    <swiper-slide key={movie.id}>

                        <div>

                            <div
                                className="bg-black/[0.3]"
                                style={{
                                    margin: '50px',
                                    borderRadius: '10px',
                                    // width:'40%',
                                    color: 'white',
                                    padding: '10px 15px'
                                }}
                            >

                                <img
                                    src={`${urlImages}${movie.backdrop_path}`}
                                    alt={movie.title}

                                    style={{ borderRadius: '10px', }}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        alignContent: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '25px',
                                        marginTop: '10px'
                                    }}
                                >
                                    <h1
                                        style={{ fontSize: '20px', }}
                                    >
                                        {movie.title}
                                    </h1>
                                    <span className="flex items-center gap-2 text-orange-300"><PiStarThin />{movie?.vote_average}</span>
                                </div>


                                <Link href={`/details/${movie.id}?${movie.title}`}>
                                    <button
                                        style={{

                                            width: '150px',
                                            height: '40px',
                                            border: '2px solid #0066cc',
                                            borderRadius: '10px',
                                            fontSize: '18px'
                                            // borderRadius:'10px',
                                        }}
                                    >
                                        Learn more
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </swiper-slide>



                )}
            </swiper-container>

        </section >
    )
}
export default TopMovies;