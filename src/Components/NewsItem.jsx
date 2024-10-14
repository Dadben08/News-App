import image from "../assets/latestnews.jpg"

const NewsItem = ({title, description, url, src}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"335px"}}>
  <img src={src?src:image} style={{height:"200px", width:"100%"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Some quick example text to build on the card title and make up the bulk of the card's content"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem