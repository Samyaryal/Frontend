import React from 'react';

const Resturant = ({resturant}) => {
  let {blurhash, description, image, name} = resturant;
  return (
    <section className = "col-lg-4 col-md-4 col-lg-4 ">
    <div className="resturant-image"> 
    <img src={image} alt={name}/>
    </div>
    <div className="resturant-info">
    <h2 className="Resturant-title">{name}</h2>
    <p className="Resturant-description">{description} </p>
    <p className="Resturant-blurhash">Blurhash Data : <br/> {blurhash}</p>
    </div>
    </section>
  )
}

export default Resturant;