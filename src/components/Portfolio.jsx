import React, { useState, useEffect } from "react";
import ContentSvg from "../assets/images/svg/content-svg.svg";
import ContentImg from "../assets/images/content-img.png";
import YoutubeVideoImg from "../assets/images/youtube-video-img.png";
import YoutubeSvg from "../assets/images/svg/youtube-svg.svg";
import VimeoVideoImg from "../assets/images/vimeo-video-img.png";
import VimeoSvg from "../assets/images/svg/vimeo-svg.svg";
import SoundCloudImg from "../assets/images/sound-cloud-img.png";
import SoundCloudSvg from "../assets/images/svg/sound-cloud.svg";
import GalleryImg from "../assets/images/gallery-img.png";
import GallerySvg from "../assets/images/svg/gallery-svg.svg";
import ContentImg2 from "../assets/images/content-img2.png";
import YouTubeModal from "./YouTubeVideo";
import VimeoModal from "./VimeoModal";
import SoundCloudModal from "./SoundCloudVideo";
import $ from "jquery";
import Galleryimg1 from "../assets/images/gallery/gallery-img1.jpg";
import Galleryimg2 from "../assets/images/gallery/gallery-img2.jpg";
import Galleryimg3 from "../assets/images/gallery/gallery-img3.jpg";
import Galleryimg4 from "../assets/images/gallery/gallery-img4.jpg";
import Galleryimg5 from "../assets/images/gallery/gallery-img5.jpg";
import Galleryimg6 from "../assets/images/gallery/gallery-img6.jpg";
import Galleryimg7 from "../assets/images/gallery/gallery-img7.jpg";
import Galleryimg8 from "../assets/images/gallery/gallery-img8.jpg";


import project1 from "../assets/images/projects/1.webp";
import project2 from "../assets/images/projects/2.webp";
import project3 from "../assets/images/projects/3.webp";
import project4 from "../assets/images/projects/4.webp";
import project5 from "../assets/images/projects/5.webp";
import project6 from "../assets/images/projects/6.webp";
import project7 from "../assets/images/projects/7.webp";
import project8 from "../assets/images/projects/8.webp";
import project9 from "../assets/images/projects/9.webp";
import project10 from "../assets/images/projects/10.webp";
import project11 from "../assets/images/projects/11.webp";
import project12 from "../assets/images/projects/12.webp";
import project13 from "../assets/images/projects/13.webp";
import project14 from "../assets/images/projects/14.webp";
import project15 from "../assets/images/projects/15.webp";


