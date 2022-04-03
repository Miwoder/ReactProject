import React, {useEffect, useState} from 'react'
import {ListGroup} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import {aStudentEvents, aStudents} from './DataProvider'
import {CSSTransition} from 'react-transition-group'
import './index.css'
import ModalViewE from "./ModalViewE";
import AddModalE from "./AddModalE";
import ConfirmModalE from "./ConfirmModalE";
import Badge from "react-bootstrap/Badge";


const Content = (props) => {
    let initialValue = {id: aStudents.length + 1, name: '', spec: '', group: 0, syear: 0}
    let initialValueEvent = {
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    }
    let initialValueComp = [{
        id: 0,
        date: '',
        text: '',
        company: {id: 0, name: 'Студент не трудоустроен'},
        student: {id: 0, name: 'Нет работающих студентов', spec: '', group: 0, syear: 0}
    }]
    const [data, setData] = useState(aStudentEvents);


    useEffect(() => {
        setShow(props.show)
        return () => {
            setShow(false)
        };
    });
    const [show, setShow] = useState(false)
    const [curEvent, setCurEvent] = useState(initialValueEvent)
    const [modalShowEvent, setModalShowEvent] = useState(false);
    const [modalAddShowE, setModalAddShowE] = useState(false);
    const [modalConfirmShowE, setModalConfirmShowE] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    return (
        <CSSTransition in={show} timeout={300}
                       classNames='alert' unmountOnExit>
            <div className="row bg-white" style={{width: "100%"}}>
                <div className=" album py-2 bg-white col-2">
                    <div id="scroll-view"
                         className="card text-success bg-light  bg-gradient text-success  d-flex flex-column align-items-stretch align-content-lg-start flex-shrink-0 "
                    >
                        <div id="scr" className="list-group list-group-flush  scrollarea">
                            <Button variant="secondary" onClick={() => {
                                setCurEvent(initialValueEvent)
                                setModalAddShowE(true)
                            }}>Добавить событие</Button>
                        </div>
                    </div>

                    <div id="scroll-view"
                         className="card text-white bg-secondary  bg-gradient d-flex flex-column align-items-stretch align-content-lg-start flex-shrink-0 "
                    >
                        <a id="cols"
                           className="switch card d-flex align-items-center flex-shrink-0 p-1 text-white text-decoration-none">

                            <span className=" fs-8 fw-semibold">Сортировка по дате</span>
                        </a>
                        <div id="scr" className="list-group list-group-flush  scrollarea">
                            <Button variant="secondary" onClick={() => {
                                let tmp = [...data]
                                if (radioValue === "1") {
                                    tmp.sort(function (a, b) {
                                        let nameA = a.date, nameB = b.date
                                        if (nameA > nameB)
                                            return -1
                                        if (nameA < nameB)
                                            return 1
                                        return 0
                                    })
                                } else {
                                    tmp.sort(function (a, b) {
                                        let nameA = a.date, nameB = b.date
                                        if (nameA < nameB)
                                            return -1
                                        if (nameA > nameB)
                                            return 1
                                        return 0
                                    })
                                }
                                setData(tmp)
                            }}>Применить</Button>
                        </div>
                    </div>
                </div>
                <div id="album" className=" album py-2  bg-gradient col-2 shadow container col-10">
                    <div id="container"
                         className="justify-content-center row row-cols-7 row-cols-sm-7 row-cols-md-7 g-3">
                        <ListGroup as="ol" className="justify-content-center" numbered>
                            {data.map((key, index) =>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between bg-secondary align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Студент: {key.student.name} __________ Компания: {key.company.name}</div>
                                        Дата: {key.date} | Событие: {key.text}
                                    </div>
                                    <Badge bg="black" pill>
                                        <button type="button" className="view_modal btn btn-sm text-white"
                                                data-bs-toggle="modal"
                                                onClick={() => {
                                                    setCurEvent(key)
                                                    setModalShowEvent(true)
                                                }}>
                                            Подробнее
                                        </button>
                                    </Badge>
                                    <Badge className="bg-black" pill>
                                        <button type="button" className="like btn btn-sm text-white"
                                                onClick={() => {
                                                    setCurEvent(key)
                                                    setModalAddShowE(true)
                                                }}>
                                            Изменить
                                        </button>
                                    </Badge>
                                    <Badge bg="black" pill>
                                        <button type="button" className="like btn btn-sm text-white"
                                                onClick={() => {
                                                    setCurEvent(key)
                                                    setModalConfirmShowE(true)
                                                }}>
                                            Удалить
                                        </button>
                                    </Badge>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </div>
                </div>
                <ModalViewE event={curEvent} show={modalShowEvent} onHide={() => setModalShowEvent(false)}/>
                <AddModalE event={curEvent} show={modalAddShowE} onHide={() => setModalAddShowE(false)}/>
                <ConfirmModalE event={curEvent} show={modalConfirmShowE} onHide={() => setModalConfirmShowE(false)}/>
            </div>
        </CSSTransition>
    )
}

export default Content