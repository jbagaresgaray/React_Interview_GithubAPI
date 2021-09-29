import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function AppFooter() {
  return (
    <footer className="AppFooter">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
    </footer>
  );
}

export default AppFooter;
