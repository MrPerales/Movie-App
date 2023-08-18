import { useRouter } from "next/router";
import React from "react";
import styles from '../Styles/notFoundPage.module.css'

function NotFound() {
    const router=useRouter();

    return (
        <>
            <div className={styles.container_notFoundPage}>
                <div className={styles.notFoundPage_message}> 
                    <div className={styles.title}>
                        <h1>Oops!</h1>
                        <p>We can't seem to find the page you're looking for</p>

                    </div>
                    <div className={styles.text_404}>
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