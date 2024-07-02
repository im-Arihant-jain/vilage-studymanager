// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>Head Office</h3>
//           <p>
//             Office No. 210, Indulal Complex, Lal Bahadur Shastri Road, Sadashiv
//             Peth, Pune,
//             <br />
//             Maharashtra - 411030
//           </p>
//         </div>
//         <div className="footer-section">
//           <h3>Regional Office</h3>
//           <p>
//             Vidyut Nagar, Beed Road, Morewadi Ambajogai,
//             <br />
//             Maharashtra - 431517
//           </p>
//         </div>
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>
//             +91 9911887565
//             <br />
//             <a href="mailto:contact@gramurja.org">contact@gramurja.org</a>
//           </p>
//         </div>
//       </div>
//       <div className="footer-links">
//         <a href="#privacy">Privacy Policy</a>
//         <a href="#donation">Make a Donation</a>
//         <a href="#contact">Contact Us</a>
//       </div>
//       <div className="footer-volunteer">
//         <p>
//           Join us as a volunteer and make a difference in rural communities.
//         </p>
//         <button className="volunteer-btn">Become a Volunteer</button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";
import ContactUs from "./contactUs"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Head Office</h3>
          <p>
            Office No. 210, Indulal Complex, Lal Bahadur Shastri Road, Sadashiv
            Peth, Pune,
            <br />
            Maharashtra - 411030
          </p>
        </div>
        <div className="footer-section">
          <h3>Regional Office</h3>
          <p>
            Vidyut Nagar, Beed Road, Morewadi Ambajogai,
            <br />
            Maharashtra - 431517
          </p>
        </div>
        <ContactUs />
      </div>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#donation">Make a Donation</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="footer-volunteer">
        <p>
          Join us as a volunteer and make a difference in rural communities.
        </p>
        <button className="volunteer-btn">Become a Volunteer</button>
      </div>
    </footer>
  );
};

export default Footer;
