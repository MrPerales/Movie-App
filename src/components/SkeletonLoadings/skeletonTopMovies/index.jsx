import React from "react";
import styles from '../../../Styles/skeleton.module.css'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function SkeletonTopMovies(){
    let isResponsive;
    if (typeof window !== 'undefined') {

        // let mql = window.matchMedia("(max-width: 600px)");
        isResponsive = window.screen.availWidth >= 700 ? "2" : "1";

        // console.log(window.screen.availWidth);
    }
    const loadingArray =[1,2]

    return(
        <section className={styles.skeletonSectionTopMovies}>


        <swiper-container

            slides-per-view={isResponsive}
            // grid-rows="10"
            // speed="500" 
            loop="true"
            css-mode="true"
            navigation="true"
            pagination="true"
            // scrollbar="true"
        >

            {loadingArray.map((index) =>


                <swiper-slide key={index.id}>

                    <div >

                        <div className={styles.skeletonTopMovieContainer}>
                            <div className={styles.skeletonTopMovieContainerImg}>
                                {/* img */}
                            </div>
                       
                            <div className={styles.skeletonTitleTopMovies}>
                                <h1></h1>
                                <p></p>
                            </div>


                                <button className={styles.skeletonLearnMoreButton}>
                                </button>
                        </div>
                    </div>

                </swiper-slide>



            )}
        </swiper-container>

    </section >



    )
}

export default SkeletonTopMovies;