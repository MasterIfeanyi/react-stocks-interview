import "./Footer.css";
import { Link } from 'react-router-dom';

const Foter = () => {

    const today = new Date();


    return (
        // footer
        <footer>
            <div className="container">
                <div className="row gy-4">

                    <div className="col-lg-4">
                        <img src="./images/Mustard logo new.png" alt="" style={{width: "160px"}} />                
                    </div>


                    <div className="col-lg-2 offset-lg-1">
                        <h4>Services</h4>
                        <ul>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">Invest</Link></li>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">Rewards</Link></li>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Usage</h4>
                        <ul>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Contact Info</h4>
                        <ul>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">live chat active from 9am - 5pm</Link></li>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">hi@mustard.ng</Link></li>
                            <li className="nav-item"><Link to="/" className="no-underline nav-link">Press</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Foter