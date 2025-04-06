import $ from 'jquery'; // Import jQuery
import "./Reviews.css";
import { useEffect } from 'react';

const Reviews = () => {

    useEffect(() => {
        // Initialize Owl Carousel
        $('#review-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }, []);


  return (
    
    <div className="container">
        <div className="owl-carousel owl-theme" id='review-carousel' style={{backgroundColor: "#212529"}}>
            <div className='customer'>
                <div className="customer-img-container">
                    <img className="customer-img" src="./images/naomi13.jpg" />
                </div>
                <div className='customer__text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, libero culpa? Architecto.</p>
                    <small>Sade Adu</small>
                </div>
            </div>
            <div className='customer'>
                <div className="customer-img-container">
                    <img className="customer-img" src="./images/naomi2.jpg" />
                </div>
                <div className='customer__text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, libero culpa? Architecto.</p>
                    <small>Sade Adu</small>
                </div>
            </div>
            <div className='customer'>
                <div className="customer-img-container">
                    <img className="customer-img" src="./images/naomi24.jpg" />
                </div>
                <div className='customer__text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, libero culpa? Architecto.</p>
                    <small>Sade Adu</small>
                </div>
            </div>
        </div>
            {/* <div className="row" style={{backgroundColor: "#F9F9F9"}}>

            </div> */}
    </div>
  )
}

export default Reviews