import React from 'react'

const Header = () => {
    return (
        <header className="Header">
            {/* <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center'>Forex and Stocks Project</h1>
                    </div>
                </div>
            </div> */}

            {/* Nav Bar */}
            <nav class="navbar bg-white slow navbar-expand-md sticky-top divider">
                <div class="container-fluid px-5">

                    <a href="#" class="navbar-brand">
                        <img src="./images/Mustard logo new.png" class="img-fluid" alt="" style="width: 150px;" />
                    </a>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navmenu">
                        <ul class="navbar-nav mx-auto">          
                            <li class="nav-item">
                                <a href="#footer" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#footer" class="nav-link">Invest</a>
                            </li>
                            <li class="nav-item">
                                <a href="#footer" class="nav-link">Rewards</a>
                            </li>
                            <li class="nav-item">
                                <a href="#footer" class="nav-link">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a href="#footer" class="nav-link">Ambassador</a>
                            </li>
                        </ul>


                        <a href="#login" class=""><i class="ri ri-lock-unlock-fill"></i> Login</a>
                        <a href="#get-started" class="btn btn-brand ms-3">Getting Started <i style="vertical-align: inherit;" class="ri ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header