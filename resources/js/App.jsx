import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

//layouts
import LayoutPublic from "./layouts/LayoutPublic";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient";

//Public
import PageHome from "./pagepublic/PageHome";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//AUTH
import Register from "./pageauth/Register";
import Login from "./pageauth/Login";
import PanelAdmin from "./pageadmin/PanelAdmin";
import PanelClient from "./pageclient/PanelClient";

//Admin
import UserAll from "./pageadmin/UserAll";

export const App = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<LayoutPublic />}>
                    <Route index element={<PageHome />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Route>

                 <Route element={<ProtectedRoutes />}>
                    <Route path="/admin" element={<LayoutAdmin />}>
                        <Route index element={<PanelAdmin />} />
                        <Route path="user" element={<UserAll />}/>
                    </Route>
                    <Route path="/client" element={<LayoutClient />}>
                        <Route index element={<PageHome />} />
                        <Route index element={<PanelClient />} />
                        <Route path="user" element={<UserAll />}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

if (document.getElementById("root")) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(

            <App />

    );
}
