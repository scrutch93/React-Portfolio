import React from "react";

function Projects(){

        return (
           
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
   )


    }




export default Projects;