import React from "react";
import { ListGroup } from "react-bootstrap";

function AppOrganizations() {
  return (
    <div className="AppOrganizations">
      <div className="user-organizations-list">
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex gap-3">
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">List group item heading</h6>
                <p className="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-3">
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">List group item heading</h6>
                <p className="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-3">
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">List group item heading</h6>
                <p className="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-3">
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">List group item heading</h6>
                <p className="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default AppOrganizations;
