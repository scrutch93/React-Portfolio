import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
    <>
    <Navbar/>
      
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                
                <img className="masthead-avatar mb-5" src="assets/img/Professional Photo.jpg (3).jpeg" alt="..." />
               
                <h1 className="masthead-heading text-uppercase mb-0">Hello!</h1>
                
                <div className="divider-custom divider-light">
                   
               
                    <div className="divider-custom-line"></div>
                </div>
               
                <p className="masthead-subheading font-weight-light mb-0">I am currently on a journey to become a full-stack Web Developer. Please check out my work below!</p>
            </div>
        </header>
        
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
               
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    
                    
                </div>
                
                <div className="row justify-content-center">


                <div class="d-flex flex-column flex-md-row justify-content-between mb-5 flex-wrap  ">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Work Day Planner</h3>
                        <div class="subheading mb-3"></div>
                        <a href="https://scrutch93.github.io/Work-Day-Scheduler/"></a>
                        <div class="box">
                            <iframe class="card"src="https://scrutch93.github.io/Work-Day-Scheduler/" width="500px" height="400px">
                            </iframe>
                        </div>
                        <p>This project is a planner that allows the user to plan and save personal events each hour
                            throughout the day.</p>
                    </div>
                    
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Password Generator</h3>
                        <div class="subheading mb-3"></div>
                        
                        <div class="box">
                            <iframe class="card" src="https://scrutch93.github.io/Password-Generator/" width="500px" height="400px">
                            </iframe>
                        </div>
                        <p>This project allow the user to choose what type of criteria they would like for a password
                            and generate one based off of their preferences.</p>
                    </div>
                    
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Weather Dashboard</h3>
                        <div class="subheading mb-3"></div>
                        
                        <div class="box">
                            <iframe class ="card"src="https://scrutch93.github.io/Weather-Dashboard/" width="500px" height="400px">
                            </iframe>
                        </div>
                        <p>This project is a planner that allows the user to plan and save personal events each hour
                            throughout the day.</p>
                    </div>
                    
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Code-Quiz</h3>
                        <div class="subheading mb-3"></div>
                       
                        <div class="box">
                            <iframe class="card" src="https://scrutch93.github.io/Code-Quiz/" width="500px" height="400px">
                            </iframe>
                        </div>
                        <p>.This project is a quiz that tests the user on their knowledge of basic javascript, html, and
                            css concepts.</p>
                    </div>
                    
                </div>
















                   
                </div>
            </div>
        </section>
      
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
               
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>
                
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download me-2"></i>
                        Free Download!
                    </a>
                </div>
            </div>
        </section>
        
        <section className="page-section" id="contact">
            <div className="container">
              
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                      
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                          
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                           
                            <div className="form-floating mb-3">
                  
                            <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{"height": "10rem"}} data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                          
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                           
                            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      
       
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
        
        <script src="js/scripts.js"></script>
       
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    <Footer/>
    
  </>);
}

export default App;