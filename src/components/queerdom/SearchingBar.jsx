/* eslint-disable react/no-unescaped-entities */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const SearchingBar = () => {
  return (
    <Row className="text-center align-items-center mx-2 my-3">
      <Col md={8} lg={9}>
        <Form.Control
          id="searchbar"
          size="lg"
          type="search"
          placeholder="bury your gays"
        />
      </Col>
      <Col className="mt-2 mt-md-0">
        <Button variant="yellow" size="lg" id="searchBtn">
          Let's go
        </Button>
      </Col>
    </Row>
  );
};
export default SearchingBar;
