import React from "react";
import { connect } from "react-redux";
import StaticMap from "../map/static_map";
import Gallery from "react-grid-gallery";

class RoutesAndFollows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1
    };
  }

  render() {
    if (!this.props.activities) return null;
    const routes = this.props.activities
      .filter(act => this.props.user.activity_ids.includes(act.id))
      .map((route, idx) => {
        return (
          <div className="user-show-route" key={`map-box-${idx}`}>
            <StaticMap polyline={route.polyline} idx={idx} square={true} />
            <h3 className="user-show-route-title">{route.title}</h3>
            <ul className="user-show-route-stats">
              <div className="user-show-route-stat">
                <div>{route.distance} mi</div>
                <div>Distance</div>
              </div>
              <div className="user-show-route-stat">
                <div>{route.elevation} ft</div>
                <div>Elevation Gain</div>
              </div>
            </ul>
            <div className="user-show-moving-time">
              Est. Moving Time {route.est_moving_time}
            </div>
            <div className="user-show-date">Created on {route.date}</div>
          </div>
        );
      });

    // before using react-grid

    // const images = [];
    // Object.values(this.props.images).forEach((img, idx) =>
    //   images.push(
    //     <img
    //       className="banner-photo"
    //       style={{ width: "25%", height: "100%" }}
    //       src={img.url}
    //       key={`banner-img-${idx}`}
    //     />
    //   )
    // );

    const images = [];
    Object.values(this.props.images).forEach((img, idx) =>
      images.push({
        src: img.url,
        thumbnail: img.url,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      })
    );

    const following = this.props.user.followings_with_avatar.map(
      (user, idx) => {
        return (
          <div className="following-list-item" key={`following-${idx}`}>
            <img className="following-avatar" src={user.avatar_url} />
            <div className="following-name">{user.username}</div>
            {this.props.currentUser.following_ids.includes(user.id) ? (
              <button className="following-unfollow-button">Unfollow</button>
            ) : user.id === this.props.currentUser.id ? null : (
              <button className="following-unfollow-button">Follow</button>
            )}
          </div>
        );
      }
    );

    return (
      <div className="routes-follows-box">
        <ul className="routes-follows-tabs">
          <li
            onClick={() => this.setState({ selected: 1 })}
            className={this.state.selected === 1 ? "selected" : ""}
          >
            Routes
          </li>
          <li
            onClick={() => this.setState({ selected: 2 })}
            className={this.state.selected === 2 ? "selected" : ""}
          >
            Photos
          </li>
          <li
            onClick={() => this.setState({ selected: 3 })}
            className={this.state.selected === 3 ? "selected" : ""}
          >
            Following
          </li>
        </ul>
        <div className="routes-follows-body">
          {this.state.selected === 1 ? (
            routes
          ) : this.state.selected === 2 ? (
            <Gallery images={images} enableImageSelection={false} />
          ) : (
            following
          )}
        </div>
      </div>
    );
  }
}

const msp = state => ({
  activities: Object.values(state.entities.activities)
});
export default connect(msp, null)(RoutesAndFollows);
