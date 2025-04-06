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
                    <p>The exchange rates are always up-to-date and reliable. Perfect for my daily transactions!</p>
                    <small>Naomi Osaka</small>
                </div>
            </div>
            <div className='customer'>
                <div className="customer-img-container">
                    <img className="customer-img" src="./images/naomi2.jpg" />
                </div>
                <div className='customer__text'>
                    <p>I love how simple and intuitive the interface is. It makes conversions so much easier!</p>
                    <small>Oprah Winfrey</small>
                </div>
            </div>
            <div className='customer'>
                <div className="customer-img-container">
                    <img className="customer-img" src="./images/naomi24.jpg" />
                </div>
                <div className='customer__text'>
                    <p>This currency converter is incredibly fast and accurate. Highly recommend it to everyone!.</p>
                    <small>Margot Robbie</small>
                </div>
            </div>
        </div>
            {/* <div className="row" style={{backgroundColor: "#F9F9F9"}}>

            </div> */}
    </div>
  )
}

export default Reviews