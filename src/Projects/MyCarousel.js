import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './MyCarousel.css' 


const MyCarousel = () => {
    return (
        <div 
        style={{ marginBottom: 50 }}
        >
            <Carousel 
                showArrows={true}
                autoPlay={true}
                autoFocus={true}
                infiniteLoop={true}
                emulateTouch={true}
                interval={3000}
                transitionTime={500}
                showThumbs={false}
                slidesToShow={1}
            >
                <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "gray",
                    alignItems: "center"
                }}
                onClick={()=> window.open("https://search-artist.netlify.app/", "_blank")}
                >
                    <img 
                    src="./artsysearch.webp" 
                    alt="About" 
                    height="10%"
                    style={{ width: "56%", height: "auto" }}
                    />
                    <div
                        style={{ 
                            width: "20%", 
                            color: "white", 
                            fontSize: '1.5rem', 
                            marginTop: '1%'
                        }}
                    >Artist Search Using Angular and NodeJS</div>
                </div>
                <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "gray",
                    alignItems: "center"
                }}
                onClick={()=> window.open("https://cookingblog-lk8m.onrender.com/", "_blank")}
                >
                    <img 
                    src="./cooking_blog.png" 
                    alt="About" 
                    height="10%"
                    style={{ width: "40%", height: "auto", margin: "2%"  }}
                    />
                    <div
                        style={{ 
                            width: "20%", 
                            color: "white", 
                            fontSize: '1.5rem', 
                            marginTop: '1%'
                        }}
                    >Cooking Blog Using Node.js and MongoDB</div>
                </div>
            </Carousel>
        </div>
    );
};

export default MyCarousel;