import React from "react";
import "./About.css";
// import pic from "src/pic.jpeg";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="image">
        <img src={require("./pic2.png")} className="pic2" />
      </div>
      {/* <div className="main"> */}
      <div className="content">
        <h2>About Us</h2>
        <p>
          GramUrja is a team of young rural development professionals coming
          from various professional backgrounds. It has three major areas of
          intervention, namely education, livelihood, and governance, under
          GramHunar, GramUdyam, and GramConnect programs.
        </p>
        <p>
          Coming from our deep, immersive experience in the rural development
          sector as Chief Minister’s Rural Development Fellows, we started the
          organization in the year 2020. Since then, we have been committed to
          empowering rural communities through innovative solutions and
          sustainable practices.
        </p>
        <p>
          Our education program, GramHunar, focuses on improving the quality of
          education in rural areas by providing training and resources to
          teachers, establishing community libraries, and conducting learning
          camps for children.
        </p>
        <p>
          GramUdyam, our livelihood program, aims to enhance the economic
          well-being of rural households by promoting skill development,
          entrepreneurship, and market linkages for local products. Under our
          governance initiative, GramConnect, we work towards strengthening
          local governance systems, promoting citizen participation, and
          enhancing the delivery of public services.
        </p>
        <p>
          We believe in a holistic approach to rural development and strive to
          create a positive impact in the communities we serve. Join us in our
          mission to transform rural India.
        </p>
      </div>
      <div className="images">
        <img src={require("./kids.jpg")} className="kids" />
        <img src={require("./abc.jpg")} className="kids" />
      </div>
    </section>
  );
};

export default AboutUs;
