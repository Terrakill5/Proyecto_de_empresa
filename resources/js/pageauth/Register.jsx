import React, { useState,useEffect } from "react";
import Config from "../Config";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

export default function Register() {
    const { getToken } = AuthUser();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(getToken())
        navigate("/")
    }, []);

    const submitRegistro = async (e) => {
        e.preventDefault();
        console.log(e)
        Config.getRegister({ name, email, password }).then(({ data }) => {
            console.log("aqui llego")
            if (data.success) {
                navigate("/login");
            }
        });
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className="text-center fw-bolder">REGISTRO</h1>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre:"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="Email:"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="Password:"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                onClick={submitRegistro}
                                className="btn btn-primary w-100"
                            >
                                ENVIAR
                            </button>
                            <p className="text-center mt-3">
                                <a
                                    href="#"
                                    className="text-decoration-none small"
                                >
                                    Términos y condiciones
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
