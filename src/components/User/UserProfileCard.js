import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./UserProfileCard.css";
import PropTypes from "prop-types";

const UserProfileCard = (props) => {
  return (
    <div className="container">
      <h3>User Profile {props.first_name}</h3>
      <hr />
      <div className="row">
        <div className="profile-card">
          <div className="profile-img">
            <img src={props.avatar} alt="avatar" />
          </div>
          <div className="profile-content">
            <h2 className="title">
              {props.first_name} {props.last_name}
              <span>{props.email}</span>
              <p>Favourite color :</p>
              <p
                className="col"
                style={{
                  height: 10,
                  backgroundColor: props.favorite_color,
                  border: "1px solid black",
                  textAlign: "center",
                }}
              ></p>
            </h2>
            <ul className="social-link">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

UserProfileCard.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  favorite_color: PropTypes.string,
};