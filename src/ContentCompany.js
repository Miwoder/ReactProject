import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button";
import {aStudentEvents, aStudents} from './DataProvider'
import {CSSTransition} from 'react-transition-group'
import {aCompanies} from './DataProvider.js'
import './index.css'
import ModalViewC from "./ModalViewC";
import AddModalC from "./AddModalC";
import ConfirmModalC from "./ConfirmModalC";
import Badge from "react-bootstrap/Badge";
import {ListGroup} from "react-bootstrap";

const Content = (props) => {
    let initialValue = {id: aStudents.length + 1, name: '', spec: '', group: 0, syear: 0}
    const [data, setData] = useState(aCompanies);
    let initialValueComp = [{
        id: 0,
        date: '',
        text: '',
        company: {id: 0, name: 'Студент не трудоустроен'},
        student: {id: 0, name: 'Нет работающих студентов', spec: '', group: 0, syear: 0}
    }]

    useEffect(() => {
        setShow(props.show)
        return () => {
            setShow(false)
        };
    });
    const [show, setShow] = useState(false)
    const [curCompany, setCurCompany] = useState({id: 0, name: ''})
    const [modalShowCompany, setModalShowCompany] = useState(false);
    const [modalAddShowC, setModalAddShowC] = useState(false);
    const [modalConfirmShowC, setModalConfirmShowC] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    return (
        <CSSTransition in={show} timeout={300}
                       classNames='alert bg-white' unmountOnExit>
            <div className="row bg-white" style={{width: "100%"}}>
                <div className=" album py-2  bg-white col-2">
                    <div id="scroll-view"
                         className="card text-white bg-secondary  bg-gradient text-white  d-flex flex-column align-items-stretch align-content-lg-start flex-shrink-0 "
                    >
                        <div id="scr" className="list-group list-group-flush  scrollarea">
                            <Button variant="secondary" onClick={() => {
                                setCurCompany(initialValue)
                                setModalAddShowC(true)
                            }}>Добавить компанию</Button>
                        </div>
                    </div>

                    <div id="scroll-view"
                         className="card text-white bg-secondary bg-gradient text-success  d-flex flex-column align-items-stretch align-content-lg-start flex-shrink-0 "
                    >
                        <a id="cols"
                           className="switch card d-flex align-items-center flex-shrink-0 p-0.5 link-dark text-decoration-none">

                            <span className=" fs-8 fw-semibold">Сортировка по имени</span>
                        </a>
                        <div id="scr" className="list-group list-group-flush  scrollarea">
                            <Button variant="secondary" onClick={() => {
                                let tmp = [...aCompanies]
                                if (radioValue === "1") {
                                    tmp.sort(function (a, b) {
                                        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                                        if (nameA < nameB)
                                            return -1
                                        if (nameA > nameB)
                                            return 1
                                        return 0
                                    })
                                } else {
                                    tmp.sort(function (a, b) {
                                        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                                        if (nameA > nameB)
                                            return -1
                                        if (nameA < nameB)
                                            return 1
                                        return 0
                                    })
                                }
                                setData(tmp)
                            }}>Применить</Button>
                        </div>
                    </div>
                </div>
                <div id="album" className="album py-2  bg-gradient col-2 shadow container col-10">
                    <div id="container"
                         className="justify-content-center row row-cols-7 row-cols-sm-7 row-cols-md-7 g-2">
                        <ListGroup as="ol" className="justify-content-center" numbered>

                            {data.map((key, index) =>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between bg-secondary align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{key.name}</div>
                                    </div>

                                    <Badge bg="black" pill>
                                        <button type="button"
                                                className="view_modal btn btn-sm btn-close-white text-primary"
                                                data-bs-toggle="modal"
                                                onClick={() => {
                                                    setCurCompany(key)
                                                    setModalShowCompany(true)
                                                }}>
                                            Подробнее
                                        </button>
                                    </Badge>
                                    <Badge bg="black" pill>
                                        <button type="button"
                                                className="like btn btn-sm btn-close-white text-primary"
                                                onClick={() => {
                                                    setCurCompany(key)
                                                    setModalAddShowC(true)
                                                }}>
                                            Изменить
                                        </button>
                                    </Badge>
                                    <Badge bg="black" pill>
                                        <button type="button"
                                                className="like btn btn-sm btn-close-white text-primary"
                                                onClick={() => {
                                                    setCurCompany(key)
                                                    setModalConfirmShowC(true)
                                                }}>
                                            Удалить
                                        </button>
                                    </Badge>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </div>
                </div>
                <ModalViewC company={curCompany}
                            work={aStudentEvents.find(event => event.company.id === curCompany.id && event.text.toLowerCase().includes("Работ".toLowerCase())) ? aStudentEvents.filter(event => event.company.id === curCompany.id && event.text.toLowerCase().includes("Работ".toLowerCase())) : initialValueComp}
                            events={aStudentEvents.filter(event => event.company.id === curCompany.id)}
                            show={modalShowCompany} onHide={() => setModalShowCompany(false)}/>
                <AddModalC company={curCompany} show={modalAddShowC} onHide={() => setModalAddShowC(false)}/>
                <ConfirmModalC company={curCompany} show={modalConfirmShowC}
                               onHide={() => setModalConfirmShowC(false)}/>
            </div>
        </CSSTransition>
    )
}

export default Content