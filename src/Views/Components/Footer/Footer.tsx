import React from "react";
import { AiOutlineInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";

function Footer(){
    return(
        <div className="bg-blue-600 max-w-screen px-20 py-10">
            <div className="flex items-center justify-between text-white">
                <div className="text-left justify-around">
                    <p className="font-bold text-xl">WorkHub Corporation Ltd.</p>
                    <p className="text-sm max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit mauris auctor augue varius tincidunt. Morbi ut tellus eu erat aliquet scelerisque eget at nisl. Etiam est augue, venenatis sit amet nunc et, euismod malesuada ex.</p>
                </div>
                <div className="text-center justify-around">
                    <p className="text-lg font-bold">Follow Us on Social Medias</p>
                    <div className="flex items-center justify-around m-3">
                        <AiOutlineInstagram/>
                        <AiFillLinkedin/>
                        <AiFillTwitterCircle/>
                        <AiFillFacebook/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;