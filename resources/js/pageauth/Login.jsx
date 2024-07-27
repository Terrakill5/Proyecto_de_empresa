import React, { useState, useEffect } from "react";
import Config from "../Config";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { setToken, getToken } = AuthUser();
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken()) navigate("/");
    }, []);

    const submitLogin = async (e) => {
        e.preventDefault();
        await axios.get('/sanctum/csrf-cookie').then((response) => {
            Config.getLogin({ email, password }).then(({ data }) => {
                if (data.success) {
                    //console.log(data);
                    setToken(
                        data.user,
                        data.token,
                        data.user.roles[0].name
                    );
                } else {
                    setMessage(data.message);
                }
            });
        });
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className="text-center fw-bolder">LOGIN</h1>

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
                                onClick={submitLogin}
                                className="btn btn-primary w-100 mt-3"
                            >
                                ENVIAR
                            </button>
                            <p className="text-center mt-3">{message}</p>
                            <hr />
                            <p className="text-center">
                                ¿Primera vez? Debe registrarse
                            </p>
                            <a
                                href="/register"
                                className="btn btn-primary w-100 mt-3"
                            >
                                Registro
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
