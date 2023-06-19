import React from "react";
import Footer from "../../Components/Footer/Footer";
import UserNameText from "../../Components/MUI/UserNameText";
import PasswordText from "../../Components/MUI/PasswordText";
import EmailText from "../../Components/MUI/EmailText";
import ConfirmPassword from "../../Components/MUI/ConfirmPassword";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Register(){
    return(
        <div className="bg-white max-w-screen">
            <div className="">
                <div className="m-auto px-10 py-5 border-blue-600 border-2 border-solid w-96 my-20 shadow-2xl">
                    <div className="text-center space-y-3">
                        <p className="text-xl font-bold">Register</p>
                        <p className="text-sm">Create your Account</p>
                        <EmailText/>
                        <UserNameText/>
                        <PasswordText/>
                        <ConfirmPassword/>
                        <div>
                            <Button
                            variant="contained"
                            className="w-full"
                            >Create ACcount</Button>
                        </div>
                        <div>
                            <Link to={'/login'} className="text-xs text-blue-800 underline">Already have an account? Click Here to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;