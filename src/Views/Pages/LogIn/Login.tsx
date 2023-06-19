import React from "react";
import UserNameText from "../../Components/MUI/UserNameText";
import Footer from "../../Components/Footer/Footer";
import PasswordText from "../../Components/MUI/PasswordText";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="bg-white max-w-screen">
            <div className="">
                <div className="flex-col m-auto px-10 py-5 border-blue-600 border-2 border-solid w-96 my-20 shadow-2xl">
                    <div className="text-center space-y-3">
                        <p className="text-xl font-bold">Login</p>
                        <p className="text-sm">Sign in to your Account</p>
                        <UserNameText/>
                        <PasswordText/>
                        <div>
                            {/* <Link to={'/home'}> */}
                                <Button
                                variant="contained"
                                className="w-full font-bold"
                                href="/home"
                                >Login</Button>
                            {/* </Link>                             */}
                        </div>
                        <div>
                            <Link to={'/register'}>
                                <Button
                                variant="outlined"
                                className="w-full font-bold"
                                >Register New Account</Button>
                            </Link>
                            
                        </div>
                        <div>
                            <Link to={'/register'} className="text-xs text-blue-800 underline">Forgot My Password</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;