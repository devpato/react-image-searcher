import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
const ImageList = props => {
  let IMAGES;
  if (props.images.length > 0) {
    IMAGES = props.images.reduce(
      (acc, val, index) => acc.concat(<ImageCard key={index} image={val} />),
      []
    );
    return <div className="image-list">{IMAGES}</div>;
  } else {
    return null;
  }
};

export default ImageList;
