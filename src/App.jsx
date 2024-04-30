import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import portfolio from '../src/portfolio.png'
import github from '../src/github.png'
import calendly from '../src/calendly.png'
function App() {
  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5"> Welcome to my Page</h1>
      <div className="container">
  <div className="row">
    <div className="col-sm"><div class="card" >
        
  <div class="card-body">
    <img class="card-img-top" 
    src={portfolio}
    alt="Card image cap" 
    height="200px"/>
    <h5 class="card-title">Portfolio website</h5>
    <p class="card-text">This is my Portfolio website showcasing my tech stack and some projects.</p>
    <a href="https://portfolio-2023-ykdev.netlify.app/" class="btn btn-primary">Click ME!</a>
    
  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <div class="card-body">
   <img class="card-img-top" 
    src={calendly} 
    alt="Card image cap" 
    height="200px"/>
    <h5 class="card-title"> Let's Meet !</h5>
    <p class="card-text">Let's have a quick small talk.</p>
    <a href="https://calendly.com/yashrajkanake2002/" class="btn btn-primary">Schedule a meeting</a>

  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <div class="card-body">
  <img class="card-img-top" 
    src={github} 
    alt="Card image cap" 
    height="200px"/>
    <h5 class="card-title">My Github</h5>
    <p class="card-text">This is my github account comparising of all my repository.</p>
    <a href="https://github.com/Yashrajgk" class="btn btn-primary">See my work</a>

  </div>
</div></div>
  </div>
</div>
    </React.Fragment>
  );
}

export default App;
