import React, {useEffect, useState} from 'react'
import ModalView from "./ModalView"
import AddModal from "./AddModal";
import ConfirmModal from "./ConfirmModal";
import {Form, ListGroup} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import {aStudentEvents, aStudents} from './DataProvider'
import './index.css'
import {CSSTransition} from 'react-transition-group'
import Badge from "react-bootstrap/Badge";

const Content = (props) => {
    let initialValue = {id: aStudents.length + 1, name: '', spec: '', group: 0, syear: 0}
    const [data, setData] = useState(aStudents);

    useEffect(() => {
        setShow(props.show)
        return () => {
            setShow(false)
        };
    });
    let initialValueComp = {
        id: 0, date: '', text: 'Студент не трудоустроен',
        company: {id: 0, name: 'Неизвестно'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    }
    const [radioValue, setRadioValue] = useState('1');
    const [filter, setFilterValue] = useState("0");
    const [sort, setSortValue] = useState("0");
    const [show, setShow] = useState(false)
    const [curStudent, setCurStudent] = useState({id: 0, name: '', spec: '', group: 0, syear: 0})
    const [modalShow, setModalShow] = useState(false);
    const [modalAddShow, setModalAddShow] = useState(false);
    const [modalConfirmShow, setModalConfirmShow] = useState(false);
    const [events, setEvents] = useState([initialValueComp])
    useEffect(() => {
        setEvents(props.events)
        return () => {
            setEvents([initialValueComp])
        };
    })
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
                                setCurStudent(initialValue)
                                setModalAddShow(true)
                            }}>Добавить студента</Button>
                        </div>
                    </div>

                    <div id="scroll-view"
                         className="card text-white bg-secondary  bg-gradient text-success  d-flex flex-column align-items-stretch align-content-lg-start flex-shrink-0 "
                    >
                        <a id="cols"
                           className="switch card d-flex align-items-center flex-shrink-0 p-0.5 link-white text-decoration-none">

                            <span className=" fs-6 fw-semibold">Фильтры</span>
                        </a>
                        <div id="scr" className="list-group list-group-flush  scrollarea">
                            <Form.Select className="bg-secondary text-white" aria-label="Не выбрано"
                                         onChange={e => setFilterValue(e.target.value)}>
                                <option className="bg-secondary text-white" value="0">Не выбрано</option>
                                <option className="bg-secondary text-white" value="1">ФИО</option>
                                <option className="bg-secondary text-white" value="2">Год поступления</option>
                                <option className="bg-secondary text-white" value="3">Группа</option>
                            </Form.Select>

                            <Form.Select className="bg-secondary text-white" aria-label="Специальность"
                                         onChange={e => setSortValue(e.target.value)}>
                                <option value="0">Специальность</option>
                                <option value="ИСиТ">ИСиТ</option>
                                <option value="ПОИТ">ПОИТ</option>
                                <option value="ДЭВИ">ДЭВИ</option>
                                <option value="ПОИБМС">ПОИБМС</option>
                            </Form.Select>
                            <Button variant="secondary" onClick={() => {
                                let tmp = [...aStudents]
                                if (sort !== "0") {
                                    tmp = tmp.filter(stud => stud.spec === sort)
                                } else {
                                    tmp = [...aStudents]
                                }
                                switch (filter) {
                                    case "1":
                                        tmp.sort(function (a, b) {
                                            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                                            if (nameA < nameB)
                                                return -1
                                            if (nameA > nameB)
                                                return 1
                                            return 0
                                        })
                                        if (radioValue === "2") {
                                            tmp.reverse()
                                        }
                                        setData(tmp)
                                        break;

                                    case "2": {
                                        tmp.sort(function (a, b) {
                                            return a.syear - b.syear
                                        })
                                        if (radioValue === "2") {
                                            tmp.reverse()
                                        }
                                        setData(tmp)
                                        break;
                                    }
                                    case "3": {
                                        tmp.sort(function (a, b) {
                                            return a.group - b.group
                                        })
                                        if (radioValue === "2") {
                                            tmp.reverse()
                                        }
                                        setData(tmp)
                                        break;
                                    }
                                    case "0" :
                                        setData(tmp)
                                        break;
                                }

                            }
                            }>Применить</Button>
                        </div>
                    </div>
                </div>
                <div id="album" className="album py-2  bg-white col-2 shadow container col-10">
                    <div id="container"
                         className="justify-content-center row row-cols-7 row-cols-sm-7 row-cols-md-7 g-3">
                        <ListGroup as="ol" className="justify-content-center" numbered>

                            {data.map((key, index) =>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between bg-secondary align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{key.name} - {key.spec}</div>
                                        Группа: {key.group} | Год поступления: {key.syear}
                                    </div>

                                    <Badge bg="black" pill>
                                        <button type="button"
                                                className="view_modal btn btn-sm btn-close-white text-primary"
                                                data-bs-toggle="modal"
                                                onClick={() => {
                                                    setCurStudent(key)
                                                    setModalShow(true)
                                                }}>
                                            Подробнее
                                        </button>
                                    </Badge>
                                    <Badge bg="black" pill>
                                        <button type="button"
                                                className="like btn btn-sm btn-close-white text-primary"
                                                onClick={() => {
                                                    setCurStudent(key)
                                                    setModalAddShow(true)
                                                }}>
                                            Изменить
                                        </button>
                                    </Badge>
                                    <Badge bg="black" pill>
                                        <button type="button"
                                                className="like btn btn-sm btn-close-white text-primary"
                                                onClick={() => {
                                                    setCurStudent(key)
                                                    setModalConfirmShow(true)
                                                }}>
                                            Удалить
                                        </button>
                                    </Badge>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </div>
                </div>
                <ModalView student={curStudent}
                           work={aStudentEvents.find(event => event.student.id === curStudent.id && event.text.toLowerCase().includes("Работ".toLowerCase())) ? aStudentEvents.find(event => event.student.id === curStudent.id && event.text.toLowerCase().includes("Работ".toLowerCase())) : initialValueComp}
                           events={aStudentEvents.filter(event => event.student.id === curStudent.id)} show={modalShow}
                           onHide={() => setModalShow(false)}/>
                <AddModal student={curStudent} show={modalAddShow} onHide={() => setModalAddShow(false)}/>
                <ConfirmModal student={curStudent} show={modalConfirmShow} onHide={() => setModalConfirmShow(false)}/>
            </div>
        </CSSTransition>
    )
}


export default Content