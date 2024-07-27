import React,{useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";

export default function LayoutAdmin() {
    const {getRol} = AuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(getRol()!="admin")
        navigate("/")
    }, []);
    return (
        <>

            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
