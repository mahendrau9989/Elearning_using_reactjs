import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import e1 from './images/elearn1.png';
import e2 from './images/elearn2.png';
import e3 from './images/elearn3.png';
import logo from './images/logo2.jpg';
import './index.css';
function Home(){
    return(
        <>
            <div>
                <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="im1"
                        src={e1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Learn & Grow</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="im1"
                        src={e2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Start Learning Today</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="im1"
                        src={e3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Learn Anytime</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div>
                    <center>
                    <h3 id="aa">Learn Coding</h3>
                    <img id="aa" src="https://cdn-icons-png.flaticon.com/512/2490/2490421.png" width="100px" height="100px"  alt=""/>
                    </center>                
                </div>
                <div>
                    <center>
                    <img id="aa" src="https://cdn-icons-png.flaticon.com/512/3073/3073484.png" width="100px" height="100px"  alt=""/>
                    <h3 id="aa">Learn Anytime</h3>
                    </center>
                </div>
                <div>
                    <center>
                    <h3 id="aa">Free Learning</h3>
                    <img id="aa" src="https://cdn-icons-png.flaticon.com/512/891/891438.png" width="100px" height="100px"  alt=""/>
                    </center>
                </div>
                <div>
                    <center>
                    <img id="aa" src="https://cdn-icons-png.flaticon.com/512/3206/3206042.png" width="100px" height="100px"  alt=""/>
                    <h3 id="aa">Become Expert</h3>
                    </center>
                </div>
                <div id="branding">
                    <img id="a2" src={logo} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Home;