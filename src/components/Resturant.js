import React from 'react';


const Resturant = ({resturant}) => {
  let {blurhash, description, image, name} = resturant; // resturant is array of object
  
  console.log("blurhash", resturant)

  return (
    
    <section className = "col-lg-4 col-md-4 col-sm-6 col-xs-6 mx-auto Resturant ">
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


// return (
//   <section className = "col-lg-4 col-md-4 col-lg-4 ">
//   <div className="resturant-image"> 
//   <img src={image} alt={name}/>
//   </div>
//   <div className="resturant-info">
//   <h2 className="Resturant-title">{name}</h2>
//   <p className="Resturant-description">{description} </p>
//   <p className="Resturant-blurhash">Blurhash Data : <br/> {blurhash}</p>
//   </div>
//   </section>
// )