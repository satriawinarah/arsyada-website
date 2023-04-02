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
                            <span className="menu-title">Speakers</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                    <li>
                        <a href="src/components/website/header/WebsiteHeader.js" className="page-scroll">
                            <span className="menu-title">Buy Tickets</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                    <li>
                        <a href="src/components/website/header/WebsiteHeader.js" className="page-scroll">
                            <span className="menu-title">Schedule</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row hero-header" id="home">
                    <div className="col-md-7">
                        <img src="assets/img/meetup-logo.png" className="logo"/>
                        <h1>Attend the most awaited Conference of 2015</h1>
                        <h3>to start you up with your business!</h3>
                        <h4>20<sup>th</sup> to 22<sup>nd</sup> October, 2015</h4>
                        <a href="src/components/website/header/Header#WebsiteHeader.js" className="btn btn-lg btn-red">Buy
                            Tickets Now
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