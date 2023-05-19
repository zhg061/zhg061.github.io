import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './MyCarousel.css' 


const MyCarousel = () => {
    return (
        <div 
        // style={{ width: 'auto', height: '100%' }}
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
                onClick={()=>{window.location.href = '/resume';}}
                >
                          {/* Image source: Unsplash (https://learn.g2.com/hubfs/IT%20Portfolio%20Management@2x.png) */}
                    <img 
                    src="./resume.png" 
                    alt="Resume" 
                    style={{ width: "60%", height: "auto" }}
                    />
                    <div
                        style={{ 
                            width: "20%", 
                            color: "white", 
                            fontSize: '2rem', 
                            marginTop: '1%'
                        }}
                    >Resume</div>
                </div>
                <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "gray",
                    alignItems: "center"
                }}
                onClick={()=>{window.location.href = '/about';}}
                >
                    <img 
                    src="./lucyfullbodypicture.JPG" 
                    alt="About" 
                    height="10%"
                    style={{ width: "25%", height: "auto" }}
                    />
                    <div
                        style={{ 
                            width: "20%", 
                            color: "white", 
                            fontSize: '2rem', 
                            marginTop: '1%'
                        }}
                    >About Me</div>
                </div>
            </Carousel>
        </div>
    );
};

export default MyCarousel;