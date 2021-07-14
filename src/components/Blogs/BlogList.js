import React from 'react'
import { blogData } from '../../data'

const BlogList = () => {
    return (
      <div className="container mt-5 p-5">
        <span className="d-flex">
          <i class="fas fa-angle-double-up" /> &nbsp; &nbsp;
          <h6>TRENDING ON MEDIUM</h6>
        </span>
        <div className="row">
          {blogData.map(data =>(
          <div className="col-md-4 mb-3" key={data.id}>
            <div className="card">
              <div className="card-body d-flex">
                <h2>{data.id}</h2>
                <div className="ml-3">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.short_desc.slice(0, 20)}...</p>
                </div>
              </div>
            </div>
          </div>))}
        </div>
      </div>
    )
}

export default BlogList
