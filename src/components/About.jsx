import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hi, my name is <span>Humayun Wahid</span> and I'm an extremely creative Web Developer with a focus on innovation and growth-driven objectives. Proficient in PHP and React.js, with extensive experience working with CMS like WordPress and Shopify. Admiring those who have achieved recognition for bringing about change in our lives using technology, I aspire to become a part of a company that values innovative and creative individuals.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Humayun Wahid</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Pakistan</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:(+92)3222406491'"
          >
            (+92) 322 240 6491
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:contact@humayunwahid.com'"
          >
            contact@humayunwahid.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">8+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Linkedin</p>
          <p className="about-detail-info">humayunwahid</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">Urdu, English</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
