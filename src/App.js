import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Header from './Header'
import Content from "./Content"
import ModalView from "./ModalView";
import {aStudents} from './DataProvider.js'
import {aCompanies} from './DataProvider.js'
import {aStudentEvents} from "./DataProvider.js";
import ContentCompany from "./ContentCompany";
import ContentEvents from './ContentEvents'
import './index.css'

function App() {
    const [showCompany, setCompanyShow] = useState(false);
    const [showStudents, setStudentsShow] = useState(true);
    const [showEvents, setEventsShow] = useState(false);
    return (
        <div className="bg-white">
            <header className="p-0.5 bg-white">
                <div className="container ">
                    <div className="d-flex flex-wrap align-items-center justify-content-around">

                        <ul className="nav col-12  justify-content-around ">
                            <li><a href="#" className="h3 nav-link text-black " onClick={()=> {setStudentsShow(true)
                                setCompanyShow(false)
                                setEventsShow(false)}}>Студенты</a></li>
                            <li><a href="#" className="h3 nav-link px-2 text-black" onClick={()=> {setStudentsShow(false)
                                setCompanyShow(true)
                                setEventsShow(false)}}>Компании</a></li>
                            <li><a href="#" className="h3 nav-link px-2 text-black" onClick={()=> {setStudentsShow(false)
                                setCompanyShow(false)
                                setEventsShow(true)}}>События</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <ContentCompany students={aStudents} show={showCompany} />
            <ContentEvents events={aStudentEvents} show={showEvents} />
            <Content students={aStudents} events={aStudentEvents} show={showStudents} />
        </div>
    );
}

export default App;
