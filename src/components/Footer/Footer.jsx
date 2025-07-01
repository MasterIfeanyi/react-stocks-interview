import "./Footer.css";
import { Link } from 'react-router-dom';

const Foter = () => {


    return (
        <footer>
            <div className="container">
                <div className="row gy-4">

                    <div className="col-lg-4">
                        <img src="./Mustard logo new.png" alt="" style={{width: "160px"}} />                
                    </div>


                    
                    <div className="col-lg-2">
                        <h4>Company</h4>
                        <ul>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">Terms and Condition</Link></li>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Contact Info</h4>
                        <ul>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">Phone: +999-000-9090</Link></li>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">hi@mustard.ng</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 offset-lg-1">
                        <h4>Socials</h4>
                        <ul className="social-links ms-auto">
                            <li className="nav-item">
                                <i className="ri-twitter-fill icons"></i>
                            </li>
                            <li className="nav-item">
                                <i className="ri-linkedin-fill icons"></i>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Foter