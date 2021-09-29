import React, { useRef } from "react";
import { Container, Form, FormControl, Navbar, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function AppHeader() {
  const history = useHistory();
  const userInput = useRef(null);

  const handleSearchSubmit = (e) => {
    const value = userInput.current.value;
    e.preventDefault();
    if (value) {
      history.push(`/${value}`);
    }
  };

  return (
    <header className="AppHeader">
      <Navbar expand="md" variant="dark" bg="dark" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="/">Github</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Github Username"
                className="me-2"
                aria-label="Search"
                ref={userInput}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppHeader;
