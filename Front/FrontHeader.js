import React, { useState, useEffect } from "react";
import Dropdown from "./FrontDropdown";
import Bellicon from "./FrontBelldown";

function FrontHeader() {
  const [openProfile, setOpenProfile] = useState(false);
  const [bellIcon, setBellIcon] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleDocumentClick = (event) => {
    const target = event.target;
    if (
      !target.closest(".header-icons") &&
      openProfile &&
      !target.closest(".dropdownprofile")
    ) {
      setOpenProfile(false);
    }
    if (
      !target.closest(".header-icons") &&
      bellIcon &&
      !target.closest(".belldropdown")
    ) {
      setBellIcon(false);
    }
    if (
      !target.closest(".header-icons") &&
      searchBarOpen &&
      !target.closest(".search-bar")
    ) {
      setSearchBarOpen(false);
      setSearchText("");
    }
  };

  const handleBellIconClick = () => {
    setBellIcon((prev) => !prev);
    setOpenProfile(false);
    setSearchBarOpen(false);
  };

  const handleProfileIconClick = () => {
    setOpenProfile((prev) => !prev);
    setBellIcon(false);
    setSearchBarOpen(false);
  };

  const handleSearchIconClick = () => {
    setSearchBarOpen(true);
    setOpenProfile(false);
    setBellIcon(false);
  };

  const handleCancelClick = () => {
    setSearchBarOpen(false);
    setSearchText("");
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [openProfile, bellIcon, searchBarOpen]);

  return (
    <div className="header">
      <div className="header-icons">
        <i
          className="fa-solid fa-magnifying-glass search-icon"
          onClick={handleSearchIconClick}
        ></i>
        {searchBarOpen && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <i class="fa-solid fa-xmark" onClick={handleCancelClick}></i>
          </div>
        )}

        <i className="fa-solid fa-bell" onClick={handleBellIconClick}></i>
        {bellIcon && <Dropdown />}

        <div
          className="dropdown-toggle"
          id="toggle"
          onClick={handleProfileIconClick}
        >
          <img
            id="pro"
            src="https://demos.creative-tim.com/black-dashboard-react/static/media/anime3.4438e506.png"
            className="nav-link"
          />
        </div>
        {openProfile && <Bellicon />}
      </div>
    </div>
  );
}
export default FrontHeader;
