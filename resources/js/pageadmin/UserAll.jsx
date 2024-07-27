import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import Config from "../Config";

export default function UserAll() {
    const [users, setUsers] = useState();

    useEffect(() => {
        getUserAll();
    }, []);

    const getUserAll = async () => {
        const response = await Config.getUserAll();
        //console.log(response.data)
        setUsers(response.data);
    };
    return (
        <div className="container">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr><th>ORDEN</th><th>NAME</th><th>ACCION</th>
                                    </tr>
                                </thead>
                                <tbody>{!users
                                        ? "cargando..."
                                        : users.map((user) => {
                                              return (<tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td></td> </tr>
                                              );
                                          })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
