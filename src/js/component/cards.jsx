import React from "react";
// import { ProgressPlugin } from "webpack";

const Cards = ({CardTitle}) => {
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
  <img src="https://media.istockphoto.com/id/1370813651/photo/surfboard-and-palm-tree-on-beach-in-summer.webp?b=1&s=612x612&w=0&k=20&c=Cyx4by7iQxrda02ZxCjHmcnXIPz3ZdjszeTA6Uy6_BY=" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{CardTitle}</h5>
    <p className="card-text">Welcome to our React webpage!!!</p>
    <a href="#" className="btn btn-primary">Visit New Page</a>
  </div>
</div>
        </>
    )
};

export default Cards;