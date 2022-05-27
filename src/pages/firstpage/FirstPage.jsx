import "./firstpage.css";
import logo from '../../logo.svg';
import 'cc/assets/fontawesome/js/all.min.js';
import 'cc/assets/plugins/flickity/flickity.min.css';
import 'cc/assets/css/theme.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useRef } from "react";
import { Link } from "react-router-dom";


export default function FirstPage() {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    return (
        <>
            <div className="firstpage-style">
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                    <Container class="container-fluid">
                        <Navbar.Brand>
                            <img src={logo} width="40" />
                        </Navbar.Brand>

                        <div class="collapse navbar-collapse" id="navbarsExample03">
                            <div class="navbar-nav me-auto mb-2 mb-sm-0">
                                <Nav.Link>Functions</Nav.Link>
                                <Nav.Link>Download</Nav.Link>

                            </div>
                            <form class="d-flex">
                                <input class="form-control me-sm-2" type="text" placeholder="Type here" aria-label="Search" />
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </Container>
                </Navbar>
                <div class="hero-section">
                    <div class="container">
                        <div class="row figure-holder">
                            <div class="col-12 col-md-6 pt-3 pt-md-4">
                                <div class="site-headline font-weight-bold mt-lg-5 pt-lg-5 left mb-4" style={{ fontSize: 45, fontWeight: 700 }}>Hello Health</div>
                                <div class="site-tagline mb-4 left" style={{ fontWeight: 400, color: '#8c8c8c' }}>A health assistant to help you reduce the number of night time meals, develop regular eating habits, and achieve a healthy life!</div>
                                <div class="left"><button type="primary" class="btn btn-success" onClick={scrollToBottom}>TRY IT NOW!</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="benefits-section py-5">
                    <div class="container py-lg-5">
                        <h3 class="mb-5 text-center font-weight-bold">Manage your eating habits effectively with Hello Health</h3>
                        <div class="row">
                            <div class="item col-12 col-lg-4">
                                <div class="item-inner text-center p-3 p-lg-5">
                                    <img class="mb-3" src="icon-target.svg" width="80" alt />
                                    <h3 style={{ fontSize: 30, fontWeight: 900 }}>Record Diet</h3>
                                    <div style={{ fontSize: 25, fontWeight: 300 }}>Daily meal times will be reminded and recorded, and users can view healthy eating trends through weekly reports. </div>
                                </div>
                            </div>
                            <div class="item col-12 col-lg-4">
                                <div class="item-inner text-center p-3 p-lg-5">
                                    <img class="mb-3" src="icon-rocket.svg" width="80" alt />
                                    <h3 style={{ fontSize: 30, fontWeight: 900 }}>Easy to Use</h3>
                                    <div style={{ fontSize: 25, fontWeight: 300 }}>Simply plan your meal times to experience the various features and get detailed health data and recommendations. </div>
                                </div>
                            </div>
                            <div class="item col-12 col-lg-4">
                                <div class="item-inner text-center p-3 p-lg-5">
                                    <img class="mb-3" src="icon-cogs.svg" width="80" alt />
                                    <h3 style={{ fontSize: 30, fontWeight: 900 }}>Good Guidance</h3>
                                    <div style={{ fontSize: 25, fontWeight: 300 }}>By booking an appointment with a professional nutrition specialist, you can have a quick online consultation to solve health problems. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="features-section py-5">
                    <div class="container py-lg-5 position-relative">
                        <a id="function"></a>
                        <h3 class="mb-3 text-center font-weight-bold section-heading">Function Highlights</h3>
                        <div class="row pt-5 mb-5">

                            <div class="col-12 col-md-6 col-xl-5 offset-xl-1 d-none d-md-block">
                                <img class="product-figure product-figure-1 img-fluid" src="1.png" width="450" alt />
                            </div>

                            <div class="col-12 col-md-6 col-xl-5 pr-xl-3 pt-md-3 centerflex">
                                <div class="card rounded border-0 shadow-lg  mb-5">
                                    <div class="card-body p-4">
                                        <h5 class="card-title left" style={{ fontSize: 30 }}>Weekly Events</h5>
                                        <div class="card-text left" style={{ fontSize: 20, fontWeight: 350, color: '#8c8c8c' }}>Take part in the popular weekly event and clock in your daily healthy eating routine for a chance to win prizes. </div>
                                    </div>
                                </div>

                                <div class="card rounded border-0 shadow-lg mb-5">
                                    <div class="card-body p-4">
                                        <h5 class="card-title left" style={{ fontSize: 30 }}>Hot Posts</h5>
                                        <div class="card-text left" style={{ fontSize: 20, fontWeight: 350, color: '#8c8c8c' }}>Browse the popular posts, see what other users are doing with their healthy lives and interact with those you are interested in.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-5 order-md-2 pr-xl-3 d-none d-md-block">
                                <img class="product-figure product-figure-2 img-fluid" src="2.png" width="450" alt />
                            </div>

                            <div class="col-12 col-md-6 col-xl-5 order-md-1 offset-xl-1 pt-xl-5 centerflex">
                                <div class="card rounded border-0 shadow-lg  mb-5">
                                    <div class="card-body p-4">
                                        <h5 class="card-title left" style={{ fontSize: 30 }}>Promotion</h5>
                                        <div class="card-text left" style={{ fontSize: 20, fontWeight: 350, color: '#8c8c8c' }}>A number of promotions will be available on a regular basis to encourage you to actively engage with nutrition experts to improve your diet and health status. </div>
                                    </div>
                                </div>

                                <div class="card rounded border-0 shadow-lg mb-5">
                                    <div class="card-body p-4">
                                        <h5 class="card-title left" style={{ fontSize: 30 }}>Top Experts</h5>
                                        <div class="card-text left" style={{ fontSize: 20, fontWeight: 350, color: '#8c8c8c' }}>Professional nutrition experts can be booked to talk to you and help you improve your current problems and get a healthy life.</div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
                <div class="bg-success mb-3 cta-section py-5 text-center">
                    <div class="container">
                        <a id="screens"></a>
                        <h3 class="text-white font-weight-bold mb-3">Ready to turn your visitors to app users?</h3>
                        <div class="text-white mx-auto single-col-max-width section-intro">Try Hello Health free today. Our App is available to broswer.</div>
                        <Link to='qn'><a class="btn theme-btn theme-btn-ghost theme-btn-on-bg mt-4">Try Free Web Version</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
