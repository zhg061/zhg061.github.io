import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './MyCarousel.css' 


const MyCarousel = () => {
    const [featuredPosts, setProjects] = useState([]);
    useEffect(() => {
        async function fetchData() {
        await axios.get(
                // 'http://localhost:5000/projects'
                'https://lucyporfoliobackend-a266447ba206.herokuapp.com/projects'
            ).then(
                res=>{
                    setProjects(res.data);
                }
            )
        }    
        fetchData();
    }, []); 
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
            {featuredPosts.map((post) => (            
                <div 
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "gray",
                        alignItems: "center"
                    }}
                    onClick={()=> window.open(post.link, "_blank")}
                >
                    <img 
                    src={post.image} 
                    alt="About" 
                    style={{ width: "50%", height: "50%" }}
                    />
                    <div
                        style={{ 
                            width: "20%", 
                            color: "white", 
                            fontSize: '1.5rem', 
                            marginTop: '1%'
                        }}
                    >{post.title}</div>
                </div>
            ))}
            </Carousel>
        </div>
    );
};

export default MyCarousel;