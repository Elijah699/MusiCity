// icons
import { FaRocket, FaRegEnvelope } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';

// styles
import { ContactWrapper } from '../styles/Contact.styles';

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <h2>CONTACT US</h2>

      <div className="first-part">
        <div className="row">
          <div className="col-50">
            <div
              className="info-box"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="linear"
              data-aos-delay="400"
            >
              <i>
                <IoLocationOutline />
              </i>
              <h3>Our Address</h3>
              <p>6 Aderupoko street, Off Ahmadiyya, Lagos, Nigeria.</p>
            </div>
          </div>
          <div className="col-50">
            <div className="row">
              <div className="col-50">
                <div
                  className="info-box"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                  data-aos-easing="linear"
                >
                  <i>
                    <FaRegEnvelope />
                  </i>
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:" aria-label="Send a mail">
                      musicity@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-50">
                <div
                  className="info-box"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="400"
                  data-aos-easing="linear"
                >
                  <i>
                    <FiPhoneCall />
                  </i>
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:08145212777" aria-label="Give us a call">
                      +2348145212777
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-part">
        <div className="row">
          <div className="col-50">
            <div
              className="info-box"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <form action="/">
                <div className="row">
                  <div className="half-form">
                    <label htmlFor="Name">
                      Name <span className="red">*</span>
                    </label>
                    <input type="text" placeholder="First Name" required />
                  </div>
                  <div className="half-form">
                    <label htmlFor="Email">
                      Email <span className="red">*</span>
                    </label>
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>

                <div className="full-form">
                  <label htmlFor="Subject">
                    Subject <span className="red">*</span>
                  </label>
                  <input type="text" placeholder="Subject" required />
                </div>

                <div className="full-form">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <button className="form-btn" type="submit">
                  Send <FaRocket />
                </button>
              </form>
            </div>
          </div>

          <div className="col-50">
            <iframe
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="linear"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.809861450626!2d3.294239714267004!3d6.670467423289165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9720e134718d%3A0xae6fb3b79b29d7f5!2s6%20Aderupoko%20St%2C%20Ifako-Ijaiye%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1655022898292!5m2!1sen!2sng"
              title="Musicity Map"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
