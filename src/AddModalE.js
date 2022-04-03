import {Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {aCompanies, aStudentEvents, aStudents} from './DataProvider.js'
import {aSpecs} from './DataProvider.js'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function AddModal(props) {
    let initialValue = {id: 0, name: ''}
    const [tmpIdSt, setTmpIdSt] = useState(0)
    const [tmpIdComp, setTmpIdComp] = useState(0)
    const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay());
    const minDate: Date = new Date(new Date().setFullYear(2000), new Date().getMonth(), 1);
    const maxDate: Date = new Date(new Date().setFullYear(2200), new Date().getMonth(), 28);
    const [startDate, setStartDate] = useState(new Date());


    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton className="bg-white">
                <Modal.Title id="contained-modal-title-vcenter" className="text-black">
                    {props && tmpIdSt === 0 ? "Добавить событие" : "Изменить событие"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid bg-white">
                <Container>
                    <InputGroup className="mb-3">
                        {props ?
                            <Form.Select aria-label="Студент" className="bg-secondary text-white"
                                         onChange={e => {
                                             setTmpIdSt(aStudents.find(stud => stud.name === e.target.value).id)
                                         }}>
                                {props.event.student.name !== '' ? <option>{props.event.student.name}</option> :
                                    <option>Не выбрано</option>}
                                {aStudents.map((value, index) =>
                                    value.name !== props.event.student.name ?
                                        <option value={value.name}>{value.name}</option> : "Имя"
                                )}
                            </Form.Select>
                            : ''}
                    </InputGroup>
                    <InputGroup className="mb-3">
                        {props ?
                            <Form.Select aria-label="Компания" className="bg-secondary text-white"
                                         onChange={e => {
                                             setTmpIdComp(aCompanies.find(stud => stud.name === e.target.value).id)
                                         }}>
                                {props.event.company.name !== "" ? <option>{props.event.company.name}</option> :
                                    <option>Не выбрано</option>}
                                {aCompanies.map((value, index) =>
                                    value.name !== props.event.company.name ?
                                        <option value={value.name}>{value.name}</option> : "Имя"
                                )}
                            </Form.Select>
                            : ''}
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
                        <FormControl
                            className="bg-secondary text-white"
                            defaultValue={props ? props.event.text : ''}
                            min={0}
                            aria-label="Описание"
                            aria-describedby="basic-addon1"
                            type="text"
                            onChange={e => props.event.text = e.target.value}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            YYYY-MM-DD
                        </InputGroup.Text>
                        <DatePicker selected={startDate} onChange={(date:Date) => {setStartDate(date) ;
                            props.event.date = startDate.getFullYear().toString() + "-" +
                                startDate.getMonth().toString() + "-" + startDate.getDay().toString();} } />
                        {/*((date) => setStartDate(date))}*/}
                        {/*            // handleChange={(e) => props.event.date = e.target.value} />*/}

                        {/*<DatePicker selected={startDate} type="text" onChange={e => props.event.date = e.target.value} />*/}
                        {/*<DatePicker></DatePicker>*/}
                        {/*<div className="calendar-rectangle">*/}
                        {/*    <div id="calendar-content" className="calendar-content"></div>*/}
                        {/*</div>*/}
                        {/*<CalendarComponent value={dateValue} min={minDate} max={maxDate}*/}
                        {/*                   isMultiSelection={false}/>*/}
                        {/*<FormControl id="basic-url" aria-describedby="basic-addon3"*/}
                        {/*             className="bg-secondary text-white"*/}
                        {/*             defaultValue={props ? props.event.date : ''}*/}
                        {/*             min={0}*/}
                        {/*             aria-label="Дата"*/}
                        {/*             type="text"*/}
                        {/*             onChange={e => props.event.date = e.target.value}/>*/}

                    </InputGroup>
                </Container>
            </Modal.Body>
            <Modal.Footer className="bg-white">
                <Button className="btn-dark" onClick={props.onHide}>Закрыть</Button>
                {props.event.text !== "" ? <Button className="btn-dark" onClick={() => {
                        props.event.student = aStudents.find(stud => stud.id === (tmpIdSt === 0 ? props.event.student.id : tmpIdSt))
                        props.event.company = aCompanies.find(comp => comp.id === (tmpIdComp === 0 ? props.event.company.id : tmpIdComp))
                        aStudentEvents.splice(aStudentEvents.indexOf(aStudentEvents.find(stud => stud.id === props.event.id)), 1)
                        aStudentEvents.push(props.event)
                        props.onHide()

                    }}>Применить</Button> :
                    <Button className="btn-dark" onClick={() => {
                        props.event.id = aStudentEvents.length + 1
                        props.event.student = aStudents.find(stud => stud.id === tmpIdSt)
                        props.event.company = aCompanies.find(comp => comp.id === tmpIdComp)
                        aStudentEvents.push(props.event)
                        props.onHide()
                    }}>Добавить</Button>}


            </Modal.Footer>
        </Modal>
    );
}

export default AddModal