import React,{useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";

export default function LayoutClient() {
    const {getRol} = AuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(getRol()!="client")
        navigate("/")
    }, []);
    return (
        <>
            <h1>Client</h1>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
