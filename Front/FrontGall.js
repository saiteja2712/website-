import React from "react";
function Gall({ image }) {
  return (
    <div className="Dub">
      <img
        src={`data:image/jpeg;base64,${image}`}
        width="100px"
        height="fit-content"
      ></img>
    </div>
  );
}
export default Gall;
