import React from "react";

const ImageList = props => {
  if (props.images.length > 0) {
    return props.images.reduce(
      (acc, val, index) =>
        acc.concat(<img src={val.urls.regular} alt={val.id} key={index} />),
      []
    );
  } else {
    return null;
  }
};

export default ImageList;
