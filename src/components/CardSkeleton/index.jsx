import React from "react";

function CardSkeleton() {

    return (
        <>

            <div 
                style={{
                    display:"flex",
                    flexBasis:'column',
                    backgroundColor:'#fff',
                    boxShadow:'0 5px 10px 0 rgba(#000, .15)',
                    borderRadius:'10px',
                    overflow:'hidden',
                    margin:'1rem'
                }}
                className="movie-container w-40 h-64 inline-block mr-3"
            >
                
                <div  
                    style={{
                        // skeleton
                        backgroundColor:'#e2e5e7',
                        backgroundImage:'linear-gradient( 90deg,rgba(#fff, 0),rgba(#fff, 0.5),rgba(#fff, 0))',
                        backgroundSize:' 40px 100%',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'left -40px top 0',
                        animation:'shine 1s ease infinite',
                    }}
                className="movie-img rounded-xl"
                >
                
                </div>
            </div>


        </>
    )
}
export default CardSkeleton;