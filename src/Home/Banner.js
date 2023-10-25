import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import "./Banner.css";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Data Scientist", "Data Analyst"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random()*100);
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return ()=>{ clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? 
        fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <div className="center-container">
                <div className="banner-left">
                    <h1>{`Hi, I'm a `}<span className="wrap">{text}</span></h1>
                    {/* <p>Proficient Frontend Engineer and Web Developer with more than 3 years of experience building complex, responsive web designs, creating simple and engaging user interfaces, optimizing frontend code for top performance and scalability, and building reusable codes, components and libraries for future use.</p> */}
                    <p>Accomplished Data Analyst with over 5 years of experience in data mining, creating visualizations to support data explainability and predictive statistical analysis. By analyzing business requirements and stakeholders' needs, bridging the gap between business objectives and technical solutions, fostering effective communication and alignment within the organization.</p>
                    {/* <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button> */}
                </div>
                <div className="banner-right">
                    <img 
                        src="./picture.png" 
                        alt="About" 
                        className="banner-img"
                    />
                </div>
            </div>
        </section>
    )
}