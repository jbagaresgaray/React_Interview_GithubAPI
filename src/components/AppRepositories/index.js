import React from "react";
import { Form, FormControl, Button, ListGroup } from "react-bootstrap";

function AppRepositories() {
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
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex gap-3">
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h5 className="mb-0">List group item heading</h5>
                <p className="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-3">
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h5 className="mb-0">List group item heading</h5>
                <p className="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-3">
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h5 className="mb-0">List group item heading</h5>
                <p className="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-3">
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h5 className="mb-0">List group item heading</h5>
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

export default AppRepositories;
