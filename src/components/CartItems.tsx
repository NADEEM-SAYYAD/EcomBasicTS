import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { FilePlusFill } from "react-bootstrap-icons";
import { FileMinus } from "react-bootstrap-icons";

import { useModalHook } from "../context/modal/Modalcontext";
import { useEcomContext } from "../context/shop/ShoppinContext";

export function CartItems() {
    const { show, handleModalClose } = useModalHook();
    const {
        ecom: { cartItems },
        addItem,
        removeItem
    } = useEcomContext();
    return (
        <>
            <Modal show={show} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as="ol" numbered>
                        {cartItems.map((item, index) => {
                            return (
                                <ListGroup.Item
                                    key={index}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            {item.name}
                                        </div>
                                        {item.price}
                                    </div>
                                    <div>
                                        <FilePlusFill
                                            size={26}
                                            onClick={(e) => addItem(item)}
                                        />
                                    </div>
                                    <div>
                                        <FileMinus 
                                            size={26} 
                                            onClick={e=>removeItem(item.id)}
                                        />
                                    </div>
                                    <Badge bg="primary" pill>
                                        {item.quantity}
                                    </Badge>
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartItems;
