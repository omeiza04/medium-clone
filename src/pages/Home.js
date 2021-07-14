import React from 'react'
import Banner from '../components/Banner'
import BlogList from '../components/Blogs/BlogList'
import DiscoverMore from '../components/DiscoverMore'
import LatestBlog from '../components/Blogs/LatestBlog'

const Home = () => {
    return (
        <>
          <Banner />
          <BlogList />
          <hr className="my-2" />
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <LatestBlog />
              </div>
              <div className="col-md-4">
                <DiscoverMore />
              </div>
            </div>
          </div>
        </>
    )
}

export default Home
