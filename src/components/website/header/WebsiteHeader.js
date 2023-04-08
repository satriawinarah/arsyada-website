function WebsiteHeader() {
    return (
        <div>
            <nav className="side-menu">
                <ul>
                    <li className="hidden active">
                        <a className="page-scroll" href="src/components/website/header/WebsiteHeader.js"></a>
                    </li>
                    <li>
                        <a href="src/components/website/header/WebsiteHeader.js" className="page-scroll">
                            <span className="menu-title">Home</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                    <li>
                        <a href="src/components/website/header/WebsiteHeader.js" className="page-scroll">
                            <span className="menu-title">Mentors</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row hero-header" id="home">
                    <div className="col-md-7">
                        <img src="assets/img/arsyada-logo.png" className="logo"/>
                        <h1>Accompany yourself with a good mentor</h1>
                        <h3>Or be the mentor to help others</h3>
                        <h4>Both beneficial</h4>
                        <a href="src/components/website/header/Header#WebsiteHeader.js" className="btn btn-lg btn-red">
                            Register Now
                            <span className="ti-arrow-right"></span>
                        </a>
                    </div>
                    <div className="col-md-5 hidden-xs">
                        <img src="assets/img/rocket.png" className="rocket animated bounce"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebsiteHeader;