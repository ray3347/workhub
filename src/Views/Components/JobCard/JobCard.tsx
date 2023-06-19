import React from "react";
import { Link } from "react-router-dom";

const JobCard = () =>{
    return(
        <Link to={'/jobs/cleaningservice'} className="w-44 h-80 bg-cleaningJob bg-cover bg-center hover:scale-110 hover:shadow-2xl ease-in duration-200">
            <div className="bg-blue-600 bg-opacity-40 w-full h-full text-white py-3 px-3 hover:bg-opacity-60">
                <div className="w-full h-full relative">
                    <div className="m-auto text-center absolute top-0 text-base">
                        <p>Your place, squaky clean, everytime.</p>
                    </div>
                    <div className="m-auto text-center font-bold text-2xl absolute bottom-0">
                        <p>Cleaning Service</p>
                    </div>
                </div>
            </div>   
        </Link>

        
    );
}

export default JobCard;