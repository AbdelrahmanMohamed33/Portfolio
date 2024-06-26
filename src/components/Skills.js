import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/4226432_2243848.jpg"

export const Skills = () => {
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
    <div className="container">
      <div className="row">
         <div className="col-12">
             <div className="skill-bx wow zoomIn">
               <h2>Skills</h2>
             <p>Let me present my skills related to my university life and external courses .<br></br></p>
    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
      <div className="item">
          <div class="row d-flex justify-content-center mt-100 ">
             <div class="col-md-6">
              <div class="progress color93">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">93%</div>
             </div>
           </div>
        </div>
                <h5>HTML</h5>
            </div>

            <div className="item">
            <div class="row d-flex justify-content-center mt-100">
           <div class="col-md-6">
              <div class="progress color93">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">93%</div>
             </div>
           </div>
        </div>
                <h5>CSS</h5>
            </div>
            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color85">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">85%</div>
             </div>
           </div>
        </div>
                <h5>HTML5</h5>
            </div>

     <div className="item">
         <div class="row d-flex justify-content-center mt-100">
           <div class="col-md-6">
              <div class="progress color85">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">85%</div>
             </div>
           </div>
        </div>
                <h5>Bootstrap</h5>
            </div>
            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color85">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">85%</div>
             </div>
           </div>
        </div>
                <h5>CSS3</h5>
            </div>

     <div className="item">
         <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
                 <div class="progress color90">
                    <span class="progress-left">
                     <span class="progress-bar"></span>
                    </span>
           <span class="progress-right">
             <span class="progress-bar"></span>
                 </span>
                 <div class="progress-value">90%</div>
               </div>   
           </div>
       </div>
                <h5>JavaScript</h5>
            </div>
            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color85">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">85%</div>
             </div>
           </div>
        </div>
                <h5>OOP using JS&C++</h5>
            </div>
            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color80">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">80%</div>
             </div>
           </div>
        </div>
                <h5>TypeScript</h5>
            </div>
            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color85">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">85%</div>
             </div>
           </div>
        </div>
                <h5>jQuery</h5>
            </div>

            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color85">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">85%</div>
             </div>
           </div>
        </div>
                <h5>React JS</h5>
            </div>
            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color80">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">80%</div>
             </div>
           </div>
        </div>
                <h5>Redux JS</h5>
            </div>

            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color75">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">75%</div>
             </div>
           </div>
        </div>
                <h5>Operating System</h5>
            </div>
            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color90">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">90%</div>
             </div>
           </div>
        </div>
                <h5>C++</h5>
            </div>

            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color90">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">90%</div>
             </div>
           </div>
        </div>
                <h5>Problem Solving</h5>
            </div>

            <div className="item">
          <div class="row d-flex justify-content-center mt-100">
             <div class="col-md-6">
              <div class="progress color85">
                 <span class="progress-left">
                   <span class="progress-bar"></span>
                    </span>
                     <span class="progress-right">
                        <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">85%</div>
             </div>
           </div>
        </div>
                <h5>Git & Github</h5>
            </div>

               </Carousel>
                  </div>
              </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}