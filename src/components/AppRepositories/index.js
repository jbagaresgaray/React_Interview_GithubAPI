import React from "react";
import { Form, FormControl, Button, ListGroup, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Skeleton from "react-loading-skeleton";

function AppRepositories({ repos, isLoading }) {
  const fakeArr = Array.from({
    length: 15,
  });

  const renderLoadingSkeleton = () => {
    return (
      <ListGroup variant="flush">
        {fakeArr.map((_, index) => (
          <ListGroup.Item className="d-flex gap-3" key={index}>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div className="w-50">
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
              <small className="text-nowrap">
                <FontAwesomeIcon icon={faStar} />
              </small>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  const renderRepositories = () => {
    return (
      <ListGroup variant="flush">
        {repos.map((item, index) => (
          <ListGroup.Item className="d-flex gap-3" key={index}>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <a
                  className="mb-0 d-flex h5 text-decoration-none"
                  href={item?.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item?.name}
                  <div className="ms-2">
                    {!item?.private && <Badge bg="secondary">Public</Badge>}
                    {item?.private && <Badge bg="secondary">Private</Badge>}
                  </div>
                </a>
                <p className="mb-0 opacity-75">
                  Updated {moment(item?.updated_at).fromNow()}
                </p>
              </div>
              <small className="text-nowrap">
                <FontAwesomeIcon icon={faStar} />
                <span className="ms-1">{item?.stargazers_count}</span>
              </small>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  return (
    <div className="AppRepositories">
      <div className="border-bottom color-border-secondary py-3">
        <div className="d-flex flex-items-start">
          <Form className="d-flex w-100">
            <FormControl
              type="search"
              placeholder="Find a repository"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
      <div className="user-repositories-list">
        {isLoading ? renderLoadingSkeleton() : renderRepositories()}        
      </div>
    </div>
  );
}

AppRepositories.propTypes = {
  repos: PropTypes.array,
  isLoading: PropTypes.bool,
};

AppRepositories.defaultProps = {
  repos: [],
  isLoading: true,
};

export default AppRepositories;
