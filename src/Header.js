import React from 'react'

const Header = () => {
    return (
        <header className="p-1 bg-light text-white">
            <div className="container ">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        Students app
                    </a>


                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-left mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-white">Студенты</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Компании</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">События</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
