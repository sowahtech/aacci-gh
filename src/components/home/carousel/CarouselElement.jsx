import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'

const CarouselElement = () => {
  return (
      <div>
            <Carousel className = 'carousel'>
                <Carousel.Item interval = {80}>
                
                    <img
                    style={{width: "100%", height:510, objectFit: 'cover'}}
                    // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix15.jpeg')}
                    id= 'image-height'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

            
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix14.jpeg')}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width: "100%", height:510, objectFit: 'cover'}}
                    // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix13.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix6.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix7.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix9.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                    //    className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix10.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                {/* <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix11.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix12.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix2.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                {/* </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix3.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix4.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width: "100%", height:510, objectFit: 'cover'}}
                    // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix5.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix8.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                    // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix9.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: "100%", height:510, objectFit: 'cover'}}
                        // className="d-block w-100"
                    src= {require('../../../assets/images/aacci-gh-pix1.jpeg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
  )
}

export default CarouselElement
