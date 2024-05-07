import React, { useState } from "react";
import Modal from "./Frontmodel";

const ImageUploader = ({ vars }) => {
  const [files, setFiles] = useState([]);
  const [uploadResponse, setUploadResponse] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (files.length + droppedFiles.length <= 2) {
      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    } else {
      alert("You can upload a maximum of two images.");
    }
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length <= 2) {
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    } else {
      alert("You can upload a maximum of two images.");
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }
    setIsUploading(true);
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    try {
      const response = await fetch("http://localhost:8099/upload/uploads", {
        method: "POST",
        body: formData,
      });
      const data = await response.text();
      setUploadResponse(data);
      setFiles([]);
      setShowPopup(true);
      vars();
      // Show the popup after successful upload
    } catch (error) {
      setUploadResponse("Failed to upload images.");
    } finally {
      setIsUploading(false);
    }
  };
  // const handleClosePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  return (
    <div className="image-uploader">
      <h2>Upload images</h2>
      <p>Start by adding images for processing.</p>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="drop-area"
      >
        <p>
          Drag & Drop your images here or{" "}
          <label htmlFor="file-input" className="browse">
            browse files
          </label>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
            multiple
          />
          <br></br>
          <i class="fa-solid fa-cloud-arrow-up" id="cloud"></i>
        </p>
      </div>
      {files.length === 0 && (
        <div>
          <p>No images uploaded</p>
          <p>
            You do not have any files loaded yet. Start now by dragging to the
            box above or selecting images using the button above.
          </p>
        </div>
      )}
      {files.length > 0 && (
        <>
          <h3 id="h3">Uploaded Files</h3>
          <ul className="uploaded-files">
            {files.map((file, index) => (
              <li key={index}>
                <i class="fa-solid fa-image" id="imgicon"></i>
                {file.name}
                <span> - We are processing your image...</span>
              </li>
            ))}
          </ul>
        </>
      )}
      <button
        className="btn btn-primary"
        id="upbtn"
        onClick={handleUpload}
        disabled={files.length === 0 || isUploading}
      >
        {isUploading ? "Uploading..." : "Upload"}
      </button>

      {showPopup && (
        <Modal
          content="Image added successfully."
          onClose={() => setShowPopup(false)}
        />
      )}
      {/* Close button */}
      {/* <button className="btn btn-info" onClick={handleClosePopup}>
        Close
      </button> */}
    </div>
  );
};

export default ImageUploader;
