import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel as CarouselBootstrap } from 'react-responsive-carousel';
import PieChart from './PieChart';

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>lorem</p>
                            <CarouselBootstrap responsive={responsive} infinite={true} className="skills-slider">
                                <div>
                                    {/* <img src={} alt="Image"/> */}
                                    <h5>Web Development</h5>
                                    <PieChart/>
                                </div>
                                <div>
                                    {/* <img src={} alt="Image"/> */}
                                    <h5>Web Development1</h5>
                                </div>
                                <div>
                                    {/* <img src={} alt="Image"/> */}
                                    <h5>Web Development2</h5>
                                </div>
                            </CarouselBootstrap>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}