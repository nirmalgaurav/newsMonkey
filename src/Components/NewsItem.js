import React from 'react'

function NewsItem(props) {
  return <div className="my-3">
      <div className="card">
        <img src={props.imageUrl === null ? "https://c.ndtvimg.com/2023-01/6jj8fq7c_narendra-modi-bjp-national-executive-_625x300_16_January_23.jpg" : props.imageUrl} className="card-img-top" alt='...' />
        <div className="card-body">
          <h5 className="card-title">
            {props.title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "80%", zIndex: "1" }}>
              {props.source}
            </span>
          </h5>
          <p className="card-text">
            {props.description}...
          </p>
          <p className="card-text">
            {" "}<small className="text-muted">
              by {props.author} on {new Date(props.date).toGMTString()}
            </small>{" "}
          </p>
          <a href={props.newsUrl} className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>;
}

export default NewsItem