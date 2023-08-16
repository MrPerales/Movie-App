import { useRouter } from "next/router";
import React from "react";


function NotFound() {
    const router=useRouter();

    return (
        <>
            <div className="container_notFoundPage">
                <div className="notFoundPage_message"> 
                    <div className="title">
                        <h1>Oops!</h1>
                        <p>We can't seem to find the page you're looking for</p>

                    </div>
                    <div className="text_404">
                        <p>Error code: 404</p>
                        <button
                            onClick={() => router.push('/')}
                        >
                            Go to Home
                        </button>
                    </div>
                </div>
                <figure>
                    <img 
                        src="https://www.travelappeal.com/hubfs/trials/images/broken-robot.png"
                        className=""
                    />
                </figure>
            </div>


        </>
    );
}

export default NotFound 