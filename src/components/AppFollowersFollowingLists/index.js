import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

function AppFollowersFollowingLists({ users, isLoading }) {
  return (
    <div className="AppFollowersFollowingLists">
      <div className="user-followers-list">
        <ListGroup variant="flush">
          {users.map((item, index) => (
            <ListGroup.Item className="d-flex gap-3" key={index}>
              <img
                src={item?.avatar_url}
                alt="twbs"
                width="50"
                height="50"
                className="rounded-circle flex-shrink-0"
              />
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <a
                    className="mb-0 h6 text-decoration-none d-flex"
                    href={item?.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item?.login}
                  </a>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

AppFollowersFollowingLists.propTypes = {
  users: PropTypes.array,
  isLoading: PropTypes.bool,
};

AppFollowersFollowingLists.defaultProps = {
  users: [],
  isLoading: true,
};

export default AppFollowersFollowingLists;
