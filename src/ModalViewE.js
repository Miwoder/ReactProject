import * as React from 'react';
import {Modal} from 'react-bootstrap'
import {useEffect, useState} from "react";


const ModalView = (props) => {
    let initialValue = {id: 0, name: ''}
    let initialValueComp = {
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    }
    const [event, setEvent] = useState(initialValueComp);
    useEffect(() => {
        setEvent(props.event)
        return () => {
            setEvent(initialValueComp)
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
                        <p className="card-text text-black">Компания</p>
                        <div className="card shadow bg-white">
                            <div className="card-body">
                                <h5 className="card-title text-black">{event.company.name}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 bg-white">
                        <p className="card-text text-black">Студент</p>
                        <div className="card shadow bg-white">
                            <div className="card-body bg-white">
                                <h5 className="card-title text-black">{event.student.name}</h5>
                                <p className="card-text text-black">{event.student.spec}</p>
                            </div>
                            <div className="bg-white">
                                <div className="list-group-item text-black bg-white">Группа: {event.student.group}</div>
                                <div className="list-group-item text-black bg-white">Год поступления: {event.student.syear}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="justify-content-center modal-footer bg-white">
                <p className="card-text text-black">Подробности</p>
                <div className="col-12 scrollarea shadow">

                    <ol id="data-ol"
                        className="list-group list-group-numbered  bg-white">
                        <li className="  bg-white list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <p className="text-black" >{event.date} || {event.text}</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>


        </Modal>
    )
}

export default ModalView