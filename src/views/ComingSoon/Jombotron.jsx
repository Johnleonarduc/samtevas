import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './Jombotron.css';

const contactIcons = [
    {
        icon: faWhatsapp,
        link: '+2347037063912',
        text: `&text=Hi, I am contacting from samtevas.com. I would like to know about your services`,
        refKey: 'http://api.whatsapp.com/send?phone='
    },
    {
        icon: faPhone,
        link: '2347061681517',
        text: '',
        refKey: 'tel:+'
    },
    {
        icon: faEnvelope,
        link: 'samtevas05@gmail.com',
        text: '?subject=Interior%20Design%20Inquiry&body=Hi,%20I%20am%20contacting%20from%20samtevas.com.%20I%20would%20like%20to%20know%20about%20your%20services',
        refKey: 'mailto:'
    },
]; 

const Jombotron = ()=> {
    return (
        <section className="coming-soon-jombotron-section">
            <div className="floating-text-div">
                <div className="company-name-heading">
                    <img src="/images/samtevas-logo.svg" alt="samtevas logo"/>
                </div>

                <div className="comming-soon-text-section">
                    <h2>Coming Soon</h2>
                    <p>Our site is under construction and will be up soon.</p>
                </div>

                <div className="contact-icons-section">
                    {contactIcons.map((item, i)=>{
                        return(<div className="contact-icon" key={i}>
                            <a href={`${item.refKey}${item.link}${item.text}`} rel="noopener noreferrer" target="_self">
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Jombotron;