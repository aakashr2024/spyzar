// import React from "react";
// import "./Contact.css";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <h2 className="section-title">Contact Us</h2>
//         <div className="contact-container">
//           <div className="contact-info">
//             <div className="info-item">
//               <div className="info-icon">
//                 <FaMapMarkerAlt />
//               </div>
//               <p>
//                 Business Centre,Sharjah Publishing City Free Zone,Sharjah, uae
//               </p>
//             </div>
//             <div className="info-item">
//               <div className="info-icon">
//                 <FaEnvelope />
//               </div>
//               <p>info@spyzar.com</p>
//             </div>
//             <div className="info-item">
//               <div className="info-icon">
//                 <FaPhone />
//               </div>
//               <p>+91 97443 40111</p>
//             </div>
//           </div>

//           <form className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="Subject"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <p>
                Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE
              </p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <p>info@spyzar.com</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <p>+91 97443 40111</p>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formsubmit.co/info@spyzar.com"
            method="POST"
          >
            {/* Optional Hidden Inputs */}
            <input type="hidden" name="_next" value="https://spyzar.com/thank-you" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
