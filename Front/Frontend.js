import React, { useState, useEffect } from "react";
import FrontHeader from "../Front/FrontHeader";
import Medal from "../Front/Frontpopup";
import ImageUploader from "../Front/Frontupload";
import Gall from "../Front/FrontGall";

const SideNavbar = () => {
  const [showUploader, setShowUploader] = useState(false);
  const [showGallery, setShowGallery] = useState(true);
  const [image, setImage] = useState([]);

  const fetchImages = async () => {
    try {
      let calling = await fetch("http://localhost:8099/upload/all");
      let dial = await calling.json();
      setImage(dial);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (showGallery) {
      fetchImages();
    }
  }, [showGallery]);

  return (
    <div>
      <div className="header">
        <div className="dash">DashBoard</div>
        <FrontHeader />
      </div>
      <div className="containerpower">
        <div className="sidenav">
          <div className="create">
            <br />
            <img
              className="imgs"
              src="https://demos.creative-tim.com/black-dashboard-react/static/media/react-logo.561f1671.png"
              alt="react-logo"
            />
            <h6>CREATIVE TIM</h6>
            <br />
          </div>
          <ul>
            <li>
              <a href="#dashboard">
                <i className="fa-solid fa-chart-pie" id="icon"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="#Icons">
                <i className="fa-solid fa-atom" id="icon"></i>Icons
              </a>
            </li>
            <li>
              <a href="#map">
                <i className="fas fa-map" id="icon"></i> Map
              </a>
            </li>
            <li>
              <a href="#notifications">
                <i className="fa-regular fa-bell" id="icon"></i> Notifications
              </a>
            </li>
            <li>
              <a href="#userprofile">
                <i className="fa-regular fa-user" id="icon"></i> User Profile
              </a>
            </li>
            <li>
              <a href="#tablelist">
                <i className="fas fa-table" id="icon"></i> Table List
              </a>
            </li>
            <li>
              <a href="#typography">
                <i className="fa-solid fa-align-center" id="icon"></i>{" "}
                Typography
              </a>
            </li>
            <li>
              <a href="#rtlsupport">
                <i className="fa-solid fa-globe" id="icon"></i> RTL Support
              </a>
            </li>

            <li>
              <a href="#upgradetopro">
                <i class="fa-solid fa-rocket" id="icon"></i>Upgrade to Pro
              </a>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="list">
            <div className="h67">
              <button
                className="btn btn-primary"
                id="butn"
                onClick={() => {
                  setShowUploader(false);
                  setShowGallery(true);
                }}
              >
                Gallery
              </button>
              <button
                className="btn btn-info"
                id="butn"
                onClick={() => {
                  setShowUploader(true);
                  setShowGallery(true);
                }}
              >
                Upload
              </button>
            </div>
            <div className="Api-list">
              {showUploader && (
                <Medal onClose={() => setShowUploader(false)}>
                  <ImageUploader vars={fetchImages} />
                </Medal>
              )}
              {showGallery && image.map((p) => <Gall {...p} key={p.id} />)}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
