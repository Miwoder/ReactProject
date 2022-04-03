import * as React from 'react';
import {Modal} from 'react-bootstrap'
import {useEffect, useState} from "react";


const ModalView = (props) => {
    let initialValue = {id: 0, name: ''}
    const [company, setCompany] = useState({id: 0, name: ''});
    let initialValueComp = [{
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    }]
    const [work, setWork] = useState([{
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: 'Ysand', spec: '', group: 0, syear: 0}
    }])
    const [events, setEvents] = useState([{
        id: 0, date: '', text: '',
        company: {id: 0, name: 'Студент не трудоустроен'}, student: {id: 0, name: '', spec: '', group: 0, syear: 0}
    }])
    useEffect(() => {
        setCompany(props.company)
        setWork(props.work)
        setEvents(props.events)
        return () => {
            setCompany(initialValue)
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
                                <h7 className="h5 text-black">{company.name}</h7>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <p className="card-text text-black">Студенты</p>
                        <ol id="card-body data-ol"
                            className="list-group">
                            {work.map((key, index) =>
                                <li className="list-group-item d-flex justify-content-between align-items-start bg-white">
                                    <h5 className="h4 text-black">{key.student.name !== "" ? key.student.name : 'Нет трудоустроенных студентов'}</h5>

                                </li>)}
                        </ol>
                    </div>
                </div>
            </div>
            <div className="justify-content-center modal-footer bg-white">
                <p className="card-text text-black">События</p>
                <div className="col-12 scrollarea shadow">

                    <ol id="data-ol"
                        className="list-group list-group-numbered">
                        {events.map((key, index) =>
                            <li className="list-group-item d-flex justify-content-between align-items-start  bg-white">
                                <div className="ms-2 me-auto text-black">
                                    <p>{key.date} | {key.student.name} | {key.text}</p>
                                </div>
                            </li>)}


                    </ol>
                </div>
            </div>


        </Modal>
    )
}

export default ModalView