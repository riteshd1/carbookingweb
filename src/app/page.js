import Image from "next/image";
import bannerImage1 from './assets/img/carousel-1.jpg';
import bannerImage2 from './assets/img/carousel-2.jpg';
import car1 from './/assets/img/car-1.png';

export default function Home() {
  return (
    <>
    {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
        {/* <!-- Spinner End --> */}
      {/* Topbar Start */}
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
          <div className="container">
              <div className="row gx-0 align-items-center" style={{height: "45px"}}>
                  <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                      <div className="d-flex flex-wrap">
                          <a href="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                          <a href="tel:+01234567890" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                          <a href="mailto:example@gmail.com" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
                      </div>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end">
                      <div className="d-flex align-items-center justify-content-end">
                          <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f"></i></a>
                          <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter"></i></a>
                          <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram"></i></a>
                          <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Topbar END */}
      {/* <!-- Navbar & Hero Start --> */}
        <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3"></i>Cental</h1>
                        {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Service</a>
                            <a href="blog.html" className="nav-item nav-link">Blog</a>
                            
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="feature.html" className="dropdown-item">Our Feature</a>
                                    <a href="cars.html" className="dropdown-item">Our Cars</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
        {/* <!-- Carousel Start --> */}
        <div className="header-carousel">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        {/* <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="First slide"/> */}
                        <Image src={bannerImage2} className="img-fluid w-100" alt="First slide" width={500} height={500} />
                        <div className="carousel-caption">
                            <div className="container py-4">
                                <div className="row g-5">
                                    <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="bg-secondary rounded p-5">
                                            <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Select Your Car type</option>
                                                            <option value="1">VW Golf VII</option>
                                                            <option value="2">Audi A1 S-Line</option>
                                                            <option value="3">Toyota Camry</option>
                                                            <option value="4">BMW 320 ModernLine</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-map-marker-alt"></span> <span className="ms-1">Pick Up</span>
                                                            </div>
                                                            <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-map-marker-alt"></span><span className="ms-1">Drop off</span>
                                                            </div>
                                                            <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Pick Up</span>
                                                            </div>
                                                            <input className="form-control" type="date" />
                                                            <select className="form-select ms-3" aria-label="Default select example">
                                                                <option selected>12:00AM</option>
                                                                <option value="1">1:00AM</option>
                                                                <option value="2">2:00AM</option>
                                                                <option value="3">3:00AM</option>
                                                                <option value="4">4:00AM</option>
                                                                <option value="5">5:00AM</option>
                                                                <option value="6">6:00AM</option>
                                                                <option value="7">7:00AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Drop off</span>
                                                            </div>
                                                            <input className="form-control" type="date" />
                                                            <select className="form-select ms-3" aria-label="Default select example">
                                                                <option selected>12:00AM</option>
                                                                <option value="1">1:00AM</option>
                                                                <option value="2">2:00AM</option>
                                                                <option value="3">3:00AM</option>
                                                                <option value="4">4:00AM</option>
                                                                <option value="5">5:00AM</option>
                                                                <option value="6">6:00AM</option>
                                                                <option value="7">7:00AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-light w-100 py-2">Book Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="text-start">
                                            <h1 className="display-5 text-white">Get 15% off your rental Plan your trip now</h1>
                                            <p>Treat yourself in USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="First slide"/> */}
                        <Image src={bannerImage1} className="img-fluid w-100" alt="First slide" width={500} height={500} />
                        <div className="carousel-caption">
                            <div className="container py-4">
                                <div className="row g-5">
                                    <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="bg-secondary rounded p-5">
                                            <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Select Your Car type</option>
                                                            <option value="1">VW Golf VII</option>
                                                            <option value="2">Audi A1 S-Line</option>
                                                            <option value="3">Toyota Camry</option>
                                                            <option value="4">BMW 320 ModernLine</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-map-marker-alt"></span><span className="ms-1">Pick Up</span>
                                                            </div>
                                                            <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-map-marker-alt"></span><span className="ms-1">Drop off</span>
                                                            </div>
                                                            <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Pick Up</span>
                                                            </div>
                                                            <input className="form-control" type="date" />
                                                            <select className="form-select ms-3" aria-label="Default select example">
                                                                <option selected>12:00AM</option>
                                                                <option value="1">1:00AM</option>
                                                                <option value="2">2:00AM</option>
                                                                <option value="3">3:00AM</option>
                                                                <option value="4">4:00AM</option>
                                                                <option value="5">5:00AM</option>
                                                                <option value="6">6:00AM</option>
                                                                <option value="7">7:00AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input-group">
                                                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Drop off</span>
                                                            </div>
                                                            <input className="form-control" type="date" />
                                                            <select className="form-select ms-3" aria-label="Default select example">
                                                                <option selected>12:00AM</option>
                                                                <option value="1">1:00AM</option>
                                                                <option value="2">2:00AM</option>
                                                                <option value="3">3:00AM</option>
                                                                <option value="4">4:00AM</option>
                                                                <option value="5">5:00AM</option>
                                                                <option value="6">6:00AM</option>
                                                                <option value="7">7:00AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-light w-100 py-2">Book Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="text-start">
                                            <h1 className="display-5 text-white">Get 15% off your rental! Choose Your Model </h1>
                                            <p>Treat yourself in USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Carousel End --> */}
        {/* <!-- Car categories Start --> */}
        <div className="container-fluid categories pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
                    <h1 className="display-5 text-capitalize mb-3">Vehicle <span className="text-primary">Categories</span></h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="categories-carousel owl-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="categories-item p-4">
                        <div className="categories-item-inner">
                            <div className="categories-img rounded-top">
                                {/* <img src="img/car-1.png" className="img-fluid w-100 rounded-top" alt=""> */}
                                <Image src={car1} className="img-fluid w-100 rounded-top" alt="First slide" width={250} height={100} />
                            </div>
                            <div className="categories-content rounded-bottom p-4">
                                <h4>Mercedes Benz R3</h4>
                                <div className="categories-review mb-4">
                                    <div className="me-3">4.5 Review</div>
                                    <div className="d-flex justify-content-center text-secondary">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star text-body"></i>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$99:00/Day</h4>
                                </div>
                                <div className="row gy-2 gx-0 text-center mb-4">
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="categories-item p-4">
                        <div className="categories-item-inner">
                            <div className="categories-img rounded-top">
                                {/* <img src="img/car-2.png" className="img-fluid w-100 rounded-top" alt=""> */}
                                <Image src={car1} className="img-fluid w-100 rounded-top" alt="First slide" width={250} height={100} />
                            </div>
                            <div className="categories-content rounded-bottom p-4">
                                <h4>Toyota Corolla Cross</h4>
                                <div className="categories-review mb-4">
                                    <div className="me-3">3.5 Review</div>
                                    <div className="d-flex justify-content-center text-secondary">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star text-body"></i>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$128:00/Day</h4>
                                </div>
                                <div className="row gy-2 gx-0 text-center mb-4">
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="categories-item p-4">
                        <div className="categories-item-inner">
                            <div className="categories-img rounded-top">
                                {/* <img src="img/car-3.png" className="img-fluid w-100 rounded-top" alt=""> */}
                                <Image src={car1} className="img-fluid w-100 rounded-top" alt="First slide" width={250} height={100} />
                            </div>
                            <div className="categories-content rounded-bottom p-4">
                                <h4>Tesla Model S Plaid</h4>
                                <div className="categories-review mb-4">
                                    <div className="me-3">3.8 Review</div>
                                    <div className="d-flex justify-content-center text-secondary">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star text-body"></i>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$170:00/Day</h4>
                                </div>
                                <div className="row gy-2 gx-0 text-center mb-4">
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="categories-item p-4">
                        <div className="categories-item-inner">
                            <div className="categories-img rounded-top">
                                {/* <img src="img/car-4.png" className="img-fluid w-100 rounded-top" alt=""> */}
                                <Image src={car1} className="img-fluid w-100 rounded-top" alt="First slide" width={250} height={100} />
                            </div>
                            <div className="categories-content rounded-bottom p-4">
                                <h4>Hyundai Kona Electric</h4>
                                <div className="categories-review mb-4">
                                    <div className="me-3">4.8 Review</div>
                                    <div className="d-flex justify-content-center text-secondary">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$187:00/Day</h4>
                                </div>
                                <div className="row gy-2 gx-0 text-center mb-4">
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Car categories End --> */}
     
    </>
  );
}
