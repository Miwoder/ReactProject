import {Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";
import {aCompanies, aStudentEvents, aStudents} from "./DataProvider";

function ConfirmModal(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton className="bg-white">
                    <Modal.Title className="text-black">Подтверждение удаления</Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-white">
                    <p className="text-black">Удалить компанию {props.event.name}?</p>
                </Modal.Body>

                <Modal.Footer className="bg-white">
                    <Button className="btn-dark" onClick={props.onHide}>Закрыть</Button>
                    <Button className="btn-dark" onClick={()=>{
                        aStudentEvents.splice(aStudentEvents.indexOf(props.event),1)
                        props.onHide()
                    }}>Подтвердить</Button>
                </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal