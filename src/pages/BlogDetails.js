import React from 'react'
import './design.css'
import { footerText } from '../data'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
    return (
      <>
      <div className="container p-5">
        <div className="row ">
          <div class="col col-lg-2 col-md-3 sticky-fixed-top">
            Ascent Publication
          </div>
          <div className="col-md-8 col ">
            <div class="alert alert-dark text-center" role="alert">
              You have 2 free member-only stories left this month. Sign up for Medium and get an extra one
            </div>
              <h1>8 Toxic Habits You Should Get Rid of to Improve Your Quality of Life</h1>
              <h4 style={{fontWeight:"normal", color:"gray"}}>Avoiding them might change your whole life.</h4><br/>
                <i className="far fa-bookmark d-flex twitter-logo mx-2 fs-4 text-secondary"></i> 
                <i className="fab fa-facebook-square d-flex twitter-logo mx-2 fs-4 text-secondary"></i>
                <i className="fab fa-linkedin d-flex twitter-logo mx-2 fs-4 text-secondary"></i>
                <i className="fab fa-twitter d-flex twitter-logo mx-2 fs-4 text-secondary"></i><br/><br/>
                <img src="/assets/img/water.jpg" style={{height:450, width:700}} alt="loading......" /><br/><br/>
              <div className="details">
                <h4>When I first tapped into personal development, I tried to build as many positive habits as possible.</h4><br/>
                <h4>I set up a morning routine, started to meditate, went to the gym frequently, and read at least one book per week.</h4><br/>
                <h4>When I first tapped into personal development, I tried to build as many positive habits as possible.</h4><br/>
                <h4>When I first tapped into personal development, I tried to build as many positive habits as possible.</h4><br/>
                <h4>When I first tapped into personal development, I tried to build as many positive habits as possible.</h4><br/>
                <h4>The following habits are certainly not easy to give up, but once you let go of them, you won’t only feel relieved but also much more energized in your daily life.</h4><br/>
                <h4>When I first tapped into personal development, I tried to build as many positive habits as possible.</h4><br/>
                <span className="dot px-2 mx-auto">.</span><span className="dot px-2 mx-auto">.</span><span className="dot px-2 mx-auto">.</span>
              </div><br/>
                <div className="container small-box">
                  <h3>Sign Up For Founder's Journey</h3>
                  <p>By Ascent Publication</p>
                  <p>Follow Acsent founder Steve Campbell's journey to being an independent creator and company of one.<a href="#" className="text-dark">Take a look</a></p>
                  <input type="email" className="text-secondary" placeholder="Your email" id="email" name="email" /> &nbsp; <button className="button-click" type="button"><i class="far fa-envelope"></i> &nbsp; Get this newsletter</button><br/><br/>
                  <p className="small-note">By signing up, you will create a medium account if you don't already have one. Review our <a className="privacy" href="#">Privacy Policy</a> for more information about our privacy practices</p>
                </div>
          </div>
          <div className="col-md-2 col ">
            section 3
          </div>
          </div>
        </div>
        <div className="container-fluid">
          <footer className="footer">
            <div className="row ">
              {footerText.map(data =>(
                <div className="col-md-4 mb-3">
                  <div className="card card-css">
                    <div className="card-body d-flex">
                      <div className="ml-3">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.short_desc}</p>
                     </div>
                  </div>
                </div>
              </div>))}
            </div>
              <hr style={{color:"white"}}/>
              {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light"> */}
        <div className="container-fluid">
          <Link className="navbar-brand text-light justify-content-start" to="/">TechEnd Inc.</Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link link-tab" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-tab" href="#">Write</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-tab" href="#">Help</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-tab" href="#">Legal</a>
            </li>
          </ul>
        </div>
      {/* </nav> */}
          </footer>  
        </div>
      </>
    )
}

export default BlogDetails
