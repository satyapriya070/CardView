import React from 'react'
import moment from "moment";

const Article = (props) => {
  return (
    <article className="card">
    <a href="#">
      <div className="one">
        <div className="thumbnail">
          <img src={props.data.thumbnail.large} alt="banner" />

          <div class="black" onClick={(e) => props.getData(e, props.data)}>
            Learn more
          </div>
        </div>
      </div>
      <div className="card-content">
        <h3>{props.data.title}</h3>
        <p>{props.data.content}</p>
      </div>
    </a>
    <div className="lastCard">
      <div>{props.data.author.name}</div>
      <div>{moment(props.data.date).format("MMM d, YYYY")}</div>
    </div>
  </article>
  )
}

export default Article