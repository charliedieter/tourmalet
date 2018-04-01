import React from "react";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const length = Object.keys(this.props.images).length;

    const images = [];
    // inline style so it can be changed depending on resolution/shape/# of photos in the future
    Object.values(this.props.images).forEach((img, idx) =>
      images.push(
        <img
          className="banner-photo"
          style={{ width: "25%", height: "100%" }}
          src={img.url}
          key={`banner-img-${idx}`}
        />
      )
    );

    if (!images[0]) return <div className="banner-default" />;

    return <div className="banner">{images}</div>;
  }
}

export default Banner;

//
// const imageStyle = {
//   width: this.imageWidth,
//   height: "100%"
// };
