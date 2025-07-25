

const Nav = () => {


  return (
    // NavBar
    <nav className="navbar bg-white slow navbar-expand-md sticky-top divider">
        <div className="container-fluid px-5">

            <a href="#" className="navbar-brand">
                <img src="./images/Mustard logo new.png" className="img-fluid" alt="" style={{width: "150px"}} />
            </a>


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav mx-auto">          
                    <li className="nav-item">
                        <a href="#footer" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#footer" className="nav-link">Invest</a>
                    </li>
                    <li className="nav-item">
                        <a href="#footer" className="nav-link">Rewards</a>
                    </li>
                    <li className="nav-item">
                        <a href="#footer" className="nav-link">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a href="#footer" className="nav-link">Ambassador</a>
                    </li>
                </ul>


                <a href="#login" className=""><i className="ri ri-lock-unlock-fill"></i> Login</a>
                <a href="#get-started" className="btn btn-brand ms-3">Getting Started <i style={{verticalAlign: "inherit"}} className="ri ri-arrow-right-line"></i></a>
            </div>
        </div>
    </nav>
  )
}

export default Nav