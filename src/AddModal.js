import {Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {aStudents} from './DataProvider.js'
import {aSpecs} from './DataProvider.js'
import {aStudentEvents} from './DataProvider'

function AddModal(props) {
    let initialValue = {id: 0, name: '', spec: '', group: 0, syear: 0}
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton className="bg-white">
                <Modal.Title id="contained-modal-title-vcenter" className="text-black">
                    {props ? props.student.name === '' ? "Добавить студента" : "Изменить студента" : 'Добавить студента'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid bg-white">
                <Container>
                    <InputGroup className="bg-secondary text-white mb-3">
                        <InputGroup.Text id="basic-addon1">ФИО</InputGroup.Text>
                        <FormControl
                            className="bg-secondary text-white"
                            defaultValue={props ? props.student.name : ''}
                            aria-label="Имя"
                            aria-describedby="basic-addon1"
                            type="string"
                            onChange={e => props.student.name = e.target.value}
                        />
                    </InputGroup>
                    <InputGroup className="bg-secondary text-white mb-3">
                        {props ?
                            <Form.Select className="bg-secondary text-white" aria-label="Специальность"
                                         onChange={e => {
                                             props.student.spec = e.target.value
                                         }}>
                                {props.student.name !== "" ? <option>{props.student.spec}</option> :
                                    <option>Не выбрано</option>}
                                {aSpecs.map((value, index) =>
                                    value !== props.student.spec ?
                                        <option value={value}>{value}</option> : "Специальность"
                                )}
                            </Form.Select>
                            : ''}
                    </InputGroup>
                    <InputGroup className="bg-secondary text-white mb-3">
                        <InputGroup.Text id="basic-addon1">Год поступления</InputGroup.Text>
                        <FormControl
                            className="bg-secondary text-white"
                            defaultValue={props && props.student.name !== "" ? props.student.syear : 2018}
                            aria-label="Год"
                            aria-describedby="basic-addon1"
                            type="number"
                            onChange={e => props.student.syear = e.target.value}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Группа</InputGroup.Text>
                        <FormControl
                            className="bg-secondary text-white"
                            defaultValue={props ? props.student.group : ''}
                            min={0}
                            aria-label="Год"
                            aria-describedby="basic-addon1"
                            type="number"
                            onChange={e => props.student.group = e.target.value}
                        />
                    </InputGroup>
                </Container>
            </Modal.Body>
            <Modal.Footer className="bg-white">
                <Button className="btn-dark" onClick={props.onHide}>Закрыть</Button>
                {props.student.name !== "" ? <Button className="btn-dark" onClick={() => {
                        let a = aStudents.find(stud => stud.id === props.student.id)
                        a.name = props.student.name
                        a.spec = props.student.spec
                        a.group = props.student.group
                        a.syear = props.student.syear
                    aStudentEvents.map((key,index)=> key.student.id === a.id ? key.student=a : key.student)
                        props.onHide()

                    }}>Применить</Button> :
                    <Button  className="btn-dark" onClick={() => {
                        props.student.id = aStudents.length + 1
                        aStudents.push(props.student)
                        props.onHide()

                    }}>Добавить</Button>}


            </Modal.Footer>
        </Modal>
    );
}

export default AddModal