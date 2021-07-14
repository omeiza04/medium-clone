import React from 'react'
import { topicsData } from '../data'
import './styles.css'

const DiscoverMore = () => {
    return (
      <>
        <h6>TRENDING ON MEDIUM</h6>
        <div className="d-inline">
          {topicsData.map((e, i) => <span key={i} class="badge discover-badge text-dark">{e}</span>)}
        </div>
      </>
    )
}

export default DiscoverMore
