import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchList } from "../../redux/actions/watchlistAction";
import CustomAlert from "/src/components/CustomAlert.jsx";

const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.content);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWatchList(id));
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center text-text-light p-1 bg-text-dark rounded-1 mt-2">
            Your WatchList
          </h4>
          {watchlist && watchlist.length > 0 ? (
            <ListGroup className="watchlist-listgroup mb-3">
              {watchlist.map((el) => (
                <ListGroup.Item
                  key={el.id}
                  as="li"
                  className="d-flex justify-content-between align-items-start bg-bg-header-footer border-top-0 border-start-0 border-end-0 border-bottom-1"
                >
                  <div className="ms-2 me-auto text-text-light">
                    <div className="fw-bold">{el.name}</div>
                    {el.tagline && (
                      <span className="quote text-text-dark">{el.tagline}</span>
                    )}
                  </div>
                  <Badge
                    bg="transparent"
                    className="fs-5 trash"
                    onClick={() => handleRemove(el.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <CustomAlert text="WatchList is empty 😢" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default WatchList;
