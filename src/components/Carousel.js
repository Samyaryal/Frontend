import React from 'react';

const Carousel = () =>{
  return (
    <div id="SimpleCarouselExample" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
    <li data-target="#ImageCarouselCSS" data-slide-to="0" className="active"></li>
    <li data-target="#ImageCarouselCSS" data-slide-to="1"></li>
    <li data-target="#ImageCarouselCSS" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://source.unsplash.com/fk4tiMlDFF0/900x600/" className="d-block w-100" alt="tiniest puppy" />
    </div>
    <div className="carousel-item">
    <img src="https://source.unsplash.com/TzjMd7i5WQI/900x600/" className="d-block w-100" alt="fun" />
    </div>
    <div className="carousel-item">
    <img src="https://source.unsplash.com/-Go4DH2pZbc/900x600/" className="d-block w-100" alt="yeah" />
    </div>
    </div>
    </div>
  )
}

export default Carousel;