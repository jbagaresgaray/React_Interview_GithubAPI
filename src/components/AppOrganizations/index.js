import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function AppOrganizations({ organizations, isLoading }) {
  const fakeArr = Array.from({
    length: 15,
  });

  const renderLoadingSkeleton = () => {
    return (
      <ListGroup variant="flush">
        {fakeArr.map((_, index) => (
          <ListGroup.Item className="d-flex gap-3" key={index}>
            <Skeleton circle height={50} width={50} />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div className="w-50">
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  const renderOrganizations = () => {
    return (
      <ListGroup variant="flush">
        {organizations.map((item, index) => (
          <ListGroup.Item className="d-flex gap-3" key={index}>
            <img
              src={item?.avatar_url}
              alt="twbs"
              width="50"
              height="50"
              className="rounded-circle flex-shrink-0 img-thumbnail"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <a
                  className="mb-0 h6"
                  href={`https://github.com/${item?.login}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item?.login}
                </a>
                <p className="mb-0 opacity-75">{item?.description}</p>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  return (
    <div className="AppOrganizations">
      <div className="user-organizations-list">
        {isLoading ? renderLoadingSkeleton() : renderOrganizations()}
      </div>
    </div>
  );
}

AppOrganizations.propTypes = {
  organizations: PropTypes.array,
  isLoading: PropTypes.bool,
};

AppOrganizations.defaultProps = {
  organizations: [],
  isLoading: true,
};

export default AppOrganizations;
