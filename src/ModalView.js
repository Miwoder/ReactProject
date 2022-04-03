import * as React from 'react';
import {Modal} from 'react-bootstrap'
import {useEffect, useState} from "react";
import {aStudentEvents} from "./DataProvider";


const ModalView = (props) => {
    let initialValue = {id: 0, name: '', spec: '', group: 0, syear: 0}
    let initialValueComp = {
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    }
    const [student, setStudent] = useState({id: 0, name: '', spec: '', group: 0, syear: 0});
    const [work, setWork] = useState({
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    })
    const [events, setEvents] = useState([{
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    }])
    useEffect(() => {
        if (props.student && props.work) {
            setStudent(props.student)
            setWork(props.work)
            setEvents(props.events)
        }
        return () => {
            setStudent(initialValue)
            setWork(initialValueComp)
        };
    });

return (

            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton className="bg-white">
                    <Modal.Title id="contained-modal-title-vcenter" className="text-black">
                        Подробнее
                    </Modal.Title>
                </Modal.Header>
                    <div className="modal-body bg-white">
                        <div className="row">
                            <div className="col-6">
                                <p className="card-text text-black">Студент</p>
                                <div className="card shadow bg-white">
                                    <div className="card-body">
                                        <h5 className="card-title text-black">{student.name}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 bg-white">
                                <p className="card-text text-black bg-white">Университет</p>
                                <div className="card bg-white">
                                    {/*<ul className="list-group bg-white">*/}
                                        <p className=" text-black">Специальность: {student.spec}</p>
                                        <p className=" text-black">Группа: {student.group}</p>
                                        <p className=" text-black">Год поступления: {student.syear}</p>
                                    {/*</ul>*/}
                                </div>
                            </div>
                            <div className="col-6 bg-white">
                                <p className="card-text text-black">Компания</p>
                                <div className="card shadow bg-white">
                                    <div className="card-body">
                                        <h5 className="card-title text-black">{work.company.name}</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="justify-content-center modal-footer bg-white">
                        <p className="card-text text-black ">События</p>
                        <div className="col-12 scrollarea shadow">

                            <ol id="data-ol"
                                className="list-group list-group-numbered">
                                {events.map((key,index) =>
                                <li className="list-group-item d-flex justify-content-between align-items-start bg-white">
                                    <div className="ms-2 me-auto text-black">
                                       <p>{key.date} | {key.company.name} | {key.text}</p>
                                    </div>
                                </li>)}


                            </ol>
                        </div>
                    </div>

            </Modal>

)
}

export default ModalView