import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import BlogDetails from './pages/BlogDetails'

const Routes = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog-details/:id" component={BlogDetails} />
          <Redirect from="*" to="/home" />
        </Switch>
      </BrowserRouter>
    )
}

export default Routes
