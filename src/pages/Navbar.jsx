import React from "react";
import '../styles/Navbar.css';
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div className="Nav">
            <div className="container py-2 d-flex align-items-center justify-content-between">
                <img className="img-logo" src={Logo} alt="" />
                <div>
                    <ul className="d-flex">
                        <li className="mx-2 text-white fw-bold">
                            <a href="/">
                                Alunos
                            </a>
                        </li>
                        <li className="mx-2 text-white fw-bold">
                            <a href="/register">
                                Cadastrar Aluno
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;