import Fancybox from "./FancyBox";
import Popup from "./PopUp";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState(null); // New state for popup data


  const handlePopupOpen = (data) => (e) => {
    // alert(data.image);
    e.preventDefault();
    setPopupData(data); // Set the data for the popup
    setIsPopupVisible(true);
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setIsPopupVisible(false);
    setPopupData(null); // Clear the popup data
  };

  // Vimeo Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Youtube Modal
  const [isModalOpenYoutube, setisModalOpenYoutube] = useState(false);

  const handleOpenModalYoutube = () => {
    setisModalOpenYoutube(true);
  };

  const handleCloseModalYoutube = () => {
    setisModalOpenYoutube(false);
  };

  // Soundcloud Modal
  const [isModalOpenSound, setIsModalOpenSound] = useState(false);

  const handleOpenModalSound = () => {
    setIsModalOpenSound(true);
  };

  const handleCloseModalSound = () => {
    setIsModalOpenSound(false);
  };

  useEffect(() => {
    // Function to initialize fancybox for the gallery

    // Event listener to toggle 'full' class on image click
    const handleImageClick = (event) => {
      event.target.classList.toggle("full");
    };

    // Attach click event to gallery images
    const galleryLinks = document.querySelectorAll(".gallery-link img");
    galleryLinks.forEach((link) => {
      link.addEventListener("click", handleImageClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      galleryLinks.forEach((link) => {
        link.removeEventListener("click", handleImageClick);
      });
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section Portfolio ===================================== --> */}
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Portfolio. 
          </h2>
          <div className="line text-white">Some of My Work</div>
        </div>
        <div className="portfolios-group-main">
          <div>
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project1, title: "ARY NEWS", description: "Blogging Website" })}
            >
              <img src={project1} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY NEWS</p>
              </div>
            </div>
            <p className="Corporate ">ARY NEWS</p>
            <p className="Corporate-sub ">Blogging Website (Wordpress)</p>
            <div className="second-row-portfolio">
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project2, title: "ARY MIS", description: "Management Information System" })}
            >
              <img src={project2} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY MIS</p>
              </div>
            </div>
            <p className="Corporate ">ARY MIS</p>
            <p className="Corporate-sub ">MIS (PHP)</p>
            </div>
          </div>
          <div>
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project3, title: "ARY NEWS", description: "Blogging Website" })}
            >
              <img src={project3} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY NEWS</p>
              </div>
            </div>
            <p className="Corporate ">ARY NEWS</p>
            <p className="Corporate-sub ">Blogging Website (Wordpress)</p>
            <div className="second-row-portfolio">
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project4, title: "ARY MIS", description: "Management Information System" })}
            >
              <img src={project4} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY MIS</p>
              </div>
            </div>
            <p className="Corporate ">ARY MIS</p>
            <p className="Corporate-sub ">MIS (PHP)</p>
            </div>
          </div>
          <div>
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project5, title: "ARY NEWS", description: "Blogging Website" })}
            >
              <img src={project5} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY NEWS</p>
              </div>
            </div>
            <p className="Corporate">ARY NEWS</p>
            <p className="Corporate-sub">Blogging Website (Wordpress)</p>
            <div className="second-row-portfolio">
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project6, title: "ARY MIS", description: "Management Information System" })}
            >
              <img src={project6} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY MIS</p>
              </div>
            </div>
            <p className="Corporate">ARY MIS</p>
            <p className="Corporate-sub">MIS (PHP)</p>
            </div>
          </div>
        </div>

        <div className="portfolios-group-main">
          <div>
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project7, title: "ARY NEWS", description: "Blogging Website" })}
            >
              <img src={project7} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY NEWS</p>
              </div>
            </div>
            <p className="Corporate ">ARY NEWS</p>
            <p className="Corporate-sub ">Blogging Website (Wordpress)</p>
            <div className="second-row-portfolio">
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project8, title: "ARY MIS", description: "Management Information System" })}
            >
              <img src={project8} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY MIS</p>
              </div>
            </div>
            <p className="Corporate ">ARY MIS</p>
            <p className="Corporate-sub ">MIS (PHP)</p>
            </div>
          </div>
          <div>
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project9, title: "ARY NEWS", description: "Blogging Website" })}
            >
              <img src={project9} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY NEWS</p>
              </div>
            </div>
            <p className="Corporate ">ARY NEWS</p>
            <p className="Corporate-sub ">Blogging Website (Wordpress)</p>
            <div className="second-row-portfolio">
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project10, title: "ARY MIS", description: "Management Information System" })}
            >
              <img src={project10} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY MIS</p>
              </div>
            </div>
            <p className="Corporate ">ARY MIS</p>
            <p className="Corporate-sub ">MIS (PHP)</p>
            </div>
          </div>
          <div>
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project11, title: "ARY NEWS", description: "Blogging Website" })}
            >
              <img src={project11} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">ARY NEWS</p>
              </div>
            </div>
            <p className="Corporate">ARY NEWS</p>
            <p className="Corporate-sub">Blogging Website (Wordpress)</p>
            <div className="second-row-portfolio">
            <div
              className="image-container popup-btn"
              onClick={handlePopupOpen({ image: project13, title: "Janta Kumari", description: "Management Information System" })}
            >
              <img src={project13} alt="content-img" />
              <div className="overlay">
                <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">Janta Kumari</p>
              </div>
            </div>
            <p className="Corporate">Janta Kumari</p>
            <p className="Corporate-sub">E-Commerce (Wordpress)</p>
            </div>
          </div>
        </div>
        <div className="wrapper view-all-btn zoom_in">
          <Link className="btn-hover" to="#">
            View All
          </Link>
        </div>
      </section>
      <Popup isVisible={isPopupVisible} onClose={handlePopupClose} data={popupData} />
      {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
      <div id="popup2" class="popup-container popup-style">
        <div class="popup-content popup-content-gallery">
          <a href="#pop" class="close">
            &times;
          </a>

          <main class="main">
            <h2 class="mobile_app">Gallery</h2>

            <div class="container">
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg6}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg6} alt="gallery-img6" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg7}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg7} alt="gallery-img7" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg8}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg8} alt="gallery-img8" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
