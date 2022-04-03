import {Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";
import {aStudentEvents, aStudents} from "./DataProvider";

function ConfirmModal(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton className="bg-white">
                <Modal.Title className="text-black">Подтверждение удаления</Modal.Title>
            </Modal.Header>

            <Modal.Body className="bg-white">
                <p className="text-black">Удалить студента {props.student.name}?</p>
            </Modal.Body>

            <Modal.Footer className="bg-white">
                <Button className="btn-dark" onClick={props.onHide}>Закрыть</Button>
                <Button className="btn-dark" onClick={() => {
                    aStudents.splice(aStudents.indexOf(props.student), 1)
                    for (let i = 0; i < aStudentEvents.length; i++) {
                        const index = aStudentEvents.findIndex(elem => elem.student.id === props.student.id)
                        if (index !== -1) {
                            aStudentEvents.splice(index, 1)
                        }
                    }
                    props.onHide()
                }}>Подтвердить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal