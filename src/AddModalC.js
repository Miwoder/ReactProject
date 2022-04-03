import {Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {aCompanies, aStudents} from './DataProvider.js'
import {aSpecs} from './DataProvider.js'
function AddModal(props) {
    let initialValue = {id: 0, name: ''}


    return (
        <Modal {...props}  aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton className="bg-white">
                <Modal.Title id="contained-modal-title-vcenter" className="text-black">
                    {props.company.name === "" ? "Добавить компанию" : "Изменить компанию"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid bg-white">
                <Container>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">ФИО</InputGroup.Text>
                        <FormControl
                            className="bg-secondary text-white"
                            defaultValue={props.company.name}
                            aria-label="Имя"
                            aria-describedby="basic-addon1"
                            type="string"
                            onChange={e => props.company.name = e.target.value}
                        />
                    </InputGroup>
                </Container>
            </Modal.Body>
            <Modal.Footer className="bg-white">
                <Button className="btn-dark" onClick={props.onHide}>Закрыть</Button>
                {props.company.name !== "" ? <Button className="btn-dark" onClick={()=>{ let a = aCompanies.find(stud => stud.id === props.company.id)
                    a.name = props.company.name
                    props.onHide()

                }}>Применить</Button> :
                    <Button className="btn-dark" onClick={()=>{
                        props.company.id = aCompanies.length + 1
                        aCompanies.push(props.company)
                        props.onHide()
                    }}>Добавить</Button>}


            </Modal.Footer>
        </Modal>
    );
}

export default AddModal