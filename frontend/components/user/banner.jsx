import React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../../actions/image_actions";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    if (!this.props.images[0]) return null;

    if (this.props.images.length < 5)
      this.imageWidth = 100 / this.props.images.length + "%";

    const imageStyle = {
      width: this.imageWidth,
      height: "100%"
    };

    const images = this.props.images.map((img, idx) => {
      return <img style={imageStyle} src={img.url} />;
    });
    return <div className="banner">{images}</div>;
  }
}

const msp = state => ({
  images: Object.values(state.entities.images)
});

const mdp = dispatch => ({
  fetchImages: () => dispatch(fetchImages)
});

export default connect(msp, mdp)(Banner);
