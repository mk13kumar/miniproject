 import React from "react";
 const Hero=()=>{
    return(
        <main className="hero">
          <div className="left">

              <div>
                 <h1>Step into Style: </h1>
                 <p>Ultimate Winter Footwear, Sandals: Summer Style and Comfort, and The Work Shoe:  
                 </p>
              </div>
              <div className="hero-btn">
                 <button className="h-btn"> shop Now</button>
                 <button className="h-btn"> Category</button>
              </div>
              <div className="hero-f">
                 <p> Also Available</p>
                 <img className="img-f" src="/images/download.png" alt="" />
                 <img className="img-f" src="/images/download (1).jpeg" alt="" />
              </div>
            
          </div>
          <div  className="right"> 
                   <img  className="s-img" src="/images/download.jpeg" alt="" />
          </div>
        </main>
    );
 }
 export default Hero;
