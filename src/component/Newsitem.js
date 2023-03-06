import React, { Component } from 'react'

export class newsitem extends Component {

  render() {
    let { title, description, imgurl, newsurl, author, date, source } = this.props;
    return (
      <div className='my-4'>
       
        <div className="card" style={{ width: "18rem" }}>

 <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span class=" badge rounded-pill bg-danger ">  {source}   </span>
        </div>

          <img src={!imgurl ?  "https://cdnp0.stackassets.com/7fa6375cb2b5fa75c591cb62a8462841d026e2ba/store/c428153a9a06742a6788affc023c32010fb0142005eff71aab29c433bbaf/sale_320841_primary_image.jpg" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-danger'>By {!author ? "UnKnown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="blank" className="btn btn-warning">Go somewhere</a>
          </div>
        </div>

      </div>
    )
  }
}

export default newsitem
