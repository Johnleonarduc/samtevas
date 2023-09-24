import './index.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-data-section">
                <div className="rc-number">
                    <img src="/images/samtevas-logo-white.svg" alt="company logo" />
                    <p>RC:1248986</p>
                </div>

                <div className="head-office-section">
                    <h2 className="company-name">
                        Samtevas Interior Designs Limited
                    </h2>

                    <div className="head-office">
                        <h3>Head Office</h3>
                        <p>White House, KM 35, Abuja-Keffi Rd, Opposite Timber Shed, New Nyanya, FCT Abuja, Nigeria.</p>
                    </div>
                </div>

                <div className="branch-office">
                    <h3>Branch Office</h3>
                    <p>KM 24, Abuja-Keffi Rd, Beside Total Filling Station, Kuchikau, FCT Abuja, Nigeria.</p>
                </div>

                <div className="contacts">
                    <h3>Contact us:</h3>
                    <ul>
                        <strong>Phone:</strong>
                        <li>
                            <a href="tel:+2347037063912" rel="noopener noreferrer" target="_self">+2347037063912</a>
                        </li>

                        <li>
                            <a href="tel:+2348051668201" rel="noopener noreferrer" target="_self">+2348051668201</a>
                        </li>
                    </ul>
                    <ul>
                        <strong>Email:</strong>
                        <li>
                            <a href="mailto:samtevas50@gmail.com" rel="noopener noreferrer" target="_self">samtevas50@gmail.com</a>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p className='copyright'>©2023 Samtevas Interior Designs Limited.
    All rights reserved</p>

                <p className='developers'>
                    <a href="https://iospine.com" rel="noopener noreferrer" target="_blank">Powered by I/O SPINE</a>
                </p>
            </div>
        </footer>
    )
};

export default Footer;