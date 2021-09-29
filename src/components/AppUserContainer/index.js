import React from "react";
import { Image, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./AppUserContainer.scss";
import {
  faEnvelope,
  faLink,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function AppUserContainer({ user, isLoading }) {
  return (
    <div className="AppUserContainer">
      <div className="AppUserContainer__User">
        <Image src={user?.avatar_url} roundedCircle />
      </div>
      <div className="AppUserContainer__User_Container py-3">
        <h1 className="AppUserContainer__User_Container_vcard">
          <span className="AppUserContainer__User_Container_vcard-fullname">
            {user?.name}
          </span>
          <span className="AppUserContainer__User_Container_vcard-username">
            {user?.login}
          </span>
        </h1>
      </div>
      <div className="AppUserContainer__User_Profile">
        <div className="AppUserContainer__User_Profile_Note">{user?.bio}</div>
      </div>
      <div className="AppUserContainer__User_Details">
        <ListGroup variant="flush">
          {user?.location && (
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="ms-2">{user?.location}</span>
            </ListGroup.Item>
          )}
          {user?.email && (
            <ListGroup.Item>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ms-2">{user?.email}</span>
            </ListGroup.Item>
          )}
          {user?.blog && (
            <ListGroup.Item>
              <FontAwesomeIcon icon={faLink} />
              <span className="ms-2">{user?.blog}</span>
            </ListGroup.Item>
          )}
          {user?.twitter_username && (
            <ListGroup.Item>
              <FontAwesomeIcon icon={faTwitter} />
              <span className="ms-2">@{user?.twitter_username}</span>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </div>
  );
}

AppUserContainer.propTypes = {
  isLoading: PropTypes.bool,
};

AppUserContainer.defaultProps = {
  user: {},
  isLoading: true,
};

export default AppUserContainer;